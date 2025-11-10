import React from "react";
import { NavLink } from "react-router-dom";

export default function Sidebar() {
  return (
    <div className="sidebar">
      <div className="brand">Ayush Bar</div>
      <nav>
        <ul>
          <li><NavLink to="/dashboard">Dashboard</NavLink></li>
          <li><NavLink to="/orders">Orders</NavLink></li>
          <li><NavLink to="/menu">Menu</NavLink></li>
          <li><NavLink to="/reservations">Reservations</NavLink></li>
          <li><NavLink to="/customers">Customers</NavLink></li>
        </ul>
      </nav>
    </div>
  );
}