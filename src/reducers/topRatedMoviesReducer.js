import * as actionTypes from "../actions/actionTypes";

const INITIAL_STATE = {
  topRatedMovies: [],
  topRatedTotalPages: 0,
  isTopRatedLoading: false,
  error: "",
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case actionTypes.GET_TOP_RATED_MOVIES:
      return {
        ...state,
        isTopRatedLoading: true,
      };
    case actionTypes.GET_TOP_RATED_MOVIES_SUCCESS:
      return {
        ...state,
        topRatedMovies: action.payload.results,
        topRatedTotalPage: action.payload.total_pages,
        isTopRatedLoading: false,
      };

    case actionTypes.GET_TOP_RATED_MOVIES_FAIL:
      return {
        ...state,
        isTopRatedLoading: false,
        error: action.payload,
      };

    default:
      return state;
  }
};
