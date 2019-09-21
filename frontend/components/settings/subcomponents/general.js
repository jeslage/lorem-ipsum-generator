import React, { useContext } from "react";

import { SettingsContext } from "../../../contexts/settingsProvider";
import { TextContext } from "../../../contexts/textProvider";

import Toggle from "../../toggle/toggle";
import Select from "../../select/select";

const General = () => {
  const { settings, updateSettings, resetSettings } = useContext(
    SettingsContext
  );
  const { textTypes } = useContext(TextContext);

  const { textType, removeSpecialCharacters } = settings;

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

      <Toggle
        label="Remove special characters"
        isActive={removeSpecialCharacters}
        onChange={bool => updateSettings("removeSpecialCharacters", bool)}
      />
    </div>
  );
};

export default General;
