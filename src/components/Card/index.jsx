import React from "react";
import "./card.css";

const Card = ({
  className,
  symbol,
  onClick,
  number,
  flipped,
  matched = false,
}) => {
  return (
    <div className={className} onClick={onClick} data-number={number}>
      {matched ? "ok" : flipped ? symbol : "X"}
    </div>
  );
};

export default Card;
