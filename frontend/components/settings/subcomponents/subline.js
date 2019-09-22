import React, { useContext } from "react";

import { SettingsContext } from "../../../contexts/settingsProvider";

import Counter from "../../counter/counter";
import Toggle from "../../toggle/toggle";
import Select from "../../select/select";
import Code from "../../code/code";
import ColorPicker from "../../colorpicker/colorpicker";

const Subline = () => {
  const { settings, updateNestedSettings, fontFamilies } = useContext(
    SettingsContext
  );

  const { subline } = settings;
  const { fontFamily, visible, size, lineHeight, color } = subline;

  return (
    <div>
      <Toggle
        label="Enable sublines"
        isActive={visible}
        onChange={bool => updateNestedSettings("subline", "visible", bool)}
      />
      {visible && (
        <>
          <Select
            options={fontFamilies}
            initialValue={fontFamily}
            label="Font Family"
            onChange={value =>
              updateNestedSettings("subline", "fontFamily", value)
            }
          />
          <Counter
            label="Font Size"
            value={size}
            onChange={value => updateNestedSettings("subline", "size", value)}
          />

          <Counter
            label="Line Height"
            value={lineHeight}
            steps={0.25}
            onChange={value =>
              updateNestedSettings("subline", "lineHeight", value)
            }
          />
          <ColorPicker
            label="Color"
            value={color}
            onChange={value => updateNestedSettings("subline", "color", value)}
          />
          <Code
            code={`h3 {\r\n\tfont-size: ${size}px;\r\n\tline-height: ${lineHeight};\r\n\tcolor: ${color};\r\n}`}
          />
        </>
      )}
    </div>
  );
};

export default Subline;
