import React, { useState } from "react";
import Card from "./Card";
import Details from "./Details";

import "../styles/CardContainer.css";

const CardContainer = ({ items, isLoaded, isMovie, isSerie }) => {
  const [details, setDetails] = useState([]);

  const detailHandler = (item) => {
    setDetails([item]);
  };
  const backButtonHandler = () => {
    setDetails([]);
  };

  return (
    <div className="body-container">
      {details.length > 0 ? (
        <Details
          details={details}
          backButtonHandler={backButtonHandler}
          isMovie={isMovie}
          isSerie={isSerie}
        />
      ) : isLoaded ? (
        items.map((item) => {
          if (item.poster_path) {
            return (
              <Card key={item.id} item={item} detailHandler={detailHandler} />
            );
          } else {
            return null;
          }
        })
      ) : (
        <p>Loading..</p>
      )}
    </div>
  );
};

export default CardContainer;
