import * as actionTypes from "./actionTypes";

export const fetchPopularMovies = () => (dispatch) => {
  fetch(
    `https://api.themoviedb.org/3/discover/movie?api_key=${process.env.REACT_APP_TMDB_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1`
  )
    .then((response) => response.json())
    .then((data) =>
      dispatch({
        type: actionTypes.GET_POPULAR_MOVIES,
        payload: data,
      })
    );
};
