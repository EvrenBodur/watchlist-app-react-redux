import * as actionTypes from "../actions/actionTypes";

const INITIAL_STATE = {
  categoryMovies: [],
  isCategoryMoviesLoading: false,
  error: "",
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case actionTypes.GET_CATEGORY_MOVIES:
      return {
        ...state,
        isCategoryMoviesLoading: true,
      };
    case actionTypes.GET_CATEGORY_MOVIES_SUCCESS:
      return {
        ...state,
        categoryMovies: action.payload.results,
        isCategoryMoviesLoading: false,
      };
    case actionTypes.GET_CATEGORY_MOVIES_FAIL:
      return {
        ...state,
        isCategoryMoviesLoading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};
