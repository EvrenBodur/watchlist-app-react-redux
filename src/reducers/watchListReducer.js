import * as actionTypes from "../actions/actionTypes";

const INITIAL_STATE = {
  detail: [],
};
export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case actionTypes.SET_DETAIL:
      return {
        ...state,
        detail: state.detail.includes(action.payload)
          ? [...state.detail]
          : [...state.detail, action.payload],
      };
    case actionTypes.DELETE_ITEM_FROM_WATCHLIST:
      return {
        ...state,
        detail: state.detail.filter((item) => item.id !== action.payload),
      };
    default:
      return state;
  }
};
