import React, { useState, useEffect, FC } from "react";

import Icon, { IconTypes } from "../Icon";

import StyledSelect from "./Select.style";

export interface SelectProps {
  options: any;
  iconBefore?: IconTypes;
  initialValue: string;
  label?: string;
  name: string;
  onChange?: (value: string) => void;
}

const Select: FC<SelectProps> = ({
  options,
  iconBefore,
  initialValue,
  label,
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
          <p className="select__label">
            {iconBefore && <Icon type={iconBefore} />}
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

export default Select;
