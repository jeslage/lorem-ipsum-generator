import React, { useState } from "react";
import { ChromePicker } from "react-color";
import PropTypes from "prop-types";

import StyledColorPicker from "./colorpicker.style";

const ColorPicker = ({ label, onChange, value }) => {
  const [visible, setVisible] = useState(false);

  return (
    <StyledColorPicker color={value}>
      {label && <p className="colorPicker__label">{label}</p>}
      <div className="colorPicker__wrapper">
        <button
          onClick={() => setVisible(prev => !prev)}
          aria-label="Open color picker"
          className="colorPicker__open"
        />

        {visible && (
          <>
            <button
              onClick={() => setVisible(false)}
              aria-label="Close color picker"
              className="colorPicker__cover"
            />
            <div className="colorPicker__content">
              <ChromePicker
                disableAlpha
                color={value}
                onChangeComplete={color => {
                  if (onChange) onChange(color.hex);
                }}
              />
            </div>
          </>
        )}
      </div>
    </StyledColorPicker>
  );
};

ColorPicker.propTypes = {
  label: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired
};

ColorPicker.defaultProps = {
  label: null
};

export default ColorPicker;
