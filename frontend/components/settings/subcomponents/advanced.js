import React, { useContext } from "react";

import { SettingsContext } from "../../../contexts/settingsProvider";
import { TextContext } from "../../../contexts/textProvider";

import Toggle from "../../toggle/toggle";
import Textarea from "../../textarea/textarea";

const Advanced = () => {
  const { settings, updateSettings } = useContext(SettingsContext);
  const { texts } = useContext(TextContext);

  const {
    useCustomText,
    customText,
    textType,
    removeSpecialCharacters
  } = settings;

  return (
    <div>
      <Toggle
        label="Remove special characters"
        isActive={removeSpecialCharacters}
        onChange={bool => updateSettings("removeSpecialCharacters", bool)}
      />

      <Toggle
        label="Custom text"
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
          value={customText}
          onChange={value => updateSettings("customText", value)}
        />
      )}
    </div>
  );
};

export default Advanced;
