import React from "react";
import PropTypes from "prop-types";

import SvgSprite from "../svgSprite/svgSprite";

import StyledRange from "./range.style";

const Range = ({
  iconBefore,
  value,
  label,
  title,
  onChange,
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
            onBlur={handleBlur}
          />
          {suffix}
        </span>

        <input
          type="range"
          step={steps}
          min={min}
          max={max}
          value={value}
          onChange={e => updateValue(e.target.value)}
        />
      </label>
    </StyledRange>
  );
};

Range.propTypes = {
  onChange: PropTypes.func,
  iconBefore: PropTypes.shape(),
  label: PropTypes.string,
  title: PropTypes.string,
  suffix: PropTypes.string,
  value: PropTypes.number.isRequired,
  min: PropTypes.number,
  max: PropTypes.number,
  steps: PropTypes.number
};

Range.defaultProps = {
  onChange: undefined,
  iconBefore: null,
  title: null,
  label: null,
  suffix: "",
  min: 1,
  max: 100,
  steps: 1
};

export default Range;
