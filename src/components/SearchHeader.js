import React from "react";
import { Link } from "react-router-dom";
import "../styles/SearchHeader.css";

const SearchHeader = () => {
  return (
    <div className="search-header">
      <Link className="search-link" to="/search">
        Movies
      </Link>
      <Link className="search-link" to="/search/tvseries">
        Tv Series
      </Link>
    </div>
  );
};

export default SearchHeader;
