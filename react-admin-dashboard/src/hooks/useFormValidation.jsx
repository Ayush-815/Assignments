import { useState } from "react";

export default function useFormValidation(initialValues, mode = "login") {
  const [values, setValues] = useState(initialValues);
  const [errors, setErrors] = useState({});

  const regexRules = {
    name: {
      required: mode === "register",
      pattern: /^[A-Za-z\s]+$/,
      message: "Name must contain only letters",
    },
    email: {
      required: true,
      pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
      message: "Invalid email format",
    },
    password: {
      required: true,
      pattern: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$/,
      message: "Min 6 chars with letters & numbers required",
    },
  };

  const validate = (field, value) => {
    const rule = regexRules[field];
    let message = "";

    if (rule?.required && !value.trim()) {
      message = `${field.charAt(0).toUpperCase() + field.slice(1)} is required`;
    } else if (rule?.pattern && value && !rule.pattern.test(value)) {
      message = rule.message;
    }

    setErrors((prev) => ({ ...prev, [field]: message }));
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues((prev) => ({ ...prev, [name]: value }));
    validate(name, value);
  };

  const validateAll = () => {
    const newErrors = {};
    Object.keys(values).forEach((key) => {
      const rule = regexRules[key];
      if (rule?.required && !values[key]?.trim()) {
        newErrors[key] = `${key.charAt(0).toUpperCase() + key.slice(1)} is required`;
      } else if (rule?.pattern && values[key] && !rule.pattern.test(values[key])) {
        newErrors[key] = rule.message;
      } else {
        newErrors[key] = "";
      }
    });
    setErrors(newErrors);
    return Object.values(newErrors).every((msg) => msg === "");
  };

  return { values, errors, handleChange, validateAll };
}