import * as actionTypes from "./actionTypes";

export const getPopularSeries = () => (dispatch) => {
  fetch(`
    https://api.themoviedb.org/3/tv/popular?api_key=a78627f739e78c82e6335d377214ef74&language=en-US&page=1`)
    .then((response) => response.json())
    .then((data) =>
      dispatch({
        type: actionTypes.GET_POPULAR_SERIES,
        payload: data,
      })
    );
};

export const getTopRatedSeries = () => (dispatch) => {
  fetch(`
    https://api.themoviedb.org/3/tv/top_rated?api_key=a78627f739e78c82e6335d377214ef74&language=en-US&page=1`)
    .then((response) => response.json())
    .then((data) =>
      dispatch({
        type: actionTypes.GET_TOP_RATED_SERIES,
        payload: data,
      })
    );
};

export const getOnTheAirSeries = () => (dispatch) => {
  fetch(`
    https://api.themoviedb.org/3/tv/on_the_air?api_key=a78627f739e78c82e6335d377214ef74&language=en-US&page=1`)
    .then((response) => response.json())
    .then((data) =>
      dispatch({
        type: actionTypes.GET_ON_THE_AIR_SERIES,
        payload: data,
      })
    );
};

export const getAiringTodaySeries = () => (dispatch) => {
  fetch(`
    https://api.themoviedb.org/3/tv/airing_today?api_key=a78627f739e78c82e6335d377214ef74&language=en-US&page=1`)
    .then((response) => response.json())
    .then((data) =>
      dispatch({
        type: actionTypes.GET_AIRING_TODAY_SERIES,
        payload: data,
      })
    );
};

export const getSerieTrailer = (serieID) => (dispatch) => {
  fetch(
    `https://api.themoviedb.org/3/tv/${serieID}/videos?api_key=a78627f739e78c82e6335d377214ef74&language=en-US`
  )
    .then((response) => response.json())
    .then((data) =>
      dispatch({
        type: actionTypes.GET_SERIE_TRAILER,
        payload: data,
      })
    );
};
