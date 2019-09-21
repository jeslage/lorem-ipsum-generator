import React, { useState } from "react";
import PropTypes from "prop-types";

import StyledSelect from "./select.style";

const Select = ({ options, initialValue, label, onChange }) => {
  const [currentValue, setCurrentValue] = useState(
    initialValue || options[0].value
  );

  const handleChange = event => {
    const { value } = event.target;

    setCurrentValue(value);

    if (onChange) {
      onChange(value);
    }
  };

  return (
    <StyledSelect>
      <label>
        {label && <span className="select__label">{label}</span>}
        <select value={currentValue} onChange={handleChange}>
          {options.map(option => (
            <option value={option.value} key={option.value}>
              {option.label}
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
  initialValue: PropTypes.string,
  options: PropTypes.arrayOf(
    PropTypes.shape({
      value: PropTypes.string,
      label: PropTypes.string
    })
  ).isRequired
};

Select.defaultProps = {
  onChange: undefined,
  label: "Choose an option",
  initialValue: null
};

export default Select;
