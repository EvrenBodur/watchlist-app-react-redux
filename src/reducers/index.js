import { combineReducers } from "redux";
import popularMoviesReducer from "./popularMoviesReducer";
import popularTvSeriesReducer from "./popularTvSeriesReducer";
import topRatedMoviesReducer from "./topRatedMoviesReducer";
import topRatedTvSeriesReducer from "./topRatedTvSeriesReducer";
import searchMoviesReducer from "./searchMoviesReducer";

const reducers = {
  popularMovies: popularMoviesReducer,
  popularTvSeries: popularTvSeriesReducer,
  topRatedMovies: topRatedMoviesReducer,
  topRatedTvSeries: topRatedTvSeriesReducer,
  searchMovies: searchMoviesReducer,
};

export const rootReducer = combineReducers(reducers);
