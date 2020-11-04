import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setMovieDetails } from "../actions/moviesActions";
import "../styles/Card.css";

const Card = ({ movie, genres }) => {
  const dispatch = useDispatch();
  const [display, setDisplay] = useState(false);

  const openCardDetail = () => {
    setDisplay("flex");
  };
  const closeCardDetail = () => {
    setDisplay("none");
  };

  const renderGenres = () => {
    const showGenre = [];
    movie.genre_ids.forEach((genreID) => {
      genres.find(
        (genre) => genre.id === genreID && showGenre.push(genre.name)
      );
    });
    return showGenre.slice(0, 3).map((gn) => {
      return (
        <div key={gn} className="genre-item">
          {gn}
        </div>
      );
    });
  };

  const data = {
    details: movie,
    genres: renderGenres(),
  };

  const detailsHandler = () => {
    dispatch(setMovieDetails(data));
  };

  return (
    <div
      onMouseLeave={closeCardDetail}
      onMouseEnter={openCardDetail}
      className="card-container"
    >
      <div style={{ display: `${display}` }} className="card-details">
        <div className="movie-title">{movie.title}</div>
        <div className="movie-rate">{movie.vote_average}</div>
        <div className="movie-genres">{renderGenres()}</div>
        <Link
          onClick={detailsHandler}
          to={`/${movie.id}`}
          className="detail-button"
        >
          Details...
        </Link>
      </div>
      <img
        className="card-image"
        src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`}
        alt="movie title"
      />
    </div>
  );
};

export default Card;
