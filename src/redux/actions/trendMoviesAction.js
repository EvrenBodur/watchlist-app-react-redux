import * as actionTypes from "./actionTypes";

export const fetchTrendMovies = () => (dispatch) => {
  fetch(
    `https://api.themoviedb.org/3/trending/all/day?api_key=${process.env.REACT_APP_TMDB_KEY}`
  )
    .then((response) => response.json())
    .then((data) =>
      dispatch({
        type: actionTypes.GET_TREND_MOVIES,
        payload: data,
      })
    );
};
