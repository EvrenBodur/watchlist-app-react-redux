import React from "react";
import { NavLink } from "./NavLink";
import { Link } from "react-router-dom";
import "../styles/MoviesHeader.css";

const MoviesHeader = () => {
  return (
    <div className="movies-header">
      <NavLink activeClassName="active" className="movies-link" to="/">
        Popular
      </NavLink>
      <NavLink
        activeClassName="active"
        className="movies-link"
        to="/topratedmovies"
      >
        Top Rated
      </NavLink>
      <NavLink
        activeClassName="active"
        className="movies-link"
        to="/nowplayingmovies"
      >
        Now Playing
      </NavLink>
      <NavLink
        activeClassName="active"
        className="movies-link"
        to="/upcomingmovies"
      >
        Upcoming
      </NavLink>
    </div>
  );
};

export default MoviesHeader;
