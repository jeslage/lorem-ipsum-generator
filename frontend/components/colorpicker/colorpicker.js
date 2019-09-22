import React, { useState } from "react";
import { ChromePicker } from "react-color";
import PropTypes from "prop-types";

import StyledColorPicker from "./colorpicker.style";

const ColorPicker = ({ label, onChange, value }) => {
  const [visible, setVisible] = useState(false);
  const color = `rgba(${value.r}, ${value.g}, ${value.b}, ${value.a})`;

  return (
    <StyledColorPicker color={color}>
      {label && <p className="colorPicker__label">{label}</p>}
      <div className="colorPicker__wrapper">
        <button
          onClick={() => setVisible(prev => !prev)}
          aria-label="Open color picker"
        />
        {visible && (
          <div className="colorPicker__content">
            <ChromePicker
              color={value}
              onChangeComplete={color => {
                console.log(color);
                if (onChange)
                  onChange({
                    rgb: color.rgb,
                    rgba: `rgba(${color.rgb.r}, ${color.rgb.g}, ${color.rgb.b}, ${color.rgb.a})`,
                    hex: color.hex
                  });
              }}
            />
          </div>
        )}
      </div>
    </StyledColorPicker>
  );
};

ColorPicker.propTypes = {
  label: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.shape()]).isRequired
};

ColorPicker.defaultProps = {
  label: null
};

export default ColorPicker;
