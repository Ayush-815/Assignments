import React from "react";
import "../styles/components.css";

const Button = ({ children, variant = "primary", ...props }) => {
  return (
    <button className={`ui-button ${variant}`} {...props}>
      {children}
    </button>
  );
};

export default Button;