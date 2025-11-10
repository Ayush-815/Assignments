import React from 'react';
import '../styles/navbar.css';
import { useSidebar } from '../context/SidebarContext';
import { useSelector, useDispatch } from 'react-redux';
import { logout } from '../store/store';

const Navbar = () => {
  const { toggleSidebar } = useSidebar();
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();

  return (
    <nav className="navbar">
      <button className="menu-btn" onClick={toggleSidebar}>☰</button>
      <h2>Ayush Redoxxx</h2>
    </nav>
  );
};

export default Navbar;