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
  }, []);

  return (
    <div className="home-container">
      <div className="row">
        {trendMovies.results.map((movie) => (
          <Card key={movie.id} movie={movie} />
        ))}
      </div>
      <div className="row">
        {popularMovies.results.map((movie) => (
          <Card key={movie.id} movie={movie} />
        ))}
      </div>
      <div className="row">
        {releaseDateMovies.results.map((movie) => (
          <Card key={movie.id} movie={movie} />
        ))}
      </div>
    </div>
  );
};

export default Home;
