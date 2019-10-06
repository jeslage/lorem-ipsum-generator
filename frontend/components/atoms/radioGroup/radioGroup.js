import React from "react";

import SvgSprite from "../svgSprite/svgSprite";

import StyledRadioGroup from "./radioGroup.style";

const RadioGroup = ({ label, iconBefore, name, value, onChange, options }) => {
  return (
    <StyledRadioGroup>
      {(label || iconBefore) && (
        <p className="radioGroup__label">
          {iconBefore && <SvgSprite icon={iconBefore} />}
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
              <SvgSprite icon={option.icon} />
            </div>
          )}
        </label>
      ))}
    </StyledRadioGroup>
  );
};

export default RadioGroup;
