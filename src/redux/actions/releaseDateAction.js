import * as actionTypes from "./actionTypes";

export const fetchReleaseDateMovies = () => (dispatch) => {
  fetch(
    `https://api.themoviedb.org/3/discover/movie?api_key=${process.env.REACT_APP_TMDB_KEY}&language=en-US&sort_by=release_date&include_adult=false&include_video=false&page=1`
  )
    .then((response) => response.json())
    .then((data) =>
      dispatch({
        type: actionTypes.GET_POPULAR_MOVIES_BY_RELEASE_DATE,
        payload: data,
      })
    );
};
