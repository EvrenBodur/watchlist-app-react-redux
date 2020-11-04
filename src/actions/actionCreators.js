import * as actionTypes from "./actionTypes";

export const getPopularMovies = () => ({
  type: actionTypes.GET_POPULAR_MOVIES,
});

export const getPopularMoviesSuccess = (data) => ({
  type: actionTypes.GET_POPULAR_MOVIES_SUCCESS,
  payload: data,
});

export const getPopularMoviesFail = (error) => ({
  type: actionTypes.GET_POPULAR_MOVIES_FAIL,
  payload: error,
});

export const getTopRatedMovies = () => ({
  type: actionTypes.GET_TOP_RATED_MOVIES,
});

export const getTopRatedMoviesSuccess = (data) => ({
  type: actionTypes.GET_TOP_RATED_MOVIES_SUCCESS,
  payload: data,
});

export const getTopRatedMoviesFail = (error) => ({
  type: actionTypes.GET_TOP_RATED_MOVIES_FAIL,
  payload: error,
});

export const getUpcomingMovies = () => ({
  type: actionTypes.GET_UPCOMING_MOVIES,
});

export const getUpcomingMoviesSuccess = (data) => ({
  type: actionTypes.GET_UPCOMING_MOVIES_SUCCESS,
  payload: data,
});

export const getUpcomingMoviesFail = (error) => ({
  type: actionTypes.GET_UPCOMING_MOVIES_FAIL,
  payload: error,
});

export const getSearchMovies = () => ({
  type: actionTypes.GET_SEARCH_MOVIES,
});

export const getSearchMoviesSuccess = (data) => ({
  type: actionTypes.GET_SEARCH_MOVIES_SUCCESS,
  payload: data,
});

export const getSearchMoviesFail = (error) => ({
  type: actionTypes.GET_SEARCH_MOVIES_FAIL,
  payload: error,
});

export const getGenres = () => ({
  type: actionTypes.GET_GENRES,
});

export const getGenresSuccess = (data) => ({
  type: actionTypes.GET_GENRES_SUCCESS,
  payload: data,
});

export const getCategoryMovies = () => ({
  type: actionTypes.GET_CATEGORY_MOVIES,
});

export const getCategoryMoviesSuccess = (data) => ({
  type: actionTypes.GET_CATEGORY_MOVIES_SUCCESS,
  payload: data,
});

export const getCategoryMoviesFail = (error) => ({
  type: actionTypes.GET_CATEGORY_MOVIES_FAIL,
  payload: error,
});

export const getTrailer = () => ({
  type: actionTypes.GET_TRAILER,
});

export const getTrailerSuccess = (data) => ({
  type: actionTypes.GET_TRAILER_SUCCESS,
  payload: data,
});

export const getTrailerFail = (error) => ({
  type: actionTypes.GET_TRAILER_FAIL,
  payload: error,
});

export const getCast = () => ({
  type: actionTypes.GET_CAST,
});

export const getCastSuccess = (data) => ({
  type: actionTypes.GET_CAST_SUCCESS,
  payload: data,
});

export const getCastFail = (error) => ({
  type: actionTypes.GET_CAST_FAIL,
  payload: error,
});

export const setDetail = (data) => ({
  type: actionTypes.SET_DETAIL,
  payload: data,
});
