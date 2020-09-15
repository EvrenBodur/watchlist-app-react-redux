import React, { useEffect } from "react";
import { fetchGenres } from "../redux/actions/genresAction";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import "../styles/Categories.css";

const Categories = () => {
  const dispatch = useDispatch();
  const { genres } = useSelector((state) => state.genres);

  useEffect(() => {
    dispatch(fetchGenres());
  }, [dispatch]);

  return (
    <div className="categories-container">
      <ul className="genre-container">
        {genres.map((genre) => (
          <Link className="genre" to={genre.name}>
            {genre.name}
          </Link>
        ))}
      </ul>
    </div>
  );
};

export default Categories;
