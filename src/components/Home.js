import React, { useEffect, useState } from "react";
import Card from "./Card";
import MovieDetails from "./MovieDetails";
import Pagination from "./Pagination";
import { useDispatch, useSelector } from "react-redux";
import { fetchPopularMovies } from "../actions/popularMoviesAction";
import { fetchPopularTvSeries } from "../actions/popularTvSeriesAction";
import { fetchTopRatedMovies } from "../actions/topRatedMoviesAction";
import { fetchTopRatedTvSeries } from "../actions/topRatedTvSeriesAction";
import "../styles/Home.css";

const Home = () => {
  const dispatch = useDispatch();
  const { popularMovies } = useSelector((state) => state.popularMovies);
  const { popularTvSeries } = useSelector((state) => state.popularTvSeries);
  const { topRatedMovies } = useSelector((state) => state.topRatedMovies);
  const { topRatedTvSeries } = useSelector((state) => state.topRatedTvSeries);
  const [details, setDetails] = useState([]);

  const [popularMoviesPage, setPopularMoviesPage] = useState(1);
  const [popularTvSeriesPage, setPopularTvSeriesPage] = useState(1);
  const [topRatedMoviesPage, setTopRatedMoviesPage] = useState(1);
  const [topRatedTvSeriesPage, setTopRatedTvSeriesPage] = useState(1);

  useEffect(() => {
    dispatch(fetchPopularMovies(popularMoviesPage));
    dispatch(fetchPopularTvSeries(popularTvSeriesPage));
    dispatch(fetchTopRatedMovies(topRatedMoviesPage));
    dispatch(fetchTopRatedTvSeries(topRatedTvSeriesPage));
  }, [
    dispatch,
    popularMoviesPage,
    popularTvSeriesPage,
    topRatedMoviesPage,
    topRatedTvSeriesPage,
  ]);

  const handleDetails = (details) => {
    setDetails([details]);
  };

  const handleBackButton = () => {
    setDetails([]);
  };

  return (
    <div className="home-container">
      {details.length > 0 ? (
        <MovieDetails details={details} handleBackButton={handleBackButton} />
      ) : (
        <>
          <div className="row-container">
            <div className="row-title">Popular Movies</div>
            <Pagination
              page={popularMoviesPage}
              setPage={setPopularMoviesPage}
            />
            <div className="row">
              {popularMovies.map((movie) => {
                if (movie.poster_path) {
                  return (
                    <Card
                      key={movie.id}
                      movie={movie}
                      handleDetails={handleDetails}
                    />
                  );
                } else {
                  return null;
                }
              })}
            </div>
          </div>
          <div className="row-container">
            <div className="row-title">Popular Tv Series</div>
            <Pagination
              page={popularTvSeriesPage}
              setPage={setPopularTvSeriesPage}
            />
            <div className="row">
              {popularTvSeries.map((movie) => {
                if (movie.poster_path) {
                  return (
                    <Card
                      key={movie.id}
                      movie={movie}
                      handleDetails={handleDetails}
                    />
                  );
                } else {
                  return null;
                }
              })}
            </div>
          </div>
          <div className="row-container">
            <div className="row-title">Top Rated Movies</div>
            <Pagination
              page={topRatedMoviesPage}
              setPage={setTopRatedMoviesPage}
            />
            <div className="row">
              {topRatedMovies.map((movie) => {
                if (movie.poster_path) {
                  return (
                    <Card
                      key={movie.id}
                      movie={movie}
                      handleDetails={handleDetails}
                    />
                  );
                } else {
                  return null;
                }
              })}
            </div>
          </div>
          <div className="row-container">
            <div className="row-title">Top Rated Tv Series</div>
            <Pagination
              page={topRatedTvSeriesPage}
              setPage={setTopRatedTvSeriesPage}
            />
            <div className="row">
              {topRatedTvSeries.map((movie) => {
                if (movie.poster_path) {
                  return (
                    <Card
                      key={movie.id}
                      movie={movie}
                      handleDetails={handleDetails}
                    />
                  );
                } else {
                  return null;
                }
              })}
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Home;
