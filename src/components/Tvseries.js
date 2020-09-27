import React from "react";
import SeriesHeader from "./SeriesHeader";
import "../styles/TvSeries.css";
import { Outlet } from "react-router-dom";

const Tvseries = () => {
  return (
    <div className="series-container">
      <SeriesHeader />
      <Outlet />
    </div>
  );
};

export default Tvseries;
