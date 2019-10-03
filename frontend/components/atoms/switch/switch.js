import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";

import StyledSwitch from "./switch.style";

const Switch = ({ iconBefore, label, onChange, isActive }) => {
  const [active, setActive] = useState(isActive);

  const handleChange = () => {
    const newActive = !active;

    setActive(prev => !prev);

    if (onChange) {
      onChange(newActive);
    }
  };

  useEffect(() => setActive(isActive), [isActive]);

  return (
    <StyledSwitch active={active}>
      {(label || iconBefore) && (
        <p className="switch__label">
          {iconBefore && iconBefore}
          {label && label}
        </p>
      )}
      <button
        onClick={handleChange}
        type="button"
        role="switch"
        aria-checked={active}
      >
        <span>
          {!active ? (
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
};

Switch.propTypes = {
  iconBefore: PropTypes.node,
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
