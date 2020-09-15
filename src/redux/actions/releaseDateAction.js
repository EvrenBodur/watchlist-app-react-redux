import * as actionTypes from "./actionTypes";

export const fetchReleaseDateMovies = () => (dispatch) => {
  fetch(
    `https://api.themoviedb.org/3/discover/movie?api_key=a78627f739e78c82e6335d377214ef74&language=en-US&sort_by=release_date&include_adult=false&include_video=false&page=1`
  )
    .then((response) => response.json())
    .then((data) =>
      dispatch({
        type: actionTypes.GET_POPULAR_MOVIES_BY_RELEASE_DATE,
        payload: data,
      })
    );
};
