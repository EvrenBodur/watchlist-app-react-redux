import * as actionTypes from "../actions/actionTypes";

const INITIAL_STATE = {
  topRatedTvSeries: [],
  total_page: "",
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case actionTypes.GET_TOP_RATED_TV_SERIES:
      return {
        ...state,
        topRatedTvSeries: action.payload.results,
        total_page: action.payload.total_page,
      };
    default:
      return state;
  }
};
