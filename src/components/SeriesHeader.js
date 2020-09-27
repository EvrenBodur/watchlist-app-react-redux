import React from "react";
import { Link } from "react-router-dom";
import "../styles/SeriesHeader.css";

const SeriesHeader = () => {
  return (
    <div className="series-header">
      <Link className="series-link" to="/series">
        Popular
      </Link>
      <Link className="series-link" to="/series/topratedseries">
        Top Rated
      </Link>
      <Link className="series-link" to="/series/ontheairseries">
        On the Air
      </Link>
      <Link className="series-link" to="/series/airingtodayseries">
        Airing Today
      </Link>
    </div>
  );
};

export default SeriesHeader;
