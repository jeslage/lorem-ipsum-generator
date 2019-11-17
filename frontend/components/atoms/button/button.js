import React from "react";
import PropTypes from "prop-types";

import StyledButton from "./button.style";
import SvgSprite from "@atoms/svgSprite/svgSprite";

const Button = ({ children, iconBefore, iconAfter, ...props }) => (
  <StyledButton type="button" {...props}>
    {iconBefore && (
      <SvgSprite icon={iconBefore} className="button__icon-before" />
    )}
    {children}
    {iconAfter && <SvgSprite icon={iconAfter} className="button__icon-after" />}
  </StyledButton>
);

Button.propTypes = {
  children: PropTypes.node
};

Button.defaultProps = {
  children: ""
};

export default Button;
