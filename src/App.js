import React, { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchPopularMovies,
  fetchTopRatedMovies,
  fetchUpcomingMovies,
} from "./actions/moviesActions";
import NavBar from "./components/NavBar";
import Home from "./components/Home";
import Container from "./components/Container";
import Details from "./components/Details";
import SignUp from "./components/SignUp";
import Search from "./components/Search";
import Categories from "./components/Categories";
import "./styles/App.css";

export class Pager {
  constructor(pageNumber, pageSetter, element, className1, className2) {
    this.pageNumber = pageNumber;
    this.pageSetter = pageSetter;
    this.element = element;
    this.className1 = className1;
    this.className2 = className2;
  }
  create() {
    if (this.element.className === this.className1) {
      this.pageSetter(this.pageNumber + 1);
    }
    if (this.element.className === this.className2 && this.pageNumber > 1) {
      this.pageSetter(this.pageNumber - 1);
    }
  }
}

const App = () => {
  const [popularPage, setPopularPage] = useState(1);
  const [topRatedPage, setTopRatedPage] = useState(1);
  const [upcomingPage, setUpcomingPage] = useState(1);

  const dispatch = useDispatch();

  const { popularMovies, popularTotalPages } = useSelector(
    (state) => state.popularMoviesStore
  );
  const { topRatedMovies, topRatedTotalPages } = useSelector(
    (state) => state.topRatedMoviesStore
  );
  const { upcomingMovies, upcomingTotalPages } = useSelector(
    (state) => state.upcomingMoviesStore
  );

  const popularPageHandler = (e) => {
    const newPager = new Pager(
      popularPage,
      setPopularPage,
      e.target,
      "fas fa-chevron-right",
      "fas fa-chevron-left"
    );
    newPager.create();
  };

  const topRatedPageHandler = (e) => {
    const newPager = new Pager(
      topRatedPage,
      setTopRatedPage,
      e.target,
      "fas fa-chevron-right",
      "fas fa-chevron-left"
    );
    newPager.create();
  };

  const upcomingPageHandler = (e) => {
    const newPager = new Pager(
      upcomingPage,
      setUpcomingPage,
      e.target,
      "fas fa-chevron-right",
      "fas fa-chevron-left"
    );
    newPager.create();
  };

  useEffect(() => {
    dispatch(fetchPopularMovies(popularPage));
    dispatch(fetchTopRatedMovies(topRatedPage));
    dispatch(fetchUpcomingMovies(upcomingPage));
  }, [dispatch, popularPage, topRatedPage, upcomingPage]);

  return (
    <div className="app-container">
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />}>
            <Route
              path="/"
              element={
                <Container
                  movies={popularMovies}
                  setPage={popularPageHandler}
                />
              }
            ></Route>
            <Route
              path="/toprated"
              element={
                <Container
                  movies={topRatedMovies}
                  setPage={topRatedPageHandler}
                />
              }
            ></Route>
            <Route
              path="/upcoming"
              element={
                <Container
                  movies={upcomingMovies}
                  setPage={upcomingPageHandler}
                />
              }
            ></Route>
          </Route>
          <Route path="/search" element={<Search />} />
          <Route path="/categories" element={<Categories />} />
          <Route path="/watchlist" element={<p>Watch List</p>} />
          <Route path="/login" element={<p>Login</p>} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/:id" element={<Details />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
