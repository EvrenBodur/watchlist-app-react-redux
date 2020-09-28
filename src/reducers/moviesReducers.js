import * as actionTypes from "../actions/actionTypes";

const INITIAL_STATE = {
  popularMovies: [],
  topRatedMovies: [],
  upComingMovies: [],
  latestMovies: [],
  nowPlayingMovies: [],
  movieTrailer: [],
  isMoviesLoaded: false,
  isMovie: true,
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
    case actionTypes.GET_MOVIE_TRAILER:
      return {
        ...state,
        movieTrailer:
          action.payload.results[0] === undefined
            ? []
            : action.payload.results[0],
      };

    default:
      return state;
  }
};
