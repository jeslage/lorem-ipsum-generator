import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";

import StyledToggle from "./toggle.style";

const Toggle = ({ onChange, isActive }) => {
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
    <StyledToggle
      active={active}
      onClick={handleChange}
      type="button"
      role="switch"
      aria-checked={active}
    >
      <span />
    </StyledToggle>
  );
};

Toggle.propTypes = {
  onChange: PropTypes.func,
  isActive: PropTypes.bool
};

Toggle.defaultProps = {
  onChange: undefined,
  isActive: false
};

export default Toggle;
