import PropTypes from "prop-types";
import Button from "../../atoms/Button/Button";
import styles from "./CounterDisplay.module.css";

function CounterDisplay({ count, onIncrement, onDecrement }) {
  return (
    <div className={styles.counterBox}>
      <h2>Count: {count}</h2>
      <div>
        {/* two button label where increment lai primary */}
        <Button label="Increment" onClick={onIncrement} type="primary" />
        <Button label="Decrement" onClick={onDecrement} type="secondary" />
      </div>
    </div>
  );
}

CounterDisplay.propTypes = {
  count: PropTypes.number.isRequired,
  onIncrement: PropTypes.func.isRequired,
  onDecrement: PropTypes.func.isRequired,
};

export default CounterDisplay;
