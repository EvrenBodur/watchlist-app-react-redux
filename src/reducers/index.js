import { combineReducers } from "redux";
import moviesReducers from "./moviesReducers";
import seriesReducers from "./seriesReducer";

const reducers = {
  moviesStore: moviesReducers,
  seriesStore: seriesReducers,
};

const rootReducer = combineReducers(reducers);

export default rootReducer;
