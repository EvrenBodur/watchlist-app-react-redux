import React from "react";
import Card from "./Card";
import "../styles/CardContainer.css";

const CardContainer = ({ items, isLoaded }) => {
  return (
    <div className="body-container">
      {isLoaded ? (
        items.map((item) => {
          if (item.poster_path) {
            return <Card key={item.id} item={item} />;
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
