import React from "react";
import "../styles/Navigation.css";
import { Link } from "react-router-dom";

const Navigation = () => {
  return (
    <div className="navi-container">
      <div className="navigation">
        <Link to="/" className="nav-link">
          WatchList
        </Link>
        <Link to="/" className="nav-link">
          Home
        </Link>
        <Link to="/categories" className="nav-link">
          Categories
        </Link>
        <Link to="/watchlist" className="nav-link">
          Watch List
        </Link>
        <Link to="/watched" className="nav-link">
          Watched
        </Link>
      </div>
    </div>
  );
};

export default Navigation;
