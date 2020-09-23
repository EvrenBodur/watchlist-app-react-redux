import * as actionTypes from "../actions/actionTypes";

const INITIAL_STATE = {
  searchMovies: [],
  total_pages: "",
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case actionTypes.GET_SEARCH_MOVIES:
      return {
        ...state,
        searchMovies: action.payload.results,
        total_pages: action.payload.total_pages,
      };
    case actionTypes.CLEANING_MOVIE_STATE:
      return {
        ...state,
        searchMovies: [],
        total_pages: "",
      };
    default:
      return state;
  }
};
