import React from "react";
import { Link } from "react-router-dom";
import "../styles/Navigation.css";

const Navigation = () => {
  return (
    <div className="navigation-container">
      <div className="hamburger-menu">
        <div className="line"></div>
        <div className="line"></div>
        <div className="line"></div>
      </div>
      <div className="nav-links">
        <Link className="nav-link" to="/">
          Movies
        </Link>
        <Link className="nav-link" to="/series">
          Tv Series
        </Link>
        <Link className="nav-link" to="/search">
          Search
        </Link>
        <Link className="nav-link" to="/watchlist">
          Watch List
        </Link>
      </div>
    </div>
  );
};

export default Navigation;
