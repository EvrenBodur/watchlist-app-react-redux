import * as actionTypes from "./actionTypes";

export const fetchGenres = () => (dispatch) => {
  fetch(
    `https://api.themoviedb.org/3/genre/movie/list?api_key=${process.env.REACT_APP_TMDB_KEY}&language=en-US`
  )
    .then((response) => response.json())
    .then((data) =>
      dispatch({
        type: actionTypes.GET_GENRES,
        payload: data,
      })
    );
};
