import React, { FC } from "react";

import Icon, { IconTypes } from "../Icon";

import StyledRange from "./Range.style";

export interface RangeProps {
  iconBefore?: IconTypes;
  value?: number;
  label?: string;
  onChange?: (value: number) => void;
  doubleClickValue?: number;
  min?: number;
  max?: number;
  steps?: number;
  suffix?: string;
}
const Range: FC<RangeProps> = ({
  iconBefore,
  value = 50,
  label,
  onChange,
  doubleClickValue,
  min = 0,
  max = 100,
  steps = 1,
  suffix
}) => {
  const updateValue = value => {
    if (onChange) onChange(parseFloat(value));
  };

  const handleChange = event => {
    const { value, validity } = event.target;

    if (validity.valid) {
      if (value > max) {
        updateValue(max);
      } else if (value < min) {
        updateValue(min);
      } else if (value !== "") {
        updateValue(value);
      } else {
        updateValue(0);
      }
    }
  };

  const handleKeyDown = event => {
    const {
      key,
      target: { value }
    } = event;

    const number = parseFloat(value);

    if (key === "ArrowUp" || key === "ArrowRight") {
      updateValue(number + 1 <= max ? number + 1 : max);
    } else if (key === "ArrowDown" || key === "ArrowLeft") {
      updateValue(number - 1 >= min ? number - 1 : min);
    }
  };

  return (
    <StyledRange>
      <label>
        {(label || iconBefore) && (
          <p className="range__label">
            {iconBefore && <Icon type={iconBefore} />}
            {label && label}
          </p>
        )}

        <span>
          <input
            type="text"
            pattern="[0-9.]*"
            value={value}
            onChange={handleChange}
            onKeyDown={handleKeyDown}
          />
          {suffix}
        </span>

        <input
          type="range"
          step={steps}
          min={min}
          max={max}
          value={value}
          onDoubleClick={() => {
            if (doubleClickValue && typeof doubleClickValue === "number") {
              updateValue(doubleClickValue);
            }
          }}
          onChange={e => updateValue(e.target.value)}
        />
      </label>
    </StyledRange>
  );
};

export default Range;
