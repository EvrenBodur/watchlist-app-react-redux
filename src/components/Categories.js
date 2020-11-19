import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCategoryMovies } from "../actions/moviesActions";
import { Pager } from "../App";
import Container from "./Container";
import "../styles/Categories.css";

const Categories = () => {
  const dispatch = useDispatch();

  const [value, setValue] = useState("");
  const [categoryPage, setCategoryPage] = useState(1);

  const { genres } = useSelector((state) => state.genresStore);
  const { categoryMovies } = useSelector((state) => state.categoryMoviesStore);

  const handleSelect = (e) => {
    setValue(e.target.value);
    setCategoryPage(1);
  };

  const categoriesPageHandler = (e) => {
    const newPager = new Pager(
      categoryPage,
      setCategoryPage,
      e.target,
      "fas fa-chevron-right",
      "fas fa-chevron-left"
    );
    newPager.create();
  };

  useEffect(() => {
    dispatch(fetchCategoryMovies(value, categoryPage));
  }, [dispatch, value, categoryPage]);

  return (
    <div className="categories-container">
      <div className="options">
        <form>
          <select value={value} onChange={handleSelect}>
            {genres.map((genre) => {
              return (
                <option key={genre.name} value={genre.id}>
                  {genre.name}
                </option>
              );
            })}
          </select>
        </form>
      </div>
      <Container movies={categoryMovies} setPage={categoriesPageHandler} />
    </div>
  );
};

export default Categories;
