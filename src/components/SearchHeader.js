import React from "react";
import { Link } from "react-router-dom";
import { NavLink } from "./NavLink";
import "../styles/SearchHeader.css";

const SearchHeader = () => {
  return (
    <div className="search-header">
      <NavLink activeClassName="active" className="search-link" to="/search">
        Movies
      </NavLink>
      <NavLink
        activeClassName="active"
        className="search-link"
        to="/search/tvseries"
      >
        Tv Series
      </NavLink>
    </div>
  );
};

export default SearchHeader;
