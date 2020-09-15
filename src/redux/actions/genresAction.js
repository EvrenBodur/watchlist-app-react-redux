import * as actionTypes from "./actionTypes";

export const fetchGenres = () => (dispatch) => {
  fetch(
    `https://api.themoviedb.org/3/genre/movie/list?api_key=a78627f739e78c82e6335d377214ef74&language=en-US`
  )
    .then((response) => response.json())
    .then((data) =>
      dispatch({
        type: actionTypes.GET_GENRES,
        payload: data,
      })
    );
};
