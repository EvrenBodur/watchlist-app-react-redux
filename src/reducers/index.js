import { combineReducers } from "redux";
import popularMoviesReducer from "./popularMoviesReducer";
import popularTvSeriesReducer from "./popularTvSeriesReducer";
import topRatedMoviesReducer from "./topRatedMoviesReducer";
import topRatedTvSeriesReducer from "./topRatedTvSeriesReducer";
import searchMoviesReducer from "./searchMoviesReducer";
import categoriesReducer from "./categoriesReducer";
import genreMoviesReducer from "./genreMoviesReducer";

const reducers = {
  popularMovies: popularMoviesReducer,
  popularTvSeries: popularTvSeriesReducer,
  topRatedMovies: topRatedMoviesReducer,
  topRatedTvSeries: topRatedTvSeriesReducer,
  searchMovies: searchMoviesReducer,
  categories: categoriesReducer,
  genreMovies: genreMoviesReducer,
};

export const rootReducer = combineReducers(reducers);
