import React from "react";
import PropTypes from "prop-types";

import SvgSprite from "@atoms/SvgSprite";

import StyledRange from "./range.style";

const Range = ({
  iconBefore,
  value,
  label,
  title,
  onChange,
  doubleClickValue,
  min,
  max,
  steps,
  suffix
}) => {
  const updateValue = value => {
    if (onChange) onChange(parseFloat(value));
  };

  const handleChange = event => {
    const { value, validity } = event.target;

    if (validity.valid) {
      if (value > max) {
        updateValue(max);
      } else if (value < min) {
        updateValue(min);
      } else if (value !== "") {
        updateValue(value);
      } else {
        updateValue(0);
      }
    }
  };

  const handleKeyDown = event => {
    const {
      key,
      target: { value }
    } = event;

    const number = parseFloat(value);

    if (key === "ArrowUp" || key === "ArrowRight") {
      updateValue(number + 1 <= max ? number + 1 : max);
    } else if (key === "ArrowDown" || key === "ArrowLeft") {
      updateValue(number - 1 >= min ? number - 1 : min);
    }
  };

  return (
    <StyledRange>
      <label>
        {(label || iconBefore) && (
          <p className="range__label" title={title}>
            {iconBefore && <SvgSprite icon={iconBefore} />}
            {label && label}
          </p>
        )}

        <span>
          <input
            type="text"
            pattern="[0-9.]*"
            value={value}
            onChange={handleChange}
            onKeyDown={handleKeyDown}
          />
          {suffix}
        </span>

        <input
          type="range"
          step={steps}
          min={min}
          max={max}
          value={value}
          onDoubleClick={() => {
            if (typeof doubleClickValue === "number") {
              updateValue(doubleClickValue);
            }
          }}
          onChange={e => updateValue(e.target.value)}
        />
      </label>
    </StyledRange>
  );
};

Range.propTypes = {
  onChange: PropTypes.func,
  doubleClickValue: PropTypes.number,
  iconBefore: PropTypes.shape(),
  label: PropTypes.string,
  title: PropTypes.string,
  suffix: PropTypes.string,
  value: PropTypes.number,
  min: PropTypes.number,
  max: PropTypes.number,
  steps: PropTypes.number
};

Range.defaultProps = {
  value: 0,
  onChange: undefined,
  doubleClickValue: null,
  iconBefore: null,
  title: null,
  label: null,
  suffix: "",
  min: 0,
  max: 100,
  steps: 1
};

export default Range;
