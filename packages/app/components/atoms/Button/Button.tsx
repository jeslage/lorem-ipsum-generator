import React, { FC } from "react";

import StyledButton from "./Button.style";
import SvgSprite from "../SvgSprite";

export interface ButtonProps {
  iconBefore?: any;
  iconAfter?: any;
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
    {iconBefore && (
      <SvgSprite icon={iconBefore} className="button__icon-before" />
    )}
    {children}
    {iconAfter && <SvgSprite icon={iconAfter} className="button__icon-after" />}
  </StyledButton>
);

export default Button;
