import React from "react";
import "../styles/MovieDetails.css";

const MovieDetails = ({ details, handleBackButton }) => {
  const detail = details[0];
  return (
    <div className="movie-details">
      <div className="details-container">
        <div className="poster">
          <img
            src={`https://image.tmdb.org/t/p/w185${detail.poster_path}`}
            alt="movie-title"
          />
        </div>
        <div className="fragman-details-container">
          <div className="fragman"></div>
          <div className="details">
            <div>{detail.title}</div>
            <div>{detail.overview}</div>
            <div>Release Date: {detail.release_date}</div>
            <div>Vote: {detail.vote_average}</div>
          </div>
        </div>
        <div className="button-container">
          <button className="button" onClick={handleBackButton}>
            Back
          </button>
          <button className="button">Add to watch list</button>
        </div>
      </div>
    </div>
  );
};

export default MovieDetails;
