import React, { useEffect } from "react";
import Card from "./Card";
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

  useEffect(() => {
    dispatch(fetchPopularMovies());
    dispatch(fetchPopularTvSeries());
    dispatch(fetchTopRatedMovies());
    dispatch(fetchTopRatedTvSeries());
  }, [dispatch]);

  return (
    <div className="home-container">
      <div className="popular-title">Populer Movies</div>
      <div className="row">
        {popularMovies.map((movie) => {
          if (movie.poster_path) {
            return <Card key={movie.id} movie={movie} />;
          } else {
            return null;
          }
        })}
      </div>
      <div className="pagination">Pagination</div>
      <div className="popular-title">Populer Tv Series</div>
      <div className="row">
        {popularTvSeries.map((movie) => {
          if (movie.poster_path) {
            return <Card key={movie.id} movie={movie} />;
          } else {
            return null;
          }
        })}
      </div>
      <div className="pagination">Pagination</div>
      <div className="popular-title">Top Rated Movies</div>
      <div className="row">
        {topRatedMovies.map((movie) => {
          if (movie.poster_path) {
            return <Card key={movie.id} movie={movie} />;
          } else {
            return null;
          }
        })}
      </div>
      <div className="pagination">Pagination</div>
      <div className="popular-title">Top Rated Tv Series</div>
      <div className="row">
        {topRatedTvSeries.map((movie) => {
          if (movie.poster_path) {
            return <Card key={movie.id} movie={movie} />;
          } else {
            return null;
          }
        })}
      </div>
      <div className="pagination">Pagination</div>
    </div>
  );
};

export default Home;
