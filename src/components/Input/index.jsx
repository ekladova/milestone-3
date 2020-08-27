import React, { useState, useEffect } from "react";
import "./input.css";
import Button from "../Button";

const Input = ({ turns, className }) => {
  const [text, setText] = useState({});

  const onChange = (event) =>
    setText({ ...text, [event.target.id]: event.target.value });

  const onSubmit = () => {
    // localStorage.setItem(text.name, turns);
    console.log(localStorage);
  };

  return (
    <>
      <div className={className || "input-container"}>
        <input
          type="text"
          className="input-name"
          id="name"
          placeholder={"Your Name"}
          onChange={onChange}
        />
        <Button onClick={onSubmit} />
      </div>
    </>
  );
};

export default Input;
