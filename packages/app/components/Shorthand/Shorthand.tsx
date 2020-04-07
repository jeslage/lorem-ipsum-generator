import React, { FC } from "react";

import Icon, { IconTypes } from "../Icon";

import StyledShorthand from "./Shorthand.style";

type ShorthandObject = {
  top: number;
  left: number;
  right: number;
  bottom: number;
};

export interface ShorthandProps {
  label?: string;
  description?: string;
  value: ShorthandObject;
  onChange?: (value: ShorthandObject) => void;
  iconBefore?: IconTypes;
}

const Shorthand: FC<ShorthandProps> = ({
  label,
  description,
  value,
  onChange,
  iconBefore
}) => {
  const { top, left, right, bottom } = value;
  const updateValue = (key, val) => {
    const newValue = {
      ...value,
      [key]: parseFloat(val)
    };

    if (onChange) {
      onChange(newValue);
    }
  };

  const handleChange = event => {
    const { value, name } = event.target;

    if (value !== "") {
      updateValue(name, value);
    } else {
      updateValue(name, 0);
    }
  };

  const handleKeyDown = event => {
    const {
      keyCode,
      target: { value, name }
    } = event;

    if (keyCode === 38) {
      updateValue(name, parseFloat(value) + 1);
    } else if (keyCode === 40) {
      updateValue(name, parseFloat(value) - 1);
    }
  };

  return (
    <StyledShorthand>
      <div className="shorthand__text">
        {(label || iconBefore) && (
          <p className="shorthand__label">
            {iconBefore && <Icon type={iconBefore} />}
            {label && label}
          </p>
        )}
        {description && (
          <p className="shorthand__description">
            <small>{description}</small>
          </p>
        )}
      </div>
      <div className="shorthand__shorthand">
        <input
          type="text"
          pattern="[0-9.]*"
          value={top}
          name="top"
          onKeyDown={e => handleKeyDown(e)}
          onChange={e => handleChange(e)}
          onBlur={e => handleChange(e)}
        />

        <input
          type="text"
          pattern="[0-9.]*"
          value={right}
          name="right"
          onKeyDown={e => handleKeyDown(e)}
          onChange={e => handleChange(e)}
          onBlur={e => handleChange(e)}
        />

        <input
          type="text"
          pattern="[0-9.]*"
          value={bottom}
          name="bottom"
          onKeyDown={e => handleKeyDown(e)}
          onChange={e => handleChange(e)}
          onBlur={e => handleChange(e)}
        />

        <input
          type="text"
          pattern="[0-9.]*"
          value={left}
          name="left"
          onKeyDown={e => handleKeyDown(e)}
          onChange={e => handleChange(e)}
          onBlur={e => handleChange(e)}
        />
      </div>
    </StyledShorthand>
  );
};

export default Shorthand;
