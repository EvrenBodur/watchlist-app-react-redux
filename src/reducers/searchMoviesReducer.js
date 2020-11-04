import * as actionTypes from "../actions/actionTypes";

const INITIAL_STATE = {
  searchMovies: [],
  searchMoviesTotalPages: 0,
  isSearchMoviesLoading: false,
  error: "",
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case actionTypes.GET_SEARCH_MOVIES:
      return {
        ...state,
        isSearchMoviesLoading: true,
      };
    case actionTypes.GET_SEARCH_MOVIES_SUCCESS:
      return {
        ...state,
        searchMovies: action.payload.results,
        searchMoviesTotalPages: action.payload.total_pages,
        isSearchMoviesLoading: false,
      };

    case actionTypes.GET_SEARCH_MOVIES_FAIL:
      return {
        ...state,
        isSearchMoviesLoading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};
