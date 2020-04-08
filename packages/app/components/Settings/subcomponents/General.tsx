import React, { useContext, useMemo } from "react";

import { TextContext, SettingsContext } from "../../../contexts";

import Select from "../../Select";
import Counter from "../../Counter";
import ColorPicker from "../../ColorPicker";
import Switch from "../../Switch";
import RadioGroup from "../../RadioGroup";

const General = () => {
  const { settings, updateSettings } = useContext(SettingsContext);
  const { textTypes } = useContext(TextContext);

  const {
    textType,
    textWidth,
    textTransform,
    backgroundColor,
    useCustomText,
    customText,
    removeSpecialCharacters
  } = settings;

  return useMemo(
    () => (
      <>
        <Select
          options={textTypes}
          initialValue={textType}
          label="Genre"
          name="genre"
          iconBefore="color"
          onChange={value => updateSettings("textType", value)}
        />

        <hr />

        <Counter
          label="Width"
          min={10}
          max={100}
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

        <Switch
          label="Remove special characters"
          iconBefore="color"
          isActive={removeSpecialCharacters}
          onChange={bool => updateSettings("removeSpecialCharacters", bool)}
        />

        <RadioGroup
          label="Text transform"
          value={textTransform}
          name="general-textTransform"
          iconBefore="color"
          options={[
            { value: "none", icon: "color" },
            { value: "uppercase", icon: "color" },
            { value: "lowercase", icon: "color" }
          ]}
          onChange={value => updateSettings("textTransform", value)}
        />
      </>
    ),
    [
      textType,
      textWidth,
      textTransform,
      backgroundColor,
      useCustomText,
      customText,
      removeSpecialCharacters
    ]
  );
};

export default General;
