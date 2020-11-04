import * as actionTypes from "../actions/actionTypes";

const INITIAL_STATE = {
  popularMovies: [],
  popularTotalPages: 0,
  isPopularLoading: false,
  error: "",
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case actionTypes.GET_POPULAR_MOVIES:
      return {
        ...state,
        isPopularLoading: true,
      };
    case actionTypes.GET_POPULAR_MOVIES_SUCCESS:
      return {
        ...state,
        popularMovies: action.payload.results,
        popularTotalPage: action.payload.total_pages,
        isPopularLoading: false,
      };

    case actionTypes.GET_POPULAR_MOVIES_FAIL:
      return {
        ...state,
        isPopularLoading: false,
        error: action.payload,
      };

    default:
      return state;
  }
};
