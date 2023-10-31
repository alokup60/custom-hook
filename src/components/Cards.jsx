import React from "react";

const Cards = ({ title, body }) => {
  return (
    <div>
      <div>
        <h2>{title}</h2>
        <p>{body}</p>
      </div>
    </div>
  );
};

export default Cards;
