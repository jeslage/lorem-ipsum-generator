import React from "react";
import PropTypes from "prop-types";

import StyledButton from "./button.style";

const Button = ({ children, ...props }) => (
  <StyledButton type="button" {...props}>
    {children}
  </StyledButton>
);

Button.propTypes = {
  children: PropTypes.node
};

Button.defaultProps = {
  children: ""
};

export default Button;
