import * as actionTypes from "../actions/actionTypes";

const INITIAL_STATE = {
  releaseDateMovies: {
    results: [],
  },
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case actionTypes.GET_POPULAR_MOVIES_BY_RELEASE_DATE:
      return {
        ...state,
        releaseDateMovies: action.payload,
      };
    default:
      return state;
  }
};
