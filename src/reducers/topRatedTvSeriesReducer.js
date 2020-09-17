import * as actionTypes from "../actions/actionTypes";

const INITIAL_STATE = {
  topRatedTvSeries: [],
  page: "",
  total_page: "",
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case actionTypes.GET_TOP_RATED_TV_SERIES:
      return {
        topRatedTvSeries: action.payload.results,
        page: action.payload.page,
        total_page: action.payload.total_page,
      };
    default:
      return state;
  }
};
