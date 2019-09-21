import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";

import StyledSelect from "./select.style";

const Select = ({ options, initialValue, label, onChange }) => {
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
        {label && <span>{label}</span>}
        <select value={currentValue} onChange={handleChange}>
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
  label: PropTypes.string,
  initialValue: PropTypes.string.isRequired,
  options: PropTypes.arrayOf(
    PropTypes.shape({
      value: PropTypes.string,
      label: PropTypes.string
    })
  ).isRequired
};

Select.defaultProps = {
  onChange: undefined,
  label: "Choose an option"
};

export default Select;
