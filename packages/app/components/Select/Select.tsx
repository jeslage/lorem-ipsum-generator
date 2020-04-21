import React, { useState, useEffect, FC } from "react";

import { IconTypes } from "../Icon";

import StyledSelect from "./Select.style";
import Label from "../Label";

type Option = {
  value: string;
  label: string;
  [key: string]: any;
};

export interface SelectProps {
  options: Option[];
  iconBefore?: IconTypes;
  initialValue: string;
  label?: string;
  description?: string;
  name: string;
  onChange?: (value: string) => void;
}

const Select: FC<SelectProps> = ({
  options,
  iconBefore,
  description,
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
          <Label label={label} icon={iconBefore} description={description} />
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
