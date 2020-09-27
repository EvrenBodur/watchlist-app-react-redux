import * as actionTypes from "./actionTypes";

export const getPopularMovies = () => (dispatch) => {
  fetch(
    `https://api.themoviedb.org/3/movie/popular?api_key=a78627f739e78c82e6335d377214ef74&language=en-US&page=1`
  )
    .then((response) => response.json())
    .then((data) =>
      dispatch({
        type: actionTypes.GET_POPULAR_MOVIES,
        payload: data,
      })
    );
};

export const getTopRatedMovies = () => (dispatch) => {
  fetch(
    `https://api.themoviedb.org/3/movie/top_rated?api_key=a78627f739e78c82e6335d377214ef74&language=en-US&page=1`
  )
    .then((response) => response.json())
    .then((data) =>
      dispatch({
        type: actionTypes.GET_TOP_RATED_MOVIES,
        payload: data,
      })
    );
};

export const getUpComingMovies = () => (dispatch) => {
  fetch(
    `https://api.themoviedb.org/3/movie/upcoming?api_key=a78627f739e78c82e6335d377214ef74&language=en-US&page=1`
  )
    .then((response) => response.json())
    .then((data) =>
      dispatch({
        type: actionTypes.GET_UPCOMING_MOVIES,
        payload: data,
      })
    );
};
export const getNowPlayingMovies = () => (dispatch) => {
  fetch(
    `https://api.themoviedb.org/3/movie/now_playing?api_key=a78627f739e78c82e6335d377214ef74&language=en-US&page=1`
  )
    .then((response) => response.json())
    .then((data) =>
      dispatch({
        type: actionTypes.GET_NOW_PLAYING_MOVIES,
        payload: data,
      })
    );
};
