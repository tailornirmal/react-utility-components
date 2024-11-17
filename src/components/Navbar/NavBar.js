import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <nav>
      <ul>
        <li>
          <NavLink
            to="/todos"
            className={({ isActive }) => {
              return isActive ? "active-link" : "";
            }}
          >
            Todos
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/gallery"
            className={({ isActive }) => {
              return isActive ? "active-link" : "";
            }}
          >
            Gallery
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
