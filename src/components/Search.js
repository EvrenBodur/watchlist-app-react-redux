import React, { Fragment } from "react";
import { Outlet } from "react-router-dom";
import SearchHeader from "./SearchHeader";
import "../styles/Search.css";

const Search = ({ inputHandler }) => {
  return (
    <div className="search-container">
      <SearchHeader />
      {window.location.pathname === "/search/categories" ? (
        <p>categories</p>
      ) : (
        <Fragment>
          <i className="fas fa-search"></i>
          <input
            onChange={inputHandler}
            className="search-input"
            type="text"
            placeholder="Search for a movie, Tv series..."
          />
        </Fragment>
      )}

      <Outlet />
    </div>
  );
};

export default Search;
