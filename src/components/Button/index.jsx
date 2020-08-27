import React from "react";

const Button = ({ onClick }) => {
  return (
    <>
      <div className="button-container">
        <button onClick={onClick} type="button">
          Submit
        </button>
      </div>
    </>
  );
};

export default Button;
