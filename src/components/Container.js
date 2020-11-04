import React, { useEffect } from "react";
import Card from "./Card";
import { useDispatch, useSelector } from "react-redux";
import { fetchGenres } from "../actions/moviesActions";
import "../styles/Container.css";

const Container = ({ movies, setPage }) => {
  const dispatch = useDispatch();
  const { genres } = useSelector((state) => state.genresStore);

  useEffect(() => {
    dispatch(fetchGenres());
  }, [dispatch]);

  return (
    <div onClick={setPage} className="container">
      {movies.length > 0 && (
        <div className="left-container">
          <div className="left">
            <i className="fas fa-chevron-left"></i>
          </div>
        </div>
      )}

      <div className="container-card-container">
        {movies.map((movie) => {
          if (movie.poster_path !== null) {
            return <Card key={movie.id} movie={movie} genres={genres} />;
          }
        })}
      </div>
      {movies.length > 0 && (
        <div className="right-container">
          <div className="right">
            <i className="fas fa-chevron-right"></i>
          </div>
        </div>
      )}
    </div>
  );
};

export default Container;
