import React, { useEffect } from "react";
import Navigation from "./components/Navigation";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Movies from "./components/Movies";
import Search from "./components/Search";
import TvSeries from "./components/Tvseries";
import Watchlist from "./components/Watchlist";
import CardContainer from "./components/CardContainer";
import {
  getPopularMovies,
  getTopRatedMovies,
  getUpComingMovies,
  getNowPlayingMovies,
} from "./actions/moviesActions";

import {
  getPopularSeries,
  getTopRatedSeries,
  getOnTheAirSeries,
  getAiringTodaySeries,
} from "./actions/seriesActions";

import "./styles/App.css";

const App = () => {
  const dispatch = useDispatch();
  const {
    popularMovies,
    topRatedMovies,
    upComingMovies,

    nowPlayingMovies,
    isMoviesLoaded,
  } = useSelector((state) => state.moviesStore);

  const {
    popularSeries,
    topRatedSeries,
    onTheAirSeries,
    airingTodaySeries,
    isSeriesLoaded,
  } = useSelector((state) => state.seriesStore);

  useEffect(() => {
    dispatch(getPopularMovies());
    dispatch(getTopRatedMovies());
    dispatch(getUpComingMovies());
    dispatch(getNowPlayingMovies());
    dispatch(getPopularSeries());
    dispatch(getTopRatedSeries());
    dispatch(getOnTheAirSeries());
    dispatch(getAiringTodaySeries());
  }, [dispatch]);

  return (
    <div className="container">
      <Router>
        <Navigation />
        <Routes>
          <Route path="/" element={<Movies />}>
            <Route
              path="/"
              element={
                <CardContainer
                  items={popularMovies}
                  isLoaded={isMoviesLoaded}
                />
              }
            />
            <Route
              path="/topratedmovies"
              element={
                <CardContainer
                  items={topRatedMovies}
                  isLoaded={isMoviesLoaded}
                />
              }
            />

            <Route
              path="/nowplayingmovies"
              element={
                <CardContainer
                  items={nowPlayingMovies}
                  isLoaded={isMoviesLoaded}
                />
              }
            />
            <Route
              path="/upcomingmovies"
              element={
                <CardContainer
                  items={upComingMovies}
                  isLoaded={isMoviesLoaded}
                />
              }
            />
          </Route>
          <Route path="/series" element={<TvSeries />}>
            <Route
              path="/"
              element={
                <CardContainer
                  items={popularSeries}
                  isLoaded={isSeriesLoaded}
                />
              }
            />
            <Route
              path="/topratedseries"
              element={
                <CardContainer
                  items={topRatedSeries}
                  isLoaded={isSeriesLoaded}
                />
              }
            />
            <Route
              path="/ontheairseries"
              element={
                <CardContainer
                  items={onTheAirSeries}
                  isLoaded={isSeriesLoaded}
                />
              }
            />
            <Route
              path="/airingtodayseries"
              element={
                <CardContainer
                  items={airingTodaySeries}
                  isLoaded={isSeriesLoaded}
                />
              }
            />
          </Route>
          <Route path="/search" element={<Search />} />
          <Route path="/watchlist" element={<Watchlist />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
