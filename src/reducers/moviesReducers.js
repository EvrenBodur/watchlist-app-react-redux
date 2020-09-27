import * as actionTypes from "../actions/actionTypes";

const INITIAL_STATE = {
  popularMovies: [],
  topRatedMovies: [],
  upComingMovies: [],
  latestMovies: [],
  nowPlayingMovies: [],
  watchList: [],
  isMoviesLoaded: false,
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case actionTypes.GET_POPULAR_MOVIES:
      return {
        ...state,
        popularMovies: action.payload.results,
        isMoviesLoaded: true,
      };
    case actionTypes.GET_TOP_RATED_MOVIES:
      return {
        ...state,
        topRatedMovies: action.payload.results,
        isMoviesLoaded: true,
      };
    case actionTypes.GET_UPCOMING_MOVIES:
      return {
        ...state,
        upComingMovies: action.payload.results,
        isMoviesLoaded: true,
      };
    case actionTypes.GET_NOW_PLAYING_MOVIES:
      return {
        ...state,
        nowPlayingMovies: action.payload.results,
        isMoviesLoaded: true,
      };

    default:
      return state;
  }
};
