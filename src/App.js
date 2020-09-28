import React, { useEffect, useState } from "react";
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
  getSearchMovies,
} from "./actions/moviesActions";

import {
  getPopularSeries,
  getTopRatedSeries,
  getOnTheAirSeries,
  getAiringTodaySeries,
  getSearchSeries,
} from "./actions/seriesActions";

import "./styles/App.css";

const App = () => {
  const dispatch = useDispatch();
  const [input, setInput] = useState("");
  const {
    popularMovies,
    topRatedMovies,
    upComingMovies,
    nowPlayingMovies,
    isMoviesLoaded,
    isMovie,
    searchMovies,
  } = useSelector((state) => state.moviesStore);

  const {
    popularSeries,
    topRatedSeries,
    onTheAirSeries,
    airingTodaySeries,
    isSeriesLoaded,
    searchSeries,
    isSerie,
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

  useEffect(() => {
    if (input === "") return;
    if (window.location.pathname === "/search") {
      dispatch(getSearchMovies(input));
    }
    if (window.location.pathname === "/search/tvseries") {
      dispatch(getSearchSeries(input));
    }
  }, [input, dispatch]);

  const inputHandler = (e) => {
    if (e.target.value === "") return;
    setInput(e.target.value);
  };

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
                  isMovie={isMovie}
                />
              }
            />
            <Route
              path="/topratedmovies"
              element={
                <CardContainer
                  items={topRatedMovies}
                  isLoaded={isMoviesLoaded}
                  isMovie={isMovie}
                />
              }
            />

            <Route
              path="/nowplayingmovies"
              element={
                <CardContainer
                  items={nowPlayingMovies}
                  isLoaded={isMoviesLoaded}
                  isMovie={isMovie}
                />
              }
            />
            <Route
              path="/upcomingmovies"
              element={
                <CardContainer
                  items={upComingMovies}
                  isLoaded={isMoviesLoaded}
                  isMovie={isMovie}
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
                  isSerie={isSerie}
                />
              }
            />
            <Route
              path="/topratedseries"
              element={
                <CardContainer
                  items={topRatedSeries}
                  isLoaded={isSeriesLoaded}
                  isSerie={isSerie}
                />
              }
            />
            <Route
              path="/ontheairseries"
              element={
                <CardContainer
                  items={onTheAirSeries}
                  isLoaded={isSeriesLoaded}
                  isSerie={isSerie}
                />
              }
            />
            <Route
              path="/airingtodayseries"
              element={
                <CardContainer
                  items={airingTodaySeries}
                  isLoaded={isSeriesLoaded}
                  isSerie={isSerie}
                />
              }
            />
          </Route>
          <Route
            path="/search"
            element={<Search inputHandler={inputHandler} />}
          >
            <Route
              path="/"
              element={
                <CardContainer
                  items={searchMovies}
                  isMovie={isMovie}
                  isLoaded={isMoviesLoaded}
                />
              }
            />
            <Route
              path="/tvseries"
              element={
                <CardContainer
                  items={searchSeries}
                  isSerie={isSerie}
                  isLoaded={isMoviesLoaded}
                />
              }
            />
          </Route>
          <Route path="/watchlist" element={<Watchlist />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
