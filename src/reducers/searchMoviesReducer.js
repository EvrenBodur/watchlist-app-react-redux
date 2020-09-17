import * as actionTypes from "../actions/actionTypes";

const INITIAL_STATE = {
  searchMovies: [],
  page: "",
  total_pages: "",
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case actionTypes.GET_SEARCH_MOVIES:
      return {
        ...state,
        searchMovies: action.payload.results,
        page: action.payload.page,
        total_pages: action.payload.total_pages,
      };
    default:
      return state;
  }
};
