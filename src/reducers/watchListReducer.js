import * as actionTypes from "../actions/actionTypes";

const INITIAL_STATE = {
  watchList: [],
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case actionTypes.ADD_TO_WATCHLIST:
      return {
        ...state,
        watchList: [...state.watchList, action.payload],
      };
    case actionTypes.DELETE_FROM_WATCHLIST:
      return {
        ...state,
        watchList: state.watchList.filter(
          (item) => item.details.id !== action.payload
        ),
      };
    default:
      return state;
  }
};
