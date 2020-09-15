import { combineReducers } from "redux";
import trendMoviesReducer from "./trendMoviesReducer";
import popularMoviesReducer from "./popularMoviesReducer";
import releaseDateMoviesReducer from "./releaseDateMoviesReducer";
import searchMoviesReducer from "./searchMoviesReducers";

const reducers = {
  trendMovies: trendMoviesReducer,
  popularMovies: popularMoviesReducer,
  releaseDateMovies: releaseDateMoviesReducer,
  searchMovies: searchMoviesReducer,
};

export const rootReducer = combineReducers(reducers);
