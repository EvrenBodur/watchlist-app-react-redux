import React from "react";
import { Link, Outlet, useLocation } from "react-router-dom";
import "../styles/Home.css";

const Home = () => {
  const location = useLocation();

  const activeLink = (path, className) => {
    if (location.pathname === path) {
      return className + " active";
    } else {
      return className;
    }
  };

  return (
    <div className="home-container">
      <div className="breadcrumb-container">
        <div className="breadcrumb-links">
          <Link className={activeLink("/", "breadcrumb-link")} to="/">
            Popular
          </Link>
          <div className="divider">/</div>
          <Link
            className={activeLink("/toprated", "breadcrumb-link")}
            to="/toprated"
          >
            Top Rated
          </Link>
          <div className="divider">/</div>
          <Link
            className={activeLink("/upcoming", "breadcrumb-link")}
            to="/upcoming"
          >
            Upcoming
          </Link>
        </div>
      </div>
      <Outlet />
    </div>
  );
};

export default Home;
