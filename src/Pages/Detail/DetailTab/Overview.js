import React from "react";
import "../../../Styles/overview.css";

export default function Overview(props) {
  return (
    <div className="container">
      <div className="overview">
        <div className="overview-synopsis">
          <h5>Synopsis</h5>
          <p>{props.movieDetail.synopsis}</p>
        </div>
        <div className="overview-info">
          <h5>Movie</h5>
          <table>
            <tr>
              <td className="font-weight-bold">Release Date</td>
              <td className="pl-4 pr-2">:</td>
              <td>{props.movieDetail.releaseDate}</td>
            </tr>
            <tr>
              <td className="font-weight-bold">Director</td>
              <td className="pl-4 pr-2">:</td>
              <td>{props.movieDetail.director}</td>
            </tr>
            <tr>
              <td className="font-weight-bold">Duration</td>
              <td className="pl-4 pr-2">:</td>
              <td>{props.movieDetail.duration}</td>
            </tr>
            <tr>
              <td className="font-weight-bold">Budget</td>
              <td className="pl-4 pr-2">:</td>
              <td>{props.movieDetail.budget}</td>
            </tr>
          </table>
        </div>
      </div>
    </div>
  );
}
