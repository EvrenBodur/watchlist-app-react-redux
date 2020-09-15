import * as actionTypes from "../actions/actionTypes";

const INITIAL_STATE = {
  genres: [],
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case actionTypes.GET_GENRES:
      return {
        ...state,
        genres: action.payload.genres,
      };
    default:
      return state;
  }
};
