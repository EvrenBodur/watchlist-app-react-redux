import React from "react";
import "../styles/Card.css";

const Card = ({ item, detailHandler }) => {
  return (
    <div className="card-container" onClick={() => detailHandler(item)}>
      <div className="poster">
        <img src={`https://image.tmdb.org/t/p/w185${item.poster_path}`} />
      </div>
      <div className="poster-footer">
        <div className="movie-title">{item.title || item.name}</div>
        <div className="movie-vote">{item.vote_average}</div>
      </div>
    </div>
  );
};

export default Card;
