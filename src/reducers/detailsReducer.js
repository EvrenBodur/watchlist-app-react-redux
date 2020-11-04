import * as actionTypes from "../actions/actionTypes";

const INITIAL_STATE = {
  details: [],
  genres: [],
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case actionTypes.SET_DETAIL:
      return {
        ...state,
        details: action.payload.details,
        genres: action.payload.genres,
      };
    default:
      return state;
  }
};
