import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchSearchMovies } from "../actions/moviesActions";
import { Pager } from "../App";
import Container from "../components/Container";

import "../styles/Search.css";

const Search = () => {
  const dispatch = useDispatch();
  const { searchMovies } = useSelector((state) => state.searchMoviesStore);
  const [value, setValue] = useState("");
  const [searchPage, setSearchPage] = useState(1);
  const valueHandler = (e) => {
    setValue(e.target.value);
  };

  const searchPageHandler = (e) => {
    const newPager = new Pager(
      searchPage,
      setSearchPage,
      e.target,
      "fas fa-chevron-right",
      "fas fa-chevron-left"
    );
    newPager.create();
  };

  useEffect(() => {
    if (value === "") return;
    dispatch(fetchSearchMovies(value, searchPage));
  }, [dispatch, value, searchPage]);

  return (
    <div className="search-container">
      <div className="input-container">
        <input
          onChange={valueHandler}
          type="text"
          placeholder="Search for a movie.."
        ></input>
      </div>
      {searchMovies.length > 0 && (
        <Container movies={searchMovies} setPage={searchPageHandler} />
      )}
    </div>
  );
};

export default Search;
