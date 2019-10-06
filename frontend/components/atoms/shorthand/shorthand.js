import React from "react";
import PropTypes from "prop-types";

import SvgSprite from "../svgSprite/svgSprite";

import StyledShorthand from "./shorthand.style";

const Shorthand = ({
  label,
  title,
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

    onChange(newValue);
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
          <p className="shorthand__label" title={title}>
            {iconBefore && <SvgSprite icon={iconBefore} />}
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

Shorthand.propTypes = {
  label: PropTypes.string,
  title: PropTypes.string,
  description: PropTypes.string,
  value: PropTypes.shape({
    top: PropTypes.number,
    left: PropTypes.number,
    bottom: PropTypes.number,
    right: PropTypes.number
  }),
  onChange: PropTypes.func,
  iconBefore: PropTypes.shape()
};

Shorthand.defaultProps = {
  label: null,
  title: null,
  description: null,
  value: {
    top: 0,
    left: 0,
    bottom: 0,
    right: 0
  },
  onChange: () => {},
  iconBefore: null
};

export default Shorthand;
