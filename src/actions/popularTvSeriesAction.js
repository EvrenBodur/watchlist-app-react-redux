import * as actionTypes from "./actionTypes";

export const fetchPopularTvSeries = () => (dispatch) => {
  fetch(
    "https://api.themoviedb.org/3/tv/popular?api_key=a78627f739e78c82e6335d377214ef74&language=en-US&page=1"
  )
    .then((response) => response.json())
    .then((data) =>
      dispatch({
        type: actionTypes.GET_POPULAR_TV_SERIES,
        payload: data,
      })
    );
};
