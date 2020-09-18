import * as actionTypes from "../actions/actionTypes";

const INITIAL_STATE = {
  popularTvSeries: [],
  total_pages: "",
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case actionTypes.GET_POPULAR_TV_SERIES:
      return {
        ...state,
        popularTvSeries: action.payload.results,
        total_pages: action.payload.total_pages,
      };

    default:
      return state;
  }
};
