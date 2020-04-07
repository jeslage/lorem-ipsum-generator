import React, { useState, FC } from "react";
import { ChromePicker } from "react-color";

import StyledColorPicker from "./ColorPicker.style";

export interface ColorPickerProps {
  iconBefore?: JSX.Element;
  title?: string;
  label?: string;
  value: any;
  className?: string;
  onChange?: (value: string) => void;
}

const ColorPicker: FC<ColorPickerProps> = ({
  iconBefore,
  title,
  label,
  onChange,
  value
}) => {
  const [visible, setVisible] = useState(false);

  return (
    <StyledColorPicker color={value}>
      {(label || iconBefore) && (
        <p className="colorPicker__label" title={title}>
          {iconBefore}
          {label && label}
        </p>
      )}
      <div className="colorPicker__wrapper">
        <button
          onClick={() => setVisible(prev => !prev)}
          aria-label="Open color picker"
          className="colorPicker__open"
        >
          <span />
        </button>

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

export default ColorPicker;
