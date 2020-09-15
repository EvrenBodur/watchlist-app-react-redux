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
  }, [input, dispatch]);

  return (
    <div className="search-container">
      <input
        onChange={handleChange}
        className="input"
        placeholder="Movies or Tv Series.."
      />
      <div className="search">
        {searchMovies.results.map((movie) => {
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
