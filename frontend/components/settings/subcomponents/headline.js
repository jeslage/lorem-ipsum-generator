import React, { useContext } from "react";

import { SettingsContext } from "../../../contexts/settingsProvider";

import Counter from "../../counter/counter";
import Toggle from "../../toggle/toggle";
import Select from "../../select/select";
import Code from "../../code/code";
import ColorPicker from "../../colorpicker/colorpicker";

const Headline = () => {
  const { settings, updateNestedSettings, fontFamilies } = useContext(
    SettingsContext
  );

  const { headline } = settings;
  const { visible, fontFamily, size, lineHeight, frequency, color } = headline;

  return (
    <div>
      <Toggle
        label="Add headlines"
        isActive={visible}
        onChange={bool => updateNestedSettings("headline", "visible", bool)}
      />
      {visible && (
        <>
          <Select
            options={fontFamilies}
            initialValue={fontFamily}
            label="Font Family"
            onChange={value =>
              updateNestedSettings("headline", "fontFamily", value)
            }
          />
          <Counter
            label="Frequency"
            value={frequency}
            onChange={value =>
              updateNestedSettings("headline", "frequency", value)
            }
          />
          <Counter
            label="Font Size"
            value={size}
            onChange={value => updateNestedSettings("headline", "size", value)}
          />

          <Counter
            label="Line Height"
            value={lineHeight}
            steps={0.25}
            onChange={value =>
              updateNestedSettings("headline", "lineHeight", value)
            }
          />
          <ColorPicker
            label="Color"
            value={color.rgb}
            onChange={value => updateNestedSettings("headline", "color", value)}
          />
          <Code
            code={`h2 {\r\n\tfont-size: ${size}px;\r\n\tline-height: ${lineHeight};\r\n\tcolor: ${color.rgba};\r\n}`}
          />
        </>
      )}
    </div>
  );
};

export default Headline;
