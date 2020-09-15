import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchSearchMovies } from "../redux/actions/searchMoviesAction";
import Card from "../components/Card";
import "../styles/Search.css";

const Search = () => {
  const [input, setInput] = useState("");
  const dispatch = useDispatch();
  const { searchMovies } = useSelector((state) => state.searchMovies);

  const handleChange = (e) => {
    if (e.target.value === "") return;
    setInput(e.target.value);
  };

  useEffect(() => {
    if (input === "") return;
    dispatch(fetchSearchMovies(input));
  }, [input]);

  return (
    <div className="search-container">
      <input onChange={handleChange} className="input" placeholder="Search.." />
      <div className="search">
        {searchMovies.results.map((movie) => (
          <Card key={movie.id} movie={movie} />
        ))}
      </div>
    </div>
  );
};

export default Search;
