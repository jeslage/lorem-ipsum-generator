import React, { useContext } from "react";
import { SettingsContext, TextContext } from "../../../../contexts";

import Select from "../../../Select";
import Switch from "../../../Switch";

const General = () => {
  const { settings, updateSettings } = useContext(SettingsContext);
  const { textTypes } = useContext(TextContext);

  const { textType, removeSpecialCharacters } = settings;

  return (
    <>
      <Select
        options={textTypes}
        initialValue={textType}
        label="Genre"
        name="genre"
        iconBefore="textType"
        onChange={value => updateSettings("textType", value)}
      />

      <Switch
        label="Remove special characters"
        iconBefore="removeSpecialCharacters"
        isActive={removeSpecialCharacters}
        onChange={bool => updateSettings("removeSpecialCharacters", bool)}
      />
    </>
  );
};

export default General;
