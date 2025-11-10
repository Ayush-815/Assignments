import React from 'react';
import '../styles/sidebar.css';
import { useSidebar } from '../context/SidebarContext';

const Sidebar = () => {
  const { isOpen, closeSidebar } = useSidebar();

  return (
    <div className={`sidebar ${isOpen ? 'open' : ''}`}>
      <button className="close-btn" onClick={closeSidebar}>×</button>
      <ul>
        <li>Home</li>
        <li>Projects</li>
        <li>Settings</li>
      </ul>
    </div>
  );
};

export default Sidebar;