import * as actionTypes from "./actionTypes";

export const fetchTopRatedMovies = (page) => (dispatch) => {
  fetch(
    `https://api.themoviedb.org/3/movie/top_rated?api_key=a78627f739e78c82e6335d377214ef74&language=en-US&page=${page}`
  )
    .then((response) => response.json())
    .then((data) =>
      dispatch({
        type: actionTypes.GET_TOP_RATED_MOVIES,
        payload: data,
      })
    );
};
