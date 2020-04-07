import React, { FC } from "react";

import Icon, { IconTypes } from "../Icon";

import StyledSwitch from "./Switch.style";

export interface SwitchProps {
  iconBefore?: IconTypes;
  isActive?: boolean;
  label?: string;
  onChange: (value: boolean) => void;
}

const Switch: FC<SwitchProps> = ({ iconBefore, label, onChange, isActive }) => (
  <StyledSwitch isActive={isActive}>
    {(label || iconBefore) && (
      <p className="switch__label">
        {iconBefore && <Icon type={iconBefore} />}
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

export default Switch;
