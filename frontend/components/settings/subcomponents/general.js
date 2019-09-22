import React, { useContext } from "react";

import { SettingsContext } from "../../../contexts/settingsProvider";
import { TextContext } from "../../../contexts/textProvider";

import Select from "../../select/select";
import Counter from "../../counter/counter";
import ColorPicker from "../../colorpicker/colorpicker";
import Button from "../../button/button";

const General = () => {
  const { settings, updateSettings, resetSettings } = useContext(
    SettingsContext
  );
  const { textTypes } = useContext(TextContext);

  const { textType, textWidth, backgroundColor } = settings;

  return (
    <div>
      <Select
        options={textTypes}
        initialValue={textType}
        label="Text Type"
        onChange={value => updateSettings("textType", value)}
      />

      <Counter
        label="Text width"
        min={10}
        max={100}
        value={textWidth}
        steps={5}
        suffix="%"
        onChange={value => updateSettings("textWidth", value)}
      />

      <ColorPicker
        label="Background color"
        value={backgroundColor}
        onChange={value => updateSettings("backgroundColor", value)}
      />

      <Button onClick={resetSettings}>Rest settings</Button>
    </div>
  );
};

export default General;
