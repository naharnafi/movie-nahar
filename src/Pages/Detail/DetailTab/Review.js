import React, { useState, useEffect } from "react";
import ReactStars from "react-rating-stars-component";
import { useParams } from "react-router-dom";
import { getMovieReviews, postReview } from "../../../Store/Action/Movies";
import { connect } from "react-redux";
import "../../../Styles/overview.css";

function Review(props) {
  const currentUser = localStorage.getItem("name");
  console.log(currentUser);

  const params = useParams();
  // const [countRating, setRating] = useState(0);
  const [objReview, setReview] = useState({
    headline: "Review movie",
    rating: 0,
    comment: "",
  });

  useEffect(() => {
    props.getMovieReviews(params.id);
  }, [params.id]);

  return (
    <div className="container">
      {!localStorage.getItem("my-token") ? null : (
        <form className="review mt-4 ml-3">
          <div className="review-img mr-4 pt-2">
            <img src="https://icon-library.com/images/avatar-icon-free/avatar-icon-free-12.jpg" />
          </div>
          <div className="review-form">
            <label>{currentUser}</label>
            <ReactStars
              size={20}
              count={5}
              isHalf={true}
              value={objReview.rating}
              color={"grey"}
              activeColor={"yellow"}
              onChange={(newValue) => console.log({ newValue })}
            />
            <textarea
              rows="4"
              cols="130"
              name="comment"
              form="usrform"
              placeholder="Input Review Here...."
              className="px-2 py-1"
              value={objReview.comment}
              onChange={(e) => setReview({ [e.target.name]: e.target.value })}
            />
            <p>{objReview.comment}</p>
            <button
              className="btn-review py-1 px-3 mr-3 mt-2 float-right"
              onClick={(event) => {
                event.preventDefault();
                postReview(params.id, { objReview });
              }}
            >
              Submit
            </button>
          </div>
        </form>
      )}
      {/* {props.movieReview.length === 0
        ? null
        : props.movieReview.map((review) => {
            return (
              <div className="review mt-4 ml-3 w-75">
                <div className="review-img mr-4 pt-2">
                  <img src="https://icon-library.com/images/avatar-icon-free/avatar-icon-free-12.jpg" />
                </div>
                <div>
                  <p className="font-weight-bold mb-0">
                    {review.user.username}
                  </p>
                  <p>{review.comment}</p>
                </div>
              </div>
            );
          })} */}
      {props.movieReview.length === 0
        ? null
        : props.movieReview.map((review) =>
            review.length === 0
              ? null
              : review.map((item) => {
                  return (
                    <div className="review mt-4 ml-3 w-75">
                      <div className="review-img mr-4 pt-2">
                        <img src="https://icon-library.com/images/avatar-icon-free/avatar-icon-free-12.jpg" />
                      </div>
                      <div>
                        <p className="font-weight-bold mb-0">
                          {item.user === null
                            ? "Anonymous"
                            : item.user.username}
                        </p>
                        <p>{item.comment}</p>
                      </div>
                    </div>
                  );
                })
          )}
    </div>
  );
}
const mapStateToProps = (state) => {
  return {
    movieReview: state.Movies.reviewData,
  };
};
export default connect(mapStateToProps, { getMovieReviews, postReview })(
  Review
);
