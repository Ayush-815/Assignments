import React, { useState } from "react";
import RegistrationForm from "./RegistrationForm";
import UserList from "./UserList";
import "./App.css";

function App() {
  const [view, setView] = useState("register");

  return (
    <div className="App">
      <h1>User Management</h1>
      <div className="nav-buttons">
        <button onClick={() => setView("register")}>Register User</button>
        <button onClick={() => setView("list")}>User List</button>
      </div>
      {view === "register" ? <RegistrationForm /> : <UserList />}
    </div>
  );
}
export default App;