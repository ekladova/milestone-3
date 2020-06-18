import React from "react";
import { NavLink } from "react-router-dom";
import "./nav.css";

const Nav = () => {
  return (
    <div>
      <ul className="list">
        <li className="list-elements">
          <NavLink
            className="link-element"
            to={"/milestone-3/"}
            exact
            alt="Home"
          >
            Home
          </NavLink>
        </li>
        <li className="list-elements">
          <NavLink className="link-element" to={"/milestone-3/game"} alt="Game">
            Game
          </NavLink>
        </li>
        <li className="list-elements">
          <NavLink
            className="link-element"
            to={"/milestone-3/settings"}
            alt="Settings"
          >
            Settings
          </NavLink>
        </li>
      </ul>
    </div>
  );
};
export default Nav;
