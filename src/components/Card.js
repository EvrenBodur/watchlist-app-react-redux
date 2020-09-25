import React from "react";
import "../styles/Card.css";

const Card = ({ movie, handleDetails }) => {
  console.log(movie);
  return (
    <div className="card-container">
      <img
        onClick={() => handleDetails(movie)}
        src={`https://image.tmdb.org/t/p/w185${movie.poster_path}`}
        alt={movie.title}
      />
      <div className="card-footer">
        <div className="vote">{movie.vote_average}</div>
      </div>
    </div>
  );
};

export default Card;
