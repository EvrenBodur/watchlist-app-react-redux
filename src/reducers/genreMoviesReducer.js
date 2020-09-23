import * as actionTypes from "../actions/actionTypes";

const INITIAL_STATE = {
  genreMovies: [],
  genre_total_pages: "",
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case actionTypes.GET_GENRE_MOVIES:
      return {
        ...state,
        genreMovies: action.payload.results,
        genre_total_pages: action.payload.total_pages,
      };
    default:
      return state;
  }
};
