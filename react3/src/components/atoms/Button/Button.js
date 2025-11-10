import PropTypes from "prop-types";
import styles from "./Button.module.css";

function Button({ label, onClick, type }) {
  return (
    <button 
      className={`${styles.btn} ${styles[type]}`} 
      onClick={onClick}
    >
      {label}
    </button>
  );
}

Button.propTypes = {
  label: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  type: PropTypes.oneOf(["primary", "secondary"]),
};

Button.defaultProps = {
  type: "primary",
};

export default Button;
