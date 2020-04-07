import React, { FC } from "react";

import StyledButton from "./Button.style";

import Icon, { IconTypes } from "../Icon";

export interface ButtonProps {
  iconBefore?: IconTypes;
  iconAfter?: IconTypes;
  variant?: "primary" | "secondary";
  className?: string;
  onClick?: (e: React.MouseEvent) => void;
}

const Button: FC<ButtonProps> = ({
  children,
  iconBefore,
  iconAfter,
  variant = "primary",
  onClick,
  className,
  ...props
}) => (
  <StyledButton
    type="button"
    variant={variant}
    className={className}
    onClick={onClick}
    {...props}
  >
    {iconBefore && <Icon type={iconBefore} className="button__icon-before" />}
    {children}
    {iconAfter && <Icon type={iconAfter} className="button__icon-after" />}
  </StyledButton>
);

export default Button;
