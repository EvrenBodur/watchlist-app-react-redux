import * as actionTypes from "../actions/actionTypes";

const INITIAL_STATE = {
  cast: [],
  isCastLoading: false,
  error: "",
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case actionTypes.GET_CAST:
      return {
        ...state,
        isCastLoading: true,
      };
    case actionTypes.GET_CAST_SUCCESS:
      return {
        ...state,
        cast: action.payload.cast,
        isCastLoading: false,
      };
    case actionTypes.GET_CAST_FAIL:
      return {
        ...state,
        isCastLoading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};
