import React, { useEffect, useState } from "react";
import "./App.css";

const UserList = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const storedUsers = JSON.parse(localStorage.getItem("users")) || [];
    setUsers(storedUsers);
  }, []);

  const removeUser = (index) => {
    const updatedUsers = [...users];
    updatedUsers.splice(index, 1);
    setUsers(updatedUsers);
    localStorage.setItem("users", JSON.stringify(updatedUsers));
  };

  const editUser = (index) => {
    alert(`Edit functionality haleko xaina aajai haalna baki xa with validation: ${index}`);
  };

  if (users.length === 0) {
    return <p className="no-users">No users registered.</p>;
  }

  return (
    <div className="user-list-container">
      <h2>Registered Users</h2>
      <table className="user-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Gender</th>
            <th>DOB</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, idx) => (
            <tr key={idx}>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>{user.gender}</td>
              <td>{`${user.dob.day}-${user.dob.month}-${user.dob.year}`}</td>
              <td>
                <button className="edit-button" onClick={() => editUser(idx)}>Edit</button>
                <button className="remove-button" onClick={() => removeUser(idx)}>Remove</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UserList;
