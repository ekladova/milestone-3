import React from "react";
import { NavLink } from "react-router-dom";
import "./nav.css";

const Nav = () => {
  return (
    <div>
      <ul className="list">
        {/* <li className="list-elements">
          <NavLink className="link-element" to={"/"} exact alt="Home">
            Home
          </NavLink>
        </li> */}
        <li className="list-elements">
          <NavLink className="link-element" to={"/"} alt="Game">
            Game
          </NavLink>
        </li>
        {/* <li className="list-elements">
          <NavLink className="link-element" to={"/settings"} alt="Settings">
            Settings
          </NavLink>
        </li>
        <li className="list-elements">
          <NavLink className="link-element" to={"/products"} alt="Product">
            Products
          </NavLink>
        </li> */}
      </ul>
    </div>
  );
};
export default Nav;
