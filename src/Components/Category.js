import React, { useEffect } from "react";
import "../Styles/Content.css";
import { connect } from "react-redux";
import { getMovieByGenre } from "../Store/Action/Movies";
import { useParams, Link } from "react-router-dom";
import MovieCarousel from "./MovieCarousel";
// import Homepage from "../Pages/Homepage";

function Category(props) {
  const imgUrl = "https://image.tmdb.org/t/p/w500";
  const params = useParams();

  useEffect(() => {
    props.getMovieByGenre(params.id);
  }, [params.id]);

  // useEffect(() => {
  //   props.getGenres();
  // }, []);

  // const handleGetMovieByGenre = (id) => {
  //   props.getMovieByGenre(id);
  // };

  return (
    <div>
      <MovieCarousel />
      {/* <Homepage /> */}
      <div className="container mb-5">
        <div className="content-wrapper">
          <div className="content-grid-wrapper">
            {props.movieByGenre.length === 0
              ? null
              : props.movieByGenre.map((movie) => {
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
      {/* <NavLink
        className="navigation"
        activeClassName="navigation-active"
        exact
        to="/"
      >
        All
      </NavLink>
      {props.genres.length === 0
        ? null
        : props.genres.map((link) => (
            <NavLink
              className="navigation"
              exact
              to={`/genre/${link.id}`}
              // onClick={() => handleGetMovieByGenre(link.id)}
            >
              {link.name}
            </NavLink>
          ))}
      <Switch>
        {props.genres.length === 0
          ? null
          : props.genres.map((route, index) => (
              <Route
                exact
                path={`/genre/${route.id}`}
                component={Content}
                key={index}
              />
            ))}
        <Route exact path="/" component={Content} />
      </Switch> */}
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    movieByGenre: state.Movies.movieByGenre,
    // genres: state.Movies.genresData,
  };
};

export default connect(mapStateToProps, { getMovieByGenre })(Category);
