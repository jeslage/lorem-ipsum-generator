import React, { FC } from "react";

import Icon, { IconTypes } from "../Icon";

import StyledRadioGroup from "./RadioGroup.style";

type RadioOption = {
  value: string;
  icon: IconTypes;
};

export interface RadioGroupProps {
  label?: string;
  iconBefore?: IconTypes;
  name: string;
  value: string;
  onChange: (value: string) => void;
  options: RadioOption[];
}

const RadioGroup: FC<RadioGroupProps> = ({
  label,
  iconBefore,
  name,
  value,
  onChange,
  options
}) => {
  return (
    <StyledRadioGroup>
      {(label || iconBefore) && (
        <p className="radioGroup__label">
          {iconBefore && <Icon type={iconBefore} />}
          {label && label}
        </p>
      )}
      {options.map(option => (
        <label key={option.value} className="radioGroup__radio">
          <input
            type="radio"
            name={name}
            value={option.value}
            checked={option.value === value}
            onChange={e => onChange(e.target.value)}
          />
          {option.icon && (
            <div className="radioGroup__icon">
              <Icon type={option.icon} />
            </div>
          )}
        </label>
      ))}
    </StyledRadioGroup>
  );
};

export default RadioGroup;
