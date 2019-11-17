import React from "react";
import PropTypes from "prop-types";

import SvgSprite from "@atoms/svgSprite/svgSprite";

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

RadioGroup.propTypes = {
  label: PropTypes.string,
  name: PropTypes.string,
  value: PropTypes.number,
  onChange: PropTypes.func,
  iconBefore: PropTypes.shape(),
  options: PropTypes.arrayOf(
    PropTypes.shape({
      icon: PropTypes.shape(),
      value: PropTypes.string
    })
  )
};

RadioGroup.defaultProps = {
  label: "",
  name: "",
  value: "",
  onChange: () => {},
  iconBefore: null,
  options: null
};

export default RadioGroup;
