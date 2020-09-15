import * as actionTypes from "../actions/actionTypes";

const INITIAL_STATE = {
  popularMovies: {
    results: [],
  },
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case actionTypes.GET_POPULAR_MOVIES:
      return {
        ...state,
        popularMovies: action.payload,
      };
    default:
      return state;
  }
};
