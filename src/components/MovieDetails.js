import React from "react";
import "../styles/MovieDetails.css";

const MovieDetails = ({ movieDetails, handleBackButton }) => {
  const movie = movieDetails[0];
  return (
    <div className="movie-details-container">
      <div className="poster">
        <img
          src={`https://image.tmdb.org/t/p/w185${movie.poster_path}`}
          alt={movie.title}
        />
      </div>
      <div className="details">{movie.original_name}</div>
      <button onClick={handleBackButton}>Back</button>
    </div>
  );
};

export default MovieDetails;
