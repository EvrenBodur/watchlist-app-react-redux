import * as actionTypes from "../actions/actionTypes";

const INITIAL_STATE = {
  genres: [],
  isGenresLoading: false,
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case actionTypes.GET_GENRES:
      return {
        ...state,
        isGenresLoading: true,
      };
    case actionTypes.GET_GENRES_SUCCESS:
      return {
        ...state,
        genres: action.payload.genres,
        isGenresLoading: false,
      };
    default:
      return state;
  }
};
