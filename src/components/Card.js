import React from "react";
import "../styles/Card.css";

const Card = ({ movie }) => {
  return (
    <div className="card">
      <img
        src={`https://image.tmdb.org/t/p/w185${movie.poster_path}`}
        alt={movie.title}
      />
    </div>
  );
};

export default Card;
