import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";

import SvgSprite from "@atoms/svgSprite/svgSprite";

import StyledSelect from "./select.style";

const Select = ({
  options,
  iconBefore,
  initialValue,
  label,
  title,
  name,
  onChange
}) => {
  const [currentValue, setCurrentValue] = useState(initialValue);

  const handleChange = event => {
    const { value } = event.target;

    setCurrentValue(value);

    if (onChange) {
      onChange(value);
    }
  };

  useEffect(() => {
    setCurrentValue(initialValue);
  }, [initialValue]);

  return (
    <StyledSelect>
      <label>
        {(label || iconBefore) && (
          <p className="select__label" title={title}>
            {iconBefore && <SvgSprite icon={iconBefore} />}
            {label && label}
          </p>
        )}
        <select value={currentValue} onChange={handleChange} name={name}>
          {options.map(option => (
            <option value={option.value} key={option.value}>
              {option.label || option.value}
            </option>
          ))}
        </select>
        <div className="select__icon" />
      </label>
    </StyledSelect>
  );
};

Select.propTypes = {
  onChange: PropTypes.func,
  name: PropTypes.string,
  iconBefore: PropTypes.shape(),
  label: PropTypes.string,
  title: PropTypes.string,
  initialValue: PropTypes.string.isRequired,
  options: PropTypes.arrayOf(
    PropTypes.shape({
      value: PropTypes.string,
      label: PropTypes.string
    })
  ).isRequired
};

Select.defaultProps = {
  name: null,
  onChange: undefined,
  iconBefore: null,
  title: null,
  label: null
};

export default Select;
