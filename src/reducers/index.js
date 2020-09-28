import { combineReducers } from "redux";
import moviesReducers from "./moviesReducers";
import seriesReducers from "./seriesReducer";
import watchListReducer from "./watchListReducer";

const reducers = {
  moviesStore: moviesReducers,
  seriesStore: seriesReducers,
  watchListStore: watchListReducer,
};

const rootReducer = combineReducers(reducers);

export default rootReducer;
