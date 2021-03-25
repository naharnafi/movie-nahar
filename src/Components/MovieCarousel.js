import kong from "../Assets/Images/kong.jpg";
import oblivion from "../Assets/Images/oblivion.jpg";
import blodshot from "../Assets/Images/blodshot.jpg";
import { Carousel } from "react-bootstrap";
import React, { useState } from "react";
import { searchMovie } from "../Store/Action/Movies";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

function MovieCarousel(props) {
	const [search, setSearch] = useState("");
	const handleSubmit = (e) => {
		e.preventDefault();
		props.searchMovie({ query: search });
	};
	return (
		<div>
			<div
				style={{
					display: "flex",
					justifyContent: "center",
				}}
			>
				<form onSubmit={handleSubmit}>
					<input
						className="search-bar pl-2"
						value={search}
						placeholder="Search movie..."
						type="text"
						onChange={(e) => setSearch(e.target.value)}
						value={search}
					/>
					<br></br>
					<button
						style={{
							display: "flex",
							justifyContent: "center",
							alignItems: "center",
							textAlign: "center",
							margin: "auto",
							marginTop: "8px",
						}}
						onClick={handleSubmit}
						class="btn btn-info"
					>
						<span>Search</span>
					</button>
				</form>
			</div>
			<div>
				{props.movieSearch.length === 0 ? (
					<Carousel>
						<Carousel.Item>
							<div className="carousel-wrapper">
								<img
									className="carousel-pict"
									src={kong}
									alt="First slide"
								/>
							</div>
						</Carousel.Item>
						<Carousel.Item>
							<div className="carousel-wrapper">
								<img
									className="carousel-pict"
									src={oblivion}
									alt="Third slide"
								/>
							</div>
						</Carousel.Item>
						<Carousel.Item>
							<div className="carousel-wrapper">
								<img
									className="carousel-pict"
									src={blodshot}
									alt="Third slide"
								/>
							</div>
						</Carousel.Item>
					</Carousel>
				) : (
					props.movieSearch.map((movie) => {
						return (
							<div className="content-wrapper">
								<div className="content-grid-wrapper">
									<Link
										to={`/detail/${movie._id}`}
									>
										<div className="content-grid">
											<img
												src={
													movie.poster
												}
											/>
											<div className="content-grid-info">
												<p className="font-weight-bold">
													{
														movie.title
													}
												</p>
												<p className="font-weight-bold">
													{movie.releaseDate.slice(
														7,
														12
													)}
												</p>
											</div>

											<div className="content-grid-over">
												<h4>
													Overview
												</h4>
												<p>
													{
														movie.synopsis
													}
												</p>
											</div>
										</div>
									</Link>
								</div>
							</div>
						);
					})
				)}
			</div>
		</div>
	);
}

const mapStateToProps = (state) => {
	return {
		movieSearch: state.Movies.movieSearchData,
	};
};

export default connect(mapStateToProps, { searchMovie })(MovieCarousel);
