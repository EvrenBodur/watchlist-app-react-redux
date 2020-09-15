import * as actionTypes from "./actionTypes";

export const fetchSearchMovies = (input) => (dispatch) => {
  fetch(
    `https://api.themoviedb.org/3/search/multi?api_key=${process.env.REACT_APP_TMDB_KEY}&language=en-US&page=1&include_adult=false&query=${input}`
  )
    .then((response) => response.json())
    .then((data) =>
      dispatch({
        type: actionTypes.GET_SEARCH_MOVIES,
        payload: data,
      })
    );
};
