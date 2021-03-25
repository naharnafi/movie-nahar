import React, { useEffect } from "react";
import "../Styles/Content.css";
import { connect } from "react-redux";
import { getMovies } from "../Store/Action/Movies";
import { Link } from "react-router-dom";

// import { useParams } from "react-router-dom";

const Content = (props) => {
  // const imgUrl = "https://image.tmdb.org/t/p/w500";

  useEffect(() => {
    props.getMovies();
    // props.getMovieByGenre(params.id);
  }, []);

  return (
    <div>
      {/* <MovieCarousel /> */}
      <div className="container mb-5">
        <div className="content-wrapper">
          <div className="content-grid-wrapper">
            {props.movies.length === 0
              ? null
              : props.movies.map((movie) => {
                  return (
                    <Link to={`/detail/${movie._id}`}>
                      <div className="content-grid">
                        <img src="https://www.joblo.com/assets/images/oldsite/posters/images/full/thor-ragnarok-poster-main.jpg" />
                        <div className="content-grid-info">
                          <p>{movie.title}</p>
                          <p>{movie.releaseDate}</p>
                        </div>

                        <div className="content-grid-over">
                          <h4>Overview</h4>
                          <p>{movie.synopsis}</p>
                        </div>
                      </div>
                    </Link>
                  );
                })}
          </div>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    movies: state.Movies.moviesData,
    // movies: state.Movies.movieByGenre,
    // movieByGenre: state.Movies.movieByGenre,
  };
};

export default connect(mapStateToProps, { getMovies })(Content);
