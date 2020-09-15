import * as actionTypes from "../actions/actionTypes";

const INITIAL_STATE = {
  searchMovies: {
    results: [],
  },
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case actionTypes.GET_SEARCH_MOVIES:
      return {
        ...state,
        searchMovies: action.payload,
      };
    default:
      return state;
  }
};
