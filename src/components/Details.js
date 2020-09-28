import React, { useEffect } from "react";
import ReactPlayer from "react-player";
import { getMovieTrailer } from "../actions/moviesActions";
import { getSerieTrailer } from "../actions/seriesActions";
import { setDetail } from "../actions/watchListAction";
import { useDispatch, useSelector } from "react-redux";
import "../styles/Details.css";

const Details = ({ details, backButtonHandler, isMovie }) => {
  const detail = details[0];
  const dispatch = useDispatch();
  const { movieTrailer } = useSelector((state) => state.moviesStore);
  const { serieTrailer } = useSelector((state) => state.seriesStore);

  useEffect(() => {
    if (isMovie) {
      dispatch(getMovieTrailer(detail.id));
    } else if (isMovie === undefined) {
      dispatch(getSerieTrailer(detail.id));
    }
  }, [detail.id, isMovie, dispatch]);

  const addButtonHandler = () => {
    dispatch(setDetail(detail));
  };
  console.log(detail);
  return (
    <div className="details-container">
      <div className="detail-card">
        <div className="detail-card-header">
          <img src={`https://image.tmdb.org/t/p/w300${detail.poster_path}`} />
        </div>
        <div className="detail-card-body">
          <div className="detail-trailer">
            <ReactPlayer
              url={`https://www.youtube.com/watch?v=${
                isMovie ? movieTrailer.key : serieTrailer.key
              }`}
              controls={true}
              height="100%"
              width="100%"
            />
          </div>
          <div className="detail-overview">
            <span className="title">{detail.title || detail.name}</span>
            <span className="overview">
              {detail.overview || "There is no information yet."}
            </span>
          </div>
          <div className="detail-footer">
            <div className="buttons">
              <button onClick={backButtonHandler}>Back</button>
              <button onClick={addButtonHandler}>+ Add to Watchlist</button>
            </div>
            <div className="footer-detail">{detail.vote_average}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;
