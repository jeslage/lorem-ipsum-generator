import React from "react";
import PropTypes from "prop-types";

import SvgSprite from "@atoms/svgSprite/svgSprite";

import StyledSwitch from "./switch.style";

const Switch = ({ iconBefore, label, onChange, isActive, ...props }) => (
  <StyledSwitch active={isActive} {...props}>
    {(label || iconBefore) && (
      <p className="switch__label">
        {iconBefore && <SvgSprite icon={iconBefore} />}
        {label && label}
      </p>
    )}
    <button
      onClick={() => {
        if (onChange) onChange(!isActive);
      }}
      type="button"
      role="switch"
      aria-checked={isActive}
    >
      <span>
        {!isActive ? (
          <svg
            viewBox="0 0 52 52"
            focusable="false"
            aria-hidden="true"
            role="presentation"
          >
            <path d="m19.1 19.1 l14 14 m 0 -14 l -14 14"></path>
          </svg>
        ) : (
          <svg
            viewBox="0 0 52 52"
            focusable="false"
            aria-hidden="true"
            role="presentation"
          >
            <path d="m19.1 25.2 4.7 6.2 12.1-11.2"></path>
          </svg>
        )}
      </span>
    </button>
  </StyledSwitch>
);

Switch.propTypes = {
  iconBefore: PropTypes.shape(),
  label: PropTypes.string,
  onChange: PropTypes.func,
  isActive: PropTypes.bool
};

Switch.defaultProps = {
  iconBefore: null,
  label: null,
  onChange: undefined,
  isActive: false
};

export default Switch;
