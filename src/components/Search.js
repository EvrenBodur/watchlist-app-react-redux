import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchSearchMovies } from "../actions/searchMoviesAction";
import Card from "./Card";
import "../styles/Search.css";

const Search = () => {
  const dispatch = useDispatch();
  const { searchMovies } = useSelector((state) => state.searchMovies);
  const [input, setInput] = useState("");

  useEffect(() => {
    if (input === "") return;
    dispatch(fetchSearchMovies(input));
  }, [input]);

  const handleInput = (e) => {
    if (e.target.value === "") return;
    setInput(e.target.value);
  };
  console.log(searchMovies);
  return (
    <div className="search-container">
      <input
        placeholder="Search movies or tv series.."
        className="input"
        onChange={handleInput}
      />
      <div className="search-body">
        {searchMovies.map((movie) => {
          if (movie.poster_path) {
            return <Card key={movie.id} movie={movie} />;
          } else {
            return null;
          }
        })}
      </div>
    </div>
  );
};

export default Search;
