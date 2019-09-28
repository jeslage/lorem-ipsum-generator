import React, { useEffect } from "react";
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
  const updateValue = val => onChange(parseFloat(val));

  const handleChange = event => {
    const { value, validity } = event.target;

    if (validity.valid) {
      if (value !== "") {
        updateValue(parseFloat(value));
      } else {
        updateValue(0);
      }
    }
  };

  const handleBlur = event => {
    const { value } = event.target;

    if (value > max) {
      updateValue(max);
    } else if (value < min) {
      updateValue(min);
    }
  };

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
          onClick={() => updateValue(value - steps)}
          disabled={value === min}
          aria-label="Decrease"
        >
          <SvgSprite icon={MinusIcon} />
        </button>
        <span>
          <input
            type="text"
            pattern="[0-9.]*"
            value={value}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          {suffix}
        </span>
        <button
          type="button"
          onClick={() => updateValue(value + steps)}
          disabled={value === max}
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
  onChange: () => {},
  suffix: null,
  iconBefore: null
};

export default Counter;
