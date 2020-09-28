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
          <i className="fas fa-film"></i> Movies
        </Link>
        <Link className="nav-link" to="/series">
          <i className="fas fa-tv"></i> Tv Series
        </Link>
        <Link className="nav-link" to="/search">
          <i className="fas fa-search"></i> Search
        </Link>
        <Link className="nav-link" to="/watchlist">
          <i className="far fa-list-alt"></i> Watch List
        </Link>
      </div>
    </div>
  );
};

export default Navigation;
