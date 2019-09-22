import React, { useContext } from "react";

import { SettingsContext } from "../../../contexts/settingsProvider";
import { TextContext } from "../../../contexts/textProvider";

import Toggle from "../../toggle/toggle";
import Select from "../../select/select";
import Counter from "../../counter/counter";
import Textarea from "../../textarea/textarea";
import ColorPicker from "../../colorpicker/colorpicker";

const General = () => {
  const { settings, updateSettings, resetSettings } = useContext(
    SettingsContext
  );
  const { textTypes, texts } = useContext(TextContext);

  const {
    useCustomText,
    customText,
    textType,
    textWidth,
    backgroundColor,
    removeSpecialCharacters
  } = settings;

  return (
    <div>
      <button type="button" onClick={resetSettings}>
        Rest settings
      </button>

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

      <Toggle
        label="Remove special characters"
        isActive={removeSpecialCharacters}
        onChange={bool => updateSettings("removeSpecialCharacters", bool)}
      />
      <ColorPicker
        label="Background color"
        value={backgroundColor}
        onChange={value => updateSettings("backgroundColor", value)}
      />
      <Toggle
        label="Use custom text"
        isActive={useCustomText}
        onChange={bool => {
          if (customText === "") {
            updateSettings("customText", texts[textType].paragraph);
          }

          updateSettings("useCustomText", bool);
        }}
      />

      {useCustomText && (
        <Textarea
          label="Custom text"
          value={customText}
          onChange={value => updateSettings("customText", value)}
        />
      )}
    </div>
  );
};

export default General;
