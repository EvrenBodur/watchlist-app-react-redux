import React, { useEffect } from "react";
import Card from "./Card";
import { useDispatch, useSelector } from "react-redux";
import { fetchTrendMovies } from "../redux/actions/trendMoviesAction";
import { fetchPopularMovies } from "../redux/actions/popularMoviesAction";
import { fetchReleaseDateMovies } from "../redux/actions/releaseDateAction";
import "../styles/Home.css";

const Home = () => {
  const dispatch = useDispatch();
  const { trendMovies } = useSelector((state) => state.trendMovies);
  const { popularMovies } = useSelector((state) => state.popularMovies);
  const { releaseDateMovies } = useSelector((state) => state.releaseDateMovies);

  useEffect(() => {
    dispatch(fetchTrendMovies());
    dispatch(fetchPopularMovies());
    dispatch(fetchReleaseDateMovies());
  }, [dispatch]);

  return (
    <div className="home-container">
      <div className="row">
        <div className="homepage-titles">Trending Movies</div>
        <div className="row-movies">
          {trendMovies.results.map((movie) => {
            if (movie.poster_path) {
              return <Card key={movie.id} movie={movie} />;
            } else {
              return null;
            }
          })}
        </div>
      </div>
      <div className="row">
        <div className="homepage-titles">Popular Movies</div>
        <div className="row-movies">
          {popularMovies.results.map((movie) => (
            <Card key={movie.id} movie={movie} />
          ))}
        </div>
      </div>
      <div className="row">
        <div className="homepage-titles">Release Date</div>
        <div className="row-movies">
          {releaseDateMovies.results.map((movie) => {
            if (movie.poster_path) {
              return <Card key={movie.id} movie={movie} />;
            } else {
              return null;
            }
          })}
        </div>
      </div>
    </div>
  );
};

export default Home;
