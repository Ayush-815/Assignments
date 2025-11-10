import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar">
      <h2 className="navbar-logo">AyushUI</h2>
      <ul className="navbar-links">
        <li>
          <NavLink to="/" end className={({ isActive }) => (isActive ? "active-link" : "")}>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/button" className={({ isActive }) => (isActive ? "active-link" : "")}>
            Button
          </NavLink>
        </li>
        <li>
          <NavLink to="/table" className={({ isActive }) => (isActive ? "active-link" : "")}>
            Table
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;