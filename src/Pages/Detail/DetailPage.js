import React, { useEffect } from "react";
import { Container, Jumbotron } from "reactstrap";
import { connect } from "react-redux";
import { useParams } from "react-router-dom";
import { getMovieDetail, setWatchlist } from "../../Store/Action/Movies";
import ReactStars from "react-rating-stars-component";
import "../../Styles/detail.css";
import Overview from "./DetailTab/Overview";
import Review from "./DetailTab/Review";
import Character from "./DetailTab/Character";
import { Switch, Route, Link, NavLink } from "react-router-dom";

function DetailPage(props) {
  const params = useParams();

  useEffect(() => {
    props.getMovieDetail(params.id);
  }, [params.id]);

  const handleTrailer = () => {
    <iframe src={props.movieDetail.trailer} width="540" height="450"></iframe>;
  };

  return (
    <div>
      <Jumbotron className="jumbotron">
        <Container>
          <div className="jumbotron-wrapper">
            <div className="jumbotron-img">
              <img src={props.movieDetail.poster} />
            </div>
            <div className="jumbotron-content">
              <h2>{props.movieDetail.title}</h2>
              <div className="jumbotron-content-rating">
                <div>
                  <ReactStars
                    size={30}
                    value={props.movieDetail.ratingAverage}
                    edit={false}
                    isHalf={true}
                  />
                </div>
                {/* <div>{props.movieDetail.vote_count} reviews</div> */}
              </div>
              <p>{props.movieDetail.synopsis}</p>
              <a href={props.movieDetail.trailer} target="_blank">
                <button className="btn-trailer" onClick={handleTrailer}>
                  Watch Trailer
                </button>
              </a>

              {!localStorage.getItem("my-token") ? null : (
                <button
                  className={
                    props.watchlist.find(
                      (item) => item._id === props.movieDetail._id
                    )
                      ? "btn-watchlist-active"
                      : "btn-watchlist"
                  }
                  onClick={() =>
                    props.setWatchlist({
                      _id: props.movieDetail._id,
                      title: props.movieDetail.title,
                      poster: props.movieDetail.poster,
                    })
                  }
                >
                  Add Watchlist
                </button>
              )}
            </div>
          </div>
        </Container>
      </Jumbotron>
      <div className="container">
        <NavLink
          className="btn-genre"
          activeClassName="btn-genre-active"
          exact
          to={`/detail/${props.match.params.id}`}
        >
          Overview
        </NavLink>
        <NavLink
          className="btn-genre"
          activeClassName="btn-genre-active"
          exact
          to={`/detail/${props.match.params.id}/character`}
        >
          Character
        </NavLink>
        <NavLink
          className="btn-genre"
          activeClassName="btn-genre-active"
          exact
          to={`/detail/${props.match.params.id}/review`}
        >
          Review
        </NavLink>
      </div>

      <Switch>
        <Route path="/detail/:id/character" exact component={Character} />
        <Route path="/detail/:id/review" exact component={Review} />
        <Route
          path="/detail/:id"
          exact
          component={() => <Overview movieDetail={props.movieDetail} />}
        />
      </Switch>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    movieDetail: state.Movies.movieDetail,
    watchlist: state.Movies.watchlist,
  };
};

export default connect(mapStateToProps, { getMovieDetail, setWatchlist })(
  DetailPage
);
