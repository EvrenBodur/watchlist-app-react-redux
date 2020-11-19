import * as action from "./actionCreators";

const API_KEY = "a78627f739e78c82e6335d377214ef74";

export const fetchPopularMovies = (page) => async (dispatch) => {
  dispatch(action.getPopularMovies());
  try {
    const response = await fetch(
      `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=en-US&page=${page}`
    );
    const data = await response.json();
    dispatch(action.getPopularMoviesSuccess(data));
  } catch (error) {
    dispatch(action.getPopularMoviesFail(error));
  }
};

export const fetchTopRatedMovies = (page) => async (dispatch) => {
  dispatch(action.getTopRatedMovies());
  try {
    const response = await fetch(
      `https://api.themoviedb.org/3/movie/top_rated?api_key=${API_KEY}&language=en-US&page=${page}`
    );
    const data = await response.json();
    dispatch(action.getTopRatedMoviesSuccess(data));
  } catch (error) {
    dispatch(action.getTopRatedMoviesFail(error));
  }
};

export const fetchUpcomingMovies = (page) => async (dispatch) => {
  dispatch(action.getUpcomingMovies());
  try {
    const response = await fetch(
      `https://api.themoviedb.org/3/movie/upcoming?api_key=${API_KEY}&language=en-US&page=${page}`
    );
    const data = await response.json();
    dispatch(action.getUpcomingMoviesSuccess(data));
  } catch (error) {
    dispatch(action.getUpcomingMoviesFail(error));
  }
};

export const fetchSearchMovies = (value, page) => async (dispatch) => {
  dispatch(action.getSearchMovies());
  try {
    const response = await fetch(
      `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&language=en-US&query=${value}&page=${page}&include_adult=false`
    );
    const data = await response.json();
    dispatch(action.getSearchMoviesSuccess(data));
  } catch (error) {
    dispatch(action.getSearchMoviesFail(error));
  }
};

export const fetchGenres = () => async (dispatch) => {
  dispatch(action.getGenres());
  try {
    const response = await fetch(
      `https://api.themoviedb.org/3/genre/movie/list?api_key=${API_KEY}&language=en-US`
    );
    const data = await response.json();
    dispatch(action.getGenresSuccess(data));
  } catch (error) {
    console.log(error);
  }
};

export const fetchCategoryMovies = (option, page) => async (dispatch) => {
  dispatch(action.getCategoryMovies());
  try {
    const response = await fetch(
      `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&language=en-US&page=${page}&timezone=America%2FNew_York&include_null_first_air_dates=false&with_genres=${option}`
    );
    const data = await response.json();
    dispatch(action.getCategoryMoviesSuccess(data));
  } catch (error) {
    dispatch(action.getCategoryMoviesFail(error));
  }
};

export const fetchTrailer = (movieID) => async (dispatch) => {
  dispatch(action.getTrailer());
  try {
    const response = await fetch(
      `https://api.themoviedb.org/3/movie/${movieID}/videos?api_key=${API_KEY}&language=en-US`
    );
    const data = await response.json();
    dispatch(action.getTrailerSuccess(data));
  } catch (error) {
    dispatch(action.getTrailerFail(error));
  }
};

export const fetchCast = (movieID) => async (dispatch) => {
  dispatch(action.getCast());
  try {
    const response = await fetch(
      `https://api.themoviedb.org/3/movie/${movieID}/credits?api_key=${API_KEY}`
    );
    const data = await response.json();
    dispatch(action.getCastSuccess(data));
  } catch (error) {
    dispatch(action.getCastFail(error));
  }
};

export const setMovieDetails = (data) => (dispatch) => {
  dispatch(action.setDetail(data));
};

export const addItemToWatchList = (data) => (dispatch) => {
  dispatch(action.addToWatchList(data));
};

export const deleteItemFromWatchList = (id) => (dispatch) => {
  dispatch(action.deleteFromWatchList(id));
};
