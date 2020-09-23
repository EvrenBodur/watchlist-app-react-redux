import * as actionTypes from "../actions/actionTypes";

const INITIAL_STATE = {
  categories: [],
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case actionTypes.GET_CATEGORIES:
      return {
        ...state,
        categories: action.payload.genres,
      };
    default:
      return state;
  }
};
