import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";

import StyledToggle from "./toggle.style";

const Toggle = ({ iconBefore, label, onChange, isActive }) => {
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
    <StyledToggle active={active}>
      {(label || iconBefore) && (
        <p className="toggle__label">
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
    </StyledToggle>
  );
};

Toggle.propTypes = {
  iconBefore: PropTypes.node,
  label: PropTypes.string,
  onChange: PropTypes.func,
  isActive: PropTypes.bool
};

Toggle.defaultProps = {
  iconBefore: null,
  label: null,
  onChange: undefined,
  isActive: false
};

export default Toggle;
