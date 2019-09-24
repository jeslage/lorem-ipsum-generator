import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";

import SvgSprite from "../svgSprite/svgSprite";

import MinusIcon from "../../icons/minus.svg";
import PlusIcon from "../../icons/plus.svg";

import StyledCounter from "./counter.style";

const Counter = ({
  label,
  title,
  description,
  value,
  min,
  max,
  steps,
  onChange,
  suffix,
  iconBefore
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

  console.log("render", label);

  return (
    <StyledCounter>
      <div className="counter__text">
        {(label || iconBefore) && (
          <p className="counter__label" title={title}>
            {iconBefore && iconBefore}
            {label && label}
          </p>
        )}
        {description && (
          <p className="counter__description">
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
          <SvgSprite icon={MinusIcon} />
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
          <SvgSprite icon={PlusIcon} />
        </button>
      </div>
    </StyledCounter>
  );
};

Counter.propTypes = {
  label: PropTypes.string,
  title: PropTypes.string,
  description: PropTypes.string,
  value: PropTypes.number,
  min: PropTypes.number,
  max: PropTypes.number,
  steps: PropTypes.number,
  onChange: PropTypes.func,
  suffix: PropTypes.string,
  iconBefore: PropTypes.node
};

Counter.defaultProps = {
  label: null,
  title: null,
  description: null,
  value: 0,
  min: 1,
  max: 100,
  steps: 1,
  onChange: undefined,
  suffix: null,
  iconBefore: null
};

export default React.memo(Counter);
