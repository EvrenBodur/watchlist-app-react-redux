import React, { useEffect, useState } from "react";
import Card from "./Card";
import MovieDetails from "./MovieDetails";
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
  const [movieDetails, setMovieDetails] = useState([]);

  useEffect(() => {
    dispatch(fetchTrendMovies());
    dispatch(fetchPopularMovies());
    dispatch(fetchReleaseDateMovies());
  }, [dispatch]);

  const handleDetails = (movie) => {
    setMovieDetails([movie]);
  };
  console.log(movieDetails);

  const handleBackButton = () => {
    setMovieDetails([]);
  };

  return (
    <div className="home-container">
      {movieDetails.length > 0 ? (
        <MovieDetails
          movieDetails={movieDetails}
          handleBackButton={handleBackButton}
        />
      ) : (
        <div>
          <div className="row">
            <div className="homepage-titles">Trending Movies</div>
            <div className="row-movies">
              {trendMovies.results.map((movie) => {
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
          <div className="row">
            <div className="homepage-titles">Popular Movies</div>
            <div className="row-movies">
              {popularMovies.results.map((movie) => (
                <Card
                  key={movie.id}
                  movie={movie}
                  handleDetails={handleDetails}
                />
              ))}
            </div>
          </div>
          <div className="row">
            <div className="homepage-titles">Release Date</div>
            <div className="row-movies">
              {releaseDateMovies.results.map((movie) => {
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
        </div>
      )}
    </div>
  );
};

export default Home;
