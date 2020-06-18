import React from "react";
import "./card.css";

const Card = ({ symbol, onClick, number, flipped, matched }) => {
  return (
    <div className="card" onClick={onClick} data-number={number}>
      {matched ? "ok" : flipped ? symbol : "X"}
    </div>
  );
};

export default Card;
