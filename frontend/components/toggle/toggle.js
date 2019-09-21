import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";

import StyledToggle from "./toggle.style";

const Toggle = ({ label, onChange, isActive }) => {
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
      {label && <p>{label}</p>}
      <button
        onClick={handleChange}
        type="button"
        role="switch"
        aria-checked={active}
      >
        <span />
      </button>
    </StyledToggle>
  );
};

Toggle.propTypes = {
  label: PropTypes.string,
  onChange: PropTypes.func,
  isActive: PropTypes.bool
};

Toggle.defaultProps = {
  label: null,
  onChange: undefined,
  isActive: false
};

export default Toggle;
