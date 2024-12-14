import React from "react";
import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <nav>
      <ul>
        <li>
          <NavLink
            to="/todos"
          >
            Todos
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/gallery"
          >
            Gallery
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/scroll"
          >
            Scroll
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/geolocation"
          >
            Geolocation
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
