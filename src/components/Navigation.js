import React from "react";
import { Link } from "react-router-dom";
import "../styles/Navigation.css";

const Navigation = () => {
  const handleOpen = () => {
    const navLinks = document.querySelector(".nav-links");
    navLinks.classList.toggle("open");
  };

  return (
    <nav className="nav-container">
      <div onClick={handleOpen} className="hamburger">
        <div className="line "></div>
        <div className="line "></div>
        <div className="line "></div>
      </div>
      <ul className="nav-links">
        <Link to="/" className="nav-link" onClick={handleOpen}>
          Home
        </Link>
        <Link to="search" className="nav-link" onClick={handleOpen}>
          Search
        </Link>
        <Link to="watchlist" className="nav-link" onClick={handleOpen}>
          Watch List
        </Link>
      </ul>
    </nav>
  );
};

export default Navigation;
