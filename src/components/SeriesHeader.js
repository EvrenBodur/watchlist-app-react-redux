import React from "react";
import { Link } from "react-router-dom";
import { NavLink } from "./NavLink";
import "../styles/SeriesHeader.css";

const SeriesHeader = () => {
  return (
    <div className="series-header">
      <NavLink activeClassName="active" className="series-link" to="/series">
        Popular
      </NavLink>
      <NavLink
        activeClassName="active"
        className="series-link"
        to="/series/topratedseries"
      >
        Top Rated
      </NavLink>
      <NavLink
        activeClassName="active"
        className="series-link"
        to="/series/ontheairseries"
      >
        On the Air
      </NavLink>
      <NavLink
        activeClassName="active"
        className="series-link"
        to="/series/airingtodayseries"
      >
        Airing Today
      </NavLink>
    </div>
  );
};

export default SeriesHeader;
