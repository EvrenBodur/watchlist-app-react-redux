import React from "react";
import { NavLink } from "./NavLink";
import "../styles/Navigation.css";

const Navigation = () => {
  const menuHandler = () => {
    const navLinks = document.querySelector(".nav-links");
    navLinks.classList.toggle("open");
  };

  return (
    <div className="navigation-container">
      <div onClick={menuHandler} className="hamburger-menu">
        <div className="line"></div>
        <div className="line"></div>
        <div className="line"></div>
      </div>
      <div className="nav-links">
        <NavLink
          activeClassName="active"
          inactiveClassName="inactive"
          className="nav-link"
          to="/"
          onClick={menuHandler}
        >
          <i className="fas fa-film"></i> Movies
        </NavLink>
        <NavLink
          activeClassName="active"
          inactiveClassName="inactive"
          className="nav-link"
          to="/series"
          onClick={menuHandler}
        >
          <i className="fas fa-tv"></i> Tv Series
        </NavLink>
        <NavLink
          activeClassName="active"
          inactiveClassName="inactive"
          className="nav-link"
          to="/search"
          onClick={menuHandler}
        >
          <i className="fas fa-search"></i> Search
        </NavLink>
        <NavLink
          activeClassName="active"
          inactiveClassName="inactive"
          className="nav-link"
          to="/watchlist"
          onClick={menuHandler}
        >
          <i className="far fa-list-alt"></i> Watch List
        </NavLink>
      </div>
    </div>
  );
};

export default Navigation;
