import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  fetchTrailer,
  fetchCast,
  addItemToWatchList,
} from "../actions/moviesActions";
import ReactPlayer from "react-player";
import "../styles/Details.css";

const Details = () => {
  const dispatch = useDispatch();
  const { details, genres } = useSelector((state) => state.detailsStore);
  const { watchList } = useSelector((state) => state.watchListStore);
  const movieID = details.id;

  const { trailer } = useSelector((state) => state.trailerStore);
  const { cast } = useSelector((state) => state.castStore);

  const listItem = {
    details,
    genres,
    trailer,
    cast,
  };

  const addHandler = () => {
    const newItem = watchList.find((item) => item.details.id === details.id);
    if (!newItem) {
      dispatch(addItemToWatchList(listItem));
      alert("Added to your watch list");
    } else {
      alert("This movie is already in your watch list");
    }
  };

  useEffect(() => {
    dispatch(fetchTrailer(movieID));
    dispatch(fetchCast(movieID));
  }, [dispatch, movieID]);

  return (
    <div
      style={{
        backgroundImage: `url('https://image.tmdb.org/t/p/original${details.poster_path}')`,
      }}
      className="details-container"
    >
      <div className="poster-cover"></div>
      {trailer !== undefined && (
        <div className="detail-trailer-container">
          <div className="detail-trailer-title">{trailer.name}</div>
          <ReactPlayer
            playsinline
            width="70%"
            height="100%"
            controls={true}
            url={`https://www.youtube.com/watch?v=${trailer.key}`}
          />
        </div>
      )}

      <div className="detail-title-container">
        <div className="detail-title">{details.title}</div>
        <div className="detail-rate">{details.vote_average}</div>
        <div className="detail-genres">{genres}</div>
        <button onClick={addHandler}>+ Add to watch list</button>
      </div>
      <div className="detail-overview-container">{details.overview}</div>
      {cast.length > 0 ? (
        <div className="detail-cast-container">
          {cast.map((person) => {
            if (person.profile_path !== null) {
              return (
                <div key={person.cast_id} className="cast-container">
                  <div className="cast-image-container">
                    <img
                      className="cast-image"
                      src={`https://image.tmdb.org/t/p/w300${person.profile_path}`}
                      alt={person.name}
                    />
                  </div>
                  <div className="cast-names">
                    {person.name} as {person.character}
                  </div>
                </div>
              );
            }
          })}
        </div>
      ) : (
        <p>Data yok</p>
      )}

      <div className="detail-similar-container"></div>
    </div>
  );
};

export default Details;
