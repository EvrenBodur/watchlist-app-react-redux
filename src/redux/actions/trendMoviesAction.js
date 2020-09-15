import * as actionTypes from "./actionTypes";

export const fetchTrendMovies = () => (dispatch) => {
  fetch(
    `https://api.themoviedb.org/3/trending/all/day?api_key=a78627f739e78c82e6335d377214ef74`
  )
    .then((response) => response.json())
    .then((data) =>
      dispatch({
        type: actionTypes.GET_TREND_MOVIES,
        payload: data,
      })
    );
};
