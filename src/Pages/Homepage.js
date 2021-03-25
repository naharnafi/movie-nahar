import React, { useEffect, useState } from "react";
import MovieCarousel from "../Components/MovieCarousel";
import "../Styles/Content.css";
import Content from "../Components/Content";
import Category from "../Components/Category";
import { getGenres, getMovies, getMovieByGenre } from "../Store/Action/Movies";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { Container } from "reactstrap";
// import { getMovieByGenre } from "../Store/Action/Movies";
import "../Styles/Navlink.css";

const Homepage = (props) => {
  const [active, setActive] = useState(1);
  const [genreId, setGenreId] = useState(0);

  const whichPage = 1;
  useEffect(() => {
    props.getGenres();
    props.getMovies();
  }, [props.getMovies]);

  // const handleChangePage = (pg) => {
  //   setPage(pg);
  //   props.getMovies(pg);
  // };

  // const handleGetMovieByGenre = (id) => {
  //   setGenreId(id);
  //   props.getMovieByGenre(id);
  // };
  // const elements = ["one", "two", "three"];

  const items = [];

  for (let i = 1; i <= props.movies.totalPage; i++) {
    items.push(
      <button
        className="rounded-circle mr-3 px-2 btn-page"
        onClick={() => {
          setActive(i);
          props.getMovies(i);
        }}
      >
        {i}
        {/* {active}
        {props.movies.activePage} */}
      </button>
    );
  }
  console.log(props.movies);
  return (
    <div>
      <MovieCarousel />
      <div className="content-title container mt-3">Browse by category</div>
      <div className="container mt-3 mb-5">
        <button
          className={genreId === 0 ? "btn-genre-active" : "btn-genre"}
          onClick={() => {
            setGenreId(0);
            props.getMovies();
          }}
        >
          All
        </button>
        {props.genres.length === 0
          ? null
          : props.genres.map((link) => (
              <button
                className={
                  genreId === link._id ? "btn-genre-active" : "btn-genre"
                }
                onClick={() => {
                  setGenreId(link._id);
                  props.getMovieByGenre(link._id);
                }}
              >
                {link.category}
              </button>
            ))}
        <div className="content-wrapper">
          <div className="content-grid-wrapper">
            {props.movies.length === 0
              ? null
              : props.movies.data.map((movie) => {
                  return (
                    <Link to={`/detail/${movie._id}`}>
                      <div className="content-grid">
                        <img src={movie.poster} />
                        <div className="content-grid-info">
                          <p className="font-weight-bold">{movie.title}</p>
                          <p className="font-weight-bold">
                            {movie.releaseDate.slice(7, 12)}
                          </p>
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
        <div className="d-flex justify-content-center mt-4">{items}</div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    genres: state.Movies.genresData,
    movies: state.Movies.moviesData,
  };
};
export default connect(mapStateToProps, {
  getGenres,
  getMovies,
  getMovieByGenre,
})(Homepage);
