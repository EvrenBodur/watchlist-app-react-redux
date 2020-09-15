import * as actionTypes from "../actions/actionTypes";

const INITIAL_STATE = {
  trendMovies: {
    results: [],
  },
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case actionTypes.GET_TREND_MOVIES:
      return {
        ...state,
        trendMovies: action.payload,
      };
    default:
      return state;
  }
};
