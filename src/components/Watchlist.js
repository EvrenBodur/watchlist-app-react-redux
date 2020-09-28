import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteItem } from "../actions/watchListAction";
import "../styles/Watchlist.css";

const Watchlist = () => {
  const dispatch = useDispatch();
  const { detail } = useSelector((state) => state.watchListStore);

  return (
    <div className="watch-list-container">
      {detail.length > 0 ? (
        detail.map((item) => (
          <div key={item.id} className="list-card-container">
            <div className="list-card-poster">
              <img
                src={`https://image.tmdb.org/t/p/w185${item.poster_path}`}
                alt={item.title}
              />
            </div>
            <div className="list-card-body">
              <div className="list-card-title">{item.title || item.name}</div>
              <div className="list-card-overview">{item.overview}</div>
              <div className="list-card-button">
                <button onClick={() => dispatch(deleteItem(item.id))}>
                  Delete
                </button>
              </div>
            </div>
          </div>
        ))
      ) : (
        <p>
          Add something to watch later{" "}
          <i className="far fa-grin-squint-tears"></i>
        </p>
      )}
    </div>
  );
};

export default Watchlist;
