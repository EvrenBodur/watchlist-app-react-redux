import React from "react";
import { Link, Outlet } from "react-router-dom";
import "../styles/Home.css";

const Home = () => {
  return (
    <div className="home-container">
      <div className="breadcrumb-container">
        <div className="breadcrumb-links">
          <Link className="breadcrumb-link" to="/">
            Popular
          </Link>
          <div className="divider">/</div>
          <Link className="breadcrumb-link" to="/toprated">
            Top Rated
          </Link>
          <div className="divider">/</div>
          <Link className="breadcrumb-link" to="/upcoming">
            Upcoming
          </Link>
        </div>
      </div>
      <Outlet />
    </div>
  );
};

export default Home;
