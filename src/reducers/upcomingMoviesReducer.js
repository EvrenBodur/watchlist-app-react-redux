import * as actionTypes from "../actions/actionTypes";

const INTIAL_STATE = {
  upcomingMovies: [],
  upcomingTotalPages: 0,
  isUpcomingLoading: false,
  error: "",
};

export default (state = INTIAL_STATE, action) => {
  switch (action.type) {
    case actionTypes.GET_UPCOMING_MOVIES:
      return {
        ...state,
        isUpcomingLoading: true,
      };
    case actionTypes.GET_UPCOMING_MOVIES_SUCCESS:
      return {
        ...state,
        upcomingMovies: action.payload.results,
        upcomingTotalPages: action.payload.total_pages,
        isUpcomingLoading: false,
      };
    case actionTypes.GET_UPCOMING_MOVIES_FAIL:
      return {
        ...state,
        isUpcomingLoading: false,
        error: action.payload,
      };

    default:
      return state;
  }
};
