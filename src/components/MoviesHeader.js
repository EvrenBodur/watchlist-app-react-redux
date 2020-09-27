import React from "react";
import { Link } from "react-router-dom";
import "../styles/MoviesHeader.css";

const MoviesHeader = () => {
  return (
    <div className="movies-header">
      <Link className="movies-link" to="/">
        Popular
      </Link>
      <Link className="movies-link" to="/topratedmovies">
        Top Rated
      </Link>
      <Link className="movies-link" to="/nowplayingmovies">
        Now Playing
      </Link>
      <Link className="movies-link" to="/upcomingmovies">
        Upcoming
      </Link>
    </div>
  );
};

export default MoviesHeader;
