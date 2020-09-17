import * as actionTypes from "../actions/actionTypes";

const INITIAL_STATE = {
  popularMovies: [],
  page: "",
  total_pages: "",
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case actionTypes.GET_POPULAR_MOVIES:
      return {
        ...state,
        popularMovies: action.payload.results,
        page: action.payload.page,
        total_pages: action.payload.total_pages,
      };
    default:
      return state;
  }
};
