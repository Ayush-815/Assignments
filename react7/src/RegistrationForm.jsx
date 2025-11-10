import React, { useState } from "react";
import useFormValidation from "./hooks/useFormValidation";
import "./App.css";

const RegistrationForm = () => {
  const { errors, validateForm } = useFormValidation();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    gender: "", 
    dob: { day: "", month: "", year: "" },
  });

  const [showPasswords, setShowPasswords] = useState(false);

  const handleChange = (e) => {
    const { name, value, type } = e.target;

    //
    if (["day", "month", "year"].includes(name)) {
      setFormData((prev) => ({
        ...prev,
        dob: { ...prev.dob, [name]: value },
      }));
    } else if (type === "radio" && name === "gender") {
      setFormData({ ...formData, gender: value });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const isValid = validateForm(formData);
    if (isValid) {
      const users = JSON.parse(localStorage.getItem("users")) || [];
      users.push(formData);
      localStorage.setItem("users", JSON.stringify(users));
      alert("User registered successfully!");
    }
  };

  const days = Array.from({ length: 31 }, (_, i) => i + 1);
  const months = [
    "Jan", "Feb", "Mar", "Apr", "May", "Jun",
    "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
  ];
  const years = Array.from({ length: 100 }, (_, i) => new Date().getFullYear() - i);

  return (
    <form className="form" onSubmit={handleSubmit}>
      <h2>Registration Form</h2>

      <label>Name</label>
      <input type="text" name="name" onChange={handleChange} />
      {errors.name && <p className="error">{errors.name}</p>}

      <label>Email</label>
      <input type="text" name="email" onChange={handleChange} />
      {errors.email && <p className="error">{errors.email}</p>}

      <label>Password</label>
      <input
        type={showPasswords ? "text" : "password"}
        name="password"
        onChange={handleChange}
      />
      {errors.password && <p className="error">{errors.password}</p>}

      <label>Confirm Password</label>
      <input
        type={showPasswords ? "text" : "password"}
        name="confirmPassword"
        onChange={handleChange}
      />
      {errors.confirmPassword && <p className="error">{errors.confirmPassword}</p>}

      <label style={{ marginTop: "10px" }}>
        <input
          type="checkbox"
          checked={showPasswords}
          onChange={() => setShowPasswords((prev) => !prev)}
        />{" "}
        Show Passwords
      </label>

      <label>Gender</label>
      <div className="radio-group">
        <label>
          <input
            type="radio" name="gender" value="Male" checked={formData.gender === "Male"}
            onChange={handleChange}
          />{" "}
          Male
        </label>
        <label>
          <input
            type="radio" name="gender" value="Female" checked={formData.gender === "Female"}
            onChange={handleChange}
          />{" "}
          Female
        </label>
        <label>
          <input
            type="radio" name="gender" value="Other"
            checked={formData.gender === "Other"}
            onChange={handleChange}
          />{" "}
          Other
        </label>
      </div>
      {errors.gender && <p className="error">{errors.gender}</p>}

      <label>Date of Birth</label>
      <div className="dob-select">
        <select name="day" onChange={handleChange}>
          <option value="">Day</option>
          {days.map((d) => <option key={d} value={d}>{d}</option>)}
        </select>
        <select name="month" onChange={handleChange}>
          <option value="">Month</option>
          {months.map((m, i) => <option key={i} value={i + 1}>{m}</option>)}
        </select>
        <select name="year" onChange={handleChange}>
          <option value="">Year</option>
          {years.map((y) => <option key={y} value={y}>{y}</option>)}
        </select>
      </div>
      {errors.dob && <p className="error">{errors.dob}</p>}

      <button type="submit">Register</button>
    </form>
  );
};
export default RegistrationForm;