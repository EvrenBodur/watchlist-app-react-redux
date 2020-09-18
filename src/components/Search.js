import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchSearchMovies } from "../actions/searchMoviesAction";
import { fetchCategories } from "../actions/categoriesAction";
import { fetchGenreMovies } from "../actions/genreMoviesAction";
import Card from "./Card";
import MovieDetails from "./MovieDetails";
import Pagination from "./Pagination";
import Categories from "./Categories";
import "../styles/Search.css";

const Search = () => {
  const dispatch = useDispatch();
  const { searchMovies, total_pages } = useSelector(
    (state) => state.searchMovies
  );
  const { categories } = useSelector((state) => state.categories);
  const { genreMovies, genre_total_pages } = useSelector(
    (state) => state.genreMovies
  );

  const [input, setInput] = useState("");
  const [details, setDetails] = useState([]);
  const [page, setPage] = useState(1);

  const [value, setValue] = useState("");

  useEffect(() => {
    if (input === "") return;
    dispatch(fetchSearchMovies(input, page));
  }, [input, page, dispatch]);

  useEffect(() => {
    dispatch(fetchCategories());
    dispatch(fetchGenreMovies(value, page));
  }, [value, page, dispatch]);

  const handleInput = (e) => {
    if (e.target.value === "") return;
    setInput(e.target.value);
    setPage(1);
    setValue("");
  };

  const handleDetails = (details) => {
    setDetails([details]);
  };

  const handleBackButton = () => {
    setDetails([]);
  };

  const handleCategories = (event) => {
    setValue(event.target.value);
  };

  return (
    <div className="search-container">
      {details.length > 0 ? (
        <MovieDetails details={details} handleBackButton={handleBackButton} />
      ) : (
        <div className="search-inner-container">
          <input
            placeholder="Search movies or tv series.."
            className="input"
            onChange={handleInput}
          />
          <Categories
            handleCategories={handleCategories}
            categories={categories}
            value={value}
          />
          <>
            {value ? (
              <div className="search-body">
                <Pagination
                  page={genreMovies.length > 0 ? page : 0}
                  setPage={setPage}
                  total_pages={genre_total_pages}
                />
                {genreMovies.map((movie) => {
                  if (movie.poster_path) {
                    return (
                      <Card
                        key={movie.id}
                        movie={movie}
                        handleDetails={handleDetails}
                      />
                    );
                  } else {
                    return null;
                  }
                })}
              </div>
            ) : (
              <div className="search-body">
                <Pagination
                  page={searchMovies.length > 0 ? page : 0}
                  setPage={setPage}
                  total_pages={total_pages}
                />
                {searchMovies.map((movie) => {
                  if (movie.poster_path) {
                    return (
                      <Card
                        key={movie.id}
                        movie={movie}
                        handleDetails={handleDetails}
                      />
                    );
                  } else {
                    return null;
                  }
                })}
              </div>
            )}
          </>
        </div>
      )}
    </div>
  );
};

export default Search;
