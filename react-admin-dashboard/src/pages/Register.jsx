import React from "react";
import { Link, useNavigate } from "react-router-dom";
import useFormValidation from "../hooks/useFormValidation";
import { registerUser } from "../utils/auth";
import "../styles/auth.css";

export default function Register() {
  const navigate = useNavigate();
  const { values, errors, handleChange, validateAll } = useFormValidation(
    { name: "", email: "", password: "" },
    "register"
  );

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validateAll()) {
      alert("Please fix validation errors");
      return;
    }

    const success = registerUser(values.name, values.email, values.password);
    if (success) {
      alert("Registration successful!");
      navigate("/login");
    } else {
      alert("User with this email already exists!");
    }
  };

  return (
    <div className="auth-container">
      <form className="auth-form" onSubmit={handleSubmit}>
        <h2>Register</h2>

        <input
          type="text"
          name="name"
          placeholder="Full Name"
          value={values.name}
          onChange={handleChange}
        />
        {errors.name && <span className="error">{errors.name}</span>}

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

        <button type="submit">Register</button>
        <p>
          Already registered? <Link to="/login">Login</Link>
        </p>
      </form>
    </div>
  );
}