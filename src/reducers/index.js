import { combineReducers } from "redux";
import popularMoviesReducer from "./popularMoviesReducer";
import topRatedMoviesReducers from "./topRatedMoviesReducer";
import upcomingMoviesReducer from "./upcomingMoviesReducer";
import genreReducer from "./genreReducer";
import detailsReducer from "./detailsReducer";
import trailerReducer from "./trailerReducer";
import castReducer from "./castReducer";
import searchMoviesReducer from "./searchMoviesReducer";
import categoryMoviesReducer from "./categoryMoviesReducer";
import watchListReducer from "./watchListReducer";

const reducers = {
  popularMoviesStore: popularMoviesReducer,
  topRatedMoviesStore: topRatedMoviesReducers,
  upcomingMoviesStore: upcomingMoviesReducer,
  genresStore: genreReducer,
  detailsStore: detailsReducer,
  trailerStore: trailerReducer,
  castStore: castReducer,
  searchMoviesStore: searchMoviesReducer,
  categoryMoviesStore: categoryMoviesReducer,
  watchListStore: watchListReducer,
};

const rootReducer = combineReducers(reducers);

export default rootReducer;
