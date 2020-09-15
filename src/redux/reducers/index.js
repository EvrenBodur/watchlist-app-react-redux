import { combineReducers } from "redux";
import trendMoviesReducer from "./trendMoviesReducer";
import popularMoviesReducer from "./popularMoviesReducer";
import releaseDateMoviesReducer from "./releaseDateMoviesReducer";
import searchMoviesReducer from "./searchMoviesReducers";
import genresReducer from "./genresReducer";

const reducers = {
  trendMovies: trendMoviesReducer,
  popularMovies: popularMoviesReducer,
  releaseDateMovies: releaseDateMoviesReducer,
  searchMovies: searchMoviesReducer,
  genres: genresReducer,
};

export const rootReducer = combineReducers(reducers);
