import React from "react";
import { Card } from "../../components";
import "./gamepage.css";

const GamePage = ({ deck = [], onReset, onClick, totalTurns, matched }) => {
  return (
    <>
      <div>
        <span>
          <p>Total turns: {totalTurns} </p>
        </span>
      </div>

      <div matched={matched} className="deck">
        {deck.map((card, i) => (
          <Card key={i} number={i} onClick={onClick} {...card} />
        ))}
      </div>
      <div className="reset-container">
        <button className="reset" onClick={onReset}>
          Reset
        </button>
      </div>
    </>
  );
};

export default GamePage;
