import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "../styles/NavBar.css";

const NavBar = () => {
  const location = useLocation();
  const [open, setOpen] = useState(false);
  const menuHandler = () => {
    setOpen(!open);
  };

  return (
    <div className="navbar-container">
      <div className="app-title-container">
        <Link className="app-title" to="/">
          WL
        </Link>
      </div>
      <div
        className={!open ? "navigation-links" : `navigation-links open`}
        onClick={menuHandler}
      >
        <Link
          className={
            location.pathname === "/search"
              ? "navigation-link active"
              : "navigation-link"
          }
          to="search"
        >
          Search
        </Link>
        <Link
          className={
            location.pathname === "/categories"
              ? "navigation-link active"
              : "navigation-link"
          }
          to="categories"
        >
          Categories
        </Link>
        <Link
          className={
            location.pathname === "/watchlist"
              ? "navigation-link active"
              : "navigation-link"
          }
          to="watchlist"
        >
          Watch List
        </Link>
        <Link
          className={
            location.pathname === "/login"
              ? "navigation-link active"
              : "navigation-link"
          }
          to="login"
        >
          Login
        </Link>
        <Link
          className={
            location.pathname === "/signup"
              ? "navigation-link active"
              : "navigation-link"
          }
          to="signup"
        >
          Sign Up
        </Link>
      </div>
      <div className="hamburger-menu" onClick={menuHandler}>
        <div className="menu-line"></div>
        <div className="menu-line"></div>
        <div className="menu-line"></div>
      </div>
    </div>
  );
};

export default NavBar;
