import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";

import StyledCounter from "./counter.style";

const Counter = ({
  label,
  description,
  value,
  min,
  max,
  steps,
  onChange,
  suffix
}) => {
  const [currentValue, setCurrentValue] = useState(parseFloat(value));

  useEffect(() => {
    if (onChange) {
      let returnValue = currentValue;

      if (currentValue > max) {
        returnValue = max;
      } else if (currentValue < min) {
        returnValue = min;
      }

      onChange(returnValue);
    }
  }, [currentValue]);

  useEffect(() => setCurrentValue(parseFloat(value)), [value]);

  const handleChange = event => {
    const { value, validity } = event.target;

    if (validity.valid) {
      if (value !== "") {
        setCurrentValue(parseFloat(value));
      } else {
        setCurrentValue(0);
      }
    }
  };

  const handleBlur = event => {
    const { value } = event.target;

    if (value > max) {
      setCurrentValue(max);
    } else if (value < min) {
      setCurrentValue(min);
    }
  };

  return (
    <StyledCounter>
      <div className="counter__text">
        {label && <p>{label}</p>}
        {description && (
          <p>
            <small>{description}</small>
          </p>
        )}
      </div>
      <div className="counter__counter">
        <button
          type="button"
          onClick={() => setCurrentValue(prev => prev - steps)}
          disabled={currentValue === min}
          aria-label="Decrease"
        >
          <svg viewBox="0 0 24 24" role="img" focusable="false">
            <rect height="2" rx="1" width="12" x="6" y="11" />
          </svg>
        </button>
        <span>
          <input
            type="text"
            pattern="[0-9.]*"
            value={currentValue}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          {suffix}
        </span>
        <button
          type="button"
          onClick={() => setCurrentValue(prev => prev + steps)}
          disabled={currentValue === max}
          aria-label="Increase"
        >
          <svg viewBox="0 0 24 24" role="img" focusable="false">
            <rect height="2" rx="1" width="12" x="6" y="11" />
            <rect height="12" rx="1" width="2" x="11" y="6" />
          </svg>
        </button>
      </div>
    </StyledCounter>
  );
};

Counter.propTypes = {
  label: PropTypes.string,
  description: PropTypes.string,
  value: PropTypes.number,
  min: PropTypes.number,
  max: PropTypes.number,
  steps: PropTypes.number,
  onChange: PropTypes.func,
  suffix: PropTypes.string
};

Counter.defaultProps = {
  label: null,
  description: null,
  value: 0,
  min: 1,
  max: 100,
  steps: 1,
  onChange: undefined,
  suffix: null
};

export default Counter;
