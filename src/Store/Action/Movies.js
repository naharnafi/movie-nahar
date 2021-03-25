import axios from "axios";

export const getMovies = (page = 1) => dispatch => {
	// const { auth } = payload;
	axios.get(
		// `https://api.themoviedb.org/3/movie/popular?api_key=b8da279d7ca765ae2d6f964808c7a78e`
		`https://laflix-api.herokuapp.com/api/movies?page=${page}`
	)
		.then(res => {
			if (res.status === 200) {
				dispatch({
					type: "GET_MOVIES",
					payload: res.data,
				});
			}
		})
		.catch(err => console.log(err));
};

export const getGenres = () => dispatch => {
	// const { auth } = payload;
	axios.get(
		// `https://api.themoviedb.org/3/genre/movie/list?api_key=b8da279d7ca765ae2d6f964808c7a78e&language=en-US`
		`https://laflix-api.herokuapp.com/api/category`
	)
		.then(res => {
			if (res.status === 200) {
				dispatch({
					type: "GET_GENRES",
					payload: res.data.data,
				});
			}
		})
		.catch(err => console.log(err));
};

export const getMovieDetail = id => dispatch => {
	// const { auth } = payload;
	axios.get(
		// `https://api.themoviedb.org/3/movie/${id}?api_key=b8da279d7ca765ae2d6f964808c7a78e&language=en-US`
		`https://laflix-api.herokuapp.com/api/movies/${id}`
	)
		.then(res => {
			if (res.status === 200) {
				dispatch({
					type: "GET_MOVIE_DETAIL",
					payload: res.data.data,
				});
			}
		})
		.catch(err => console.log(err));
};

export const getMovieByGenre = id => dispatch => {
	// const { auth } = payload;
	axios.get(
		// `https://api.themoviedb.org/3/discover/movie?api_key=b8da279d7ca765ae2d6f964808c7a78e&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=${id}`
		`https://laflix-api.herokuapp.com/api/categories/${id}/movies`
	)
		.then(res => {
			if (res.status === 200) {
				dispatch({
					type: "GET_MOVIE_BY_GENRE",
					payload: res.data,
				});
			}
		})
		.catch(err => console.log(err));
};
export const getMovieReviews = id => dispatch => {
	// const { auth } = payload;
	axios.get(
		// `https://api.themoviedb.org/3/discover/movie?api_key=b8da279d7ca765ae2d6f964808c7a78e&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=${id}`
		`https://laflix-api.herokuapp.com/api/movies/${id}/reviews`
	)
		.then(res => {
			if (res.status === 200) {
				dispatch({
					type: "GET_MOVIE_REVIEW",
					payload: res.data.data,
				});
			}
		})
		.catch(err => console.log(err));
};
export const setWatchlist = params => dispatch => {
	dispatch({
		type: "SET_WATCHLIST",
		payload: params,
	});

	console.log(JSON.parse(localStorage.getItem("watchList")));

	!localStorage.getItem("watchList")
		? localStorage.setItem("watchList", JSON.stringify([{ ...params }]))
		: localStorage.setItem(
				"watchList",
				JSON.stringify(
					JSON.parse(
						localStorage.getItem("watchList")
					).concat({ ...params })
				)
		  );
};

export const searchMovie = input => dispatch => {
	const { query } = input;
	axios.get(
		// `https://api.themoviedb.org/3/discover/movie?api_key=b8da279d7ca765ae2d6f964808c7a78e&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=${id}`
		`https://laflix-api.herokuapp.com/api/search/${query}`
	)
		.then(res => {
			dispatch({
				type: "SEARCH_MOVIE",
				payload: res.data.data,
			});
		})
		.catch(err => console.log(err));
};
export const postReview = (id, { headline, rating, comment }) => (dispatch) => {
  axios
    .post(`https://laflix-api.herokuapp.com/api/movies/${id}/reviews`, {
      headline,
      rating,
      comment,
    })
    .then((res) => {
      if (res.status === 200) {
        dispatch({ type: "POST_REVIEWS", payload: res.data.data });
      }
    });
};
