import React, { useContext } from "react";
import { SettingsContext } from "../../../../contexts";

import ColorPicker from "../../../ColorPicker";
import Counter from "../../../Counter";

const General = () => {
  const { settings, updateSettings } = useContext(SettingsContext);

  const { textWidth, backgroundColor } = settings;

  return (
    <>
      <Counter
        label="Width"
        min={10}
        max={100}
        iconBefore="textWidth"
        value={textWidth}
        steps={5}
        suffix="%"
        onChange={value => updateSettings("textWidth", value)}
      />

      <ColorPicker
        label="Background color"
        iconBefore="color"
        value={backgroundColor}
        onChange={value => updateSettings("backgroundColor", value)}
      />
    </>
  );
};

export default General;
