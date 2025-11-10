import React, { useState, useRef, useEffect } from "react";
import "../styles/layout.css";

export default function Navbar({ username, onLogout }) {
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef();

  const handleToggle = () => setOpen((prev) => !prev);

  // close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const userInitial = username ? username.charAt(0).toUpperCase() : "?";

  return (
    <nav className="navbar">
      <h1 className="navbar-title">React VLite Dashboard</h1>

      <div className="user-menu" ref={dropdownRef}>
        <div className="user-info" onClick={handleToggle}>
          <div className="user-avatar">{userInitial}</div>
          <span className="user-name">{username}</span>
        </div>

        {open && (
          <div className="dropdown">
            <button className="dropdown-item">Profile</button>
            <button className="dropdown-item logout" onClick={onLogout}>
              Logout
            </button>
          </div>
        )}
      </div>
    </nav>
  );
}