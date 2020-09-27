import React from "react";
import { Outlet } from "react-router-dom";
import MoviesHeader from "./MoviesHeader";
import "../styles/Movies.css";

const Movies = () => {
  return (
    <div className="movies-container">
      <MoviesHeader />
      <Outlet />
    </div>
  );
};

export default Movies;
