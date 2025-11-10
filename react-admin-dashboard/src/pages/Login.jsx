import React from "react";
import { useNavigate, Link } from "react-router-dom";
import useFormValidation from "../hooks/useFormValidation";
import { loginUser } from "../utils/auth";
import "../styles/auth.css";

export default function Login({ setUser }) {
  const navigate = useNavigate();
  const { values, errors, handleChange, validateAll } = useFormValidation(
    { email: "", password: "" },
    "login"
  );

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validateAll()) {
      alert("Please fill in valid credentials");
      return;
    }

    const loggedUser = loginUser(values.email, values.password);
    if (loggedUser) {
      setUser(loggedUser);
      navigate("/dashboard", { replace: true });
    } else {
      alert("Invalid email or password!");
    }
  };

  return (
    <div className="auth-container">
      <form className="auth-form" onSubmit={handleSubmit}>
        <h2>Login</h2>

        <input
          type="email"
          name="email"
          placeholder="Email"
          value={values.email}
          onChange={handleChange}
        />
        {errors.email && <span className="error">{errors.email}</span>}

        <input
          type="password"
          name="password"
          placeholder="Password"
          value={values.password}
          onChange={handleChange}
        />
        {errors.password && <span className="error">{errors.password}</span>}

        <button type="submit">Login</button>
        <p>
          Don’t have an account? <Link to="/register">Register</Link>
        </p>
      </form>
    </div>
  );
}