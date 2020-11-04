import * as actionTypes from "../actions/actionTypes";

const INITIAL_STATE = {
  trailer: [],
  isTrailerLoading: false,
  error: "",
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case actionTypes.GET_TRAILER:
      return {
        ...state,
        isTrailerLoading: true,
      };
    case actionTypes.GET_TRAILER_SUCCESS:
      return {
        ...state,
        trailer: action.payload.results[0],
        isTrailerLoading: false,
      };
    case actionTypes.GET_TRAILER_FAIL:
      return {
        ...state,
        isTrailerLoading: false,
        error: "",
      };
    default:
      return state;
  }
};
