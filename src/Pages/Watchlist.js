import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import "../Styles/Content.css";

function Watchlist(props) {
  return (
    <div className="container mb-5 m" style={{ paddingTop: "140px" }}>
      <div className="content-wrapper">
        <div className="content-grid-wrapper">
          {props.watchlist.length === 0
            ? null
            : props.watchlist.map((movie) => {
                return (
                  <Link to={`/detail/${movie._id}`}>
                    <div className="content-grid">
                      <img src={movie.poster} />
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
  );
}
const mapStateToProps = (state) => {
  return {
    watchlist: state.Movies.watchlist,
  };
};
export default connect(mapStateToProps)(Watchlist);
