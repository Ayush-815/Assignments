import { useState } from "react";

const useFormValidation = () => {
  const [errors, setErrors] = useState({});

  const validateForm = (data) => {
    let formErrors = {};

    // Regex patterns
    const nameRegex = /^[a-zA-Z\s]{2,}$/;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const passwordRegex = /^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

    // Name
    if (!data.name) {
      formErrors.name = "Name is required.";
    } else if (!nameRegex.test(data.name)) {
      formErrors.name = "Name must contain only letters and spaces (min 2 characters).";
    }

    // Email
    if (!data.email) {
      formErrors.email = "Email is required.";
    } else if (!emailRegex.test(data.email)) {
      formErrors.email = "Invalid email format.";
    }

    // Password
    if (!data.password) {
      formErrors.password = "Password is required.";
    } else if (!passwordRegex.test(data.password)) {
      formErrors.password =
        "Password must be at least 8 characters, include an uppercase letter, a number, and a special character.";
    }

    // Confirm Password
    if (data.password !== data.confirmPassword) {
      formErrors.confirmPassword = "Passwords do not match.";
    }

    // Gender
    if (!data.gender) {
      formErrors.gender = "Please select your gender.";
    }

    // Date of Birth
    if (!data.dob.day || !data.dob.month || !data.dob.year) {
      formErrors.dob = "Please select your date of birth.";
    }

    setErrors(formErrors);
    return Object.keys(formErrors).length === 0;
  };

  return { errors, validateForm };
};

export default useFormValidation;
