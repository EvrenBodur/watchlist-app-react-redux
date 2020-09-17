import * as actionTypes from "../actions/actionTypes";

const INITIAL_STATE = {
  topRatedMovies: [],
  page: "",
  total_pages: "",
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case actionTypes.GET_TOP_RATED_MOVIES:
      return {
        topRatedMovies: action.payload.results,
        page: action.payload.page,
        total_pages: action.payload.total_pages,
      };
    default:
      return state;
  }
};