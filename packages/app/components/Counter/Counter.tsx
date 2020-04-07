import React, { FC } from "react";

import StyledCounter from "./Counter.style";

import Icon, { IconTypes } from "../Icon";

export interface CounterProps {
  iconBefore?: IconTypes;
  label: string;
  onChange?: (val: number) => void;
  value: number;
  description?: string;
  min?: number;
  max?: number;
  steps?: number;
  suffix?: string | undefined;
}

const Counter: FC<CounterProps> = ({
  label,
  description,
  value,
  min = 0,
  max = 100,
  steps = 1,
  onChange,
  suffix,
  iconBefore
}) => {
  const updateValue = (val: number) => {
    if (onChange) onChange(val);
  };

  const handleChange = (event: { target: HTMLInputElement }) => {
    const { value, validity } = event.target;

    if (validity.valid) {
      if (value !== "") {
        updateValue(parseFloat(value));
      } else {
        updateValue(0);
      }
    }
  };

  const handleBlur = (event: { target: HTMLInputElement }) => {
    const { value } = event.target;
    const numberValue: number | string = parseFloat(value);

    if (numberValue > max) {
      updateValue(max);
    } else if (numberValue < min) {
      updateValue(min);
    }
  };

  return (
    <StyledCounter>
      <div className="counter__text">
        {(label || iconBefore) && (
          <p className="counter__label">
            {iconBefore && <Icon type={iconBefore} />}
            {label && label}
          </p>
        )}
        {description && (
          <p className="counter__description">
            <small>{description}</small>
          </p>
        )}
      </div>
      <div className="counter__counter">
        <button
          type="button"
          onClick={() => updateValue(value - steps)}
          disabled={value === min}
          aria-label="Decrease"
        >
          <svg viewBox="0 0 24 24" width="24" height="24">
            <rect height="2" rx="1" width="12" x="6" y="11" />
          </svg>
        </button>
        <span>
          <input
            type="text"
            pattern="[0-9.]*"
            value={value}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          {suffix}
        </span>
        <button
          type="button"
          onClick={() => updateValue(value + steps)}
          disabled={value === max}
          aria-label="Increase"
        >
          <svg viewBox="0 0 24 24" width="24" height="24">
            <rect height="2" rx="1" width="12" x="6" y="11" />
            <rect height="12" rx="1" width="2" x="11" y="6" />
          </svg>
        </button>
      </div>
    </StyledCounter>
  );
};

export default Counter;
