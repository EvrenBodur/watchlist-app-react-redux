import * as actionTypes from "../actions/actionTypes";

const INITIAL_STATE = {
  popularSeries: [],
  topRatedSeries: [],
  onTheAirSeries: [],
  airingTodaySeries: [],
  serieTrailer: [],
  searchSeries: [],
  isSeriesLoaded: false,
  isSerie: true,
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case actionTypes.GET_POPULAR_SERIES:
      return {
        ...state,
        popularSeries: action.payload.results,
        isSeriesLoaded: true,
      };
    case actionTypes.GET_TOP_RATED_SERIES:
      return {
        ...state,
        topRatedSeries: action.payload.results,
        isSeriesLoaded: true,
      };
    case actionTypes.GET_ON_THE_AIR_SERIES:
      return {
        ...state,
        onTheAirSeries: action.payload.results,
        isSeriesLoaded: true,
      };
    case actionTypes.GET_AIRING_TODAY_SERIES:
      return {
        ...state,
        airingTodaySeries: action.payload.results,
        isSeriesLoaded: true,
      };
    case actionTypes.GET_SERIE_TRAILER:
      return {
        ...state,
        serieTrailer:
          action.payload.results[0] === undefined
            ? []
            : action.payload.results[0],
      };
    case actionTypes.GET_SEARCH_SERIES:
      return {
        ...state,
        searchSeries: action.payload.results,
      };
    default:
      return state;
  }
};
