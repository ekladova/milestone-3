import React from "react";
import { NavLink } from "react-router-dom";
import "./nav.css";

const Nav = () => {
  return (
    <div>
      <ul className="list">
        <li className="list-elements">
          <NavLink className="link-element" to={"/"} exact alt="Home">
            Home
          </NavLink>
        </li>
        <li className="list-elements">
          <NavLink className="link-element" to={"/game"} alt="Game">
            Game
          </NavLink>
        </li>
        <li className="list-elements">
          <NavLink className="link-element" to={"/settings"} alt="Settings">
            Settings
          </NavLink>
        </li>
      </ul>
    </div>
  );
};
export default Nav;
