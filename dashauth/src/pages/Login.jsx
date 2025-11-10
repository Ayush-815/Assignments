import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import "../styles/form.css";

export default function Login() {
  const navigate = useNavigate();
  const { login } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setError("");
      await login({ email, password }); // use context login
      navigate("/dashboard"); // go to dashboard
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className="form-page">
      <div className="form-container">
        <div className="form-card">
          <h2>Login</h2>
          <form onSubmit={handleSubmit}>
            <label htmlFor="email">Email</label>
            <input
              id="email"
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />

            <label htmlFor="password">Password</label>
            <input
              id="password"
              type="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />

            {error && (
              <p style={{ color: "red", fontSize: "0.9rem" }}>{error}</p>
            )}

            <button type="submit">Login</button>
          </form>

          <div className="form-link">
            <span>
              Don’t have an account? <Link to="/register">Register here</Link>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}