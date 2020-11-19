import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { deleteItemFromWatchList } from "../actions/moviesActions";

import "../styles/Watchlist.css";

const Watchlist = () => {
  const dispatch = useDispatch();
  const { watchList } = useSelector((state) => state.watchListStore);

  const deleteItem = (id) => {
    dispatch(deleteItemFromWatchList(id));
  };

  return (
    <div className="watchlist-container">
      {watchList.map((item) => {
        return (
          <div key={item.details.id} className="list-item-container">
            <div className="list-item-img">
              <img
                src={`https://image.tmdb.org/t/p/original${item.details.poster_path}`}
                alt={`${item.details.title}`}
              />
            </div>
            <div className="list-item-body">
              <div className="list-item-title">{item.details.title}</div>
              <div className="list-item-rate">{item.details.vote_average}</div>
              <div className="list-item-genres">{item.genres}</div>
              <div className="list-item-buttons">
                <button onClick={() => deleteItem(item.details.id)}>
                  Delete
                </button>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Watchlist;
