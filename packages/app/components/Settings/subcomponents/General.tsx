import React, { useContext, useMemo } from "react";
import { SettingsContext, TextContext } from "../../../contexts";

import ColorPicker from "../../ColorPicker";
import Counter from "../../Counter";
import RadioGroup from "../../RadioGroup";
import Select from "../../Select";
import Switch from "../../Switch";

const General = () => {
  const { settings, updateSettings } = useContext(SettingsContext);
  const { textTypes } = useContext(TextContext);

  const {
    textType,
    textWidth,
    textTransform,
    backgroundColor,
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
          iconBefore="textType"
          onChange={value => updateSettings("textType", value)}
        />

        <hr />

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

        <Switch
          label="Remove special characters"
          iconBefore="removeSpecialCharacters"
          isActive={removeSpecialCharacters}
          onChange={bool => updateSettings("removeSpecialCharacters", bool)}
        />

        <RadioGroup
          label="Text transform"
          value={textTransform}
          name="general-textTransform"
          iconBefore="mixedcase"
          options={[
            { value: "none", icon: "mixedcase" },
            { value: "uppercase", icon: "uppercase" },
            { value: "lowercase", icon: "lowercase" }
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
      removeSpecialCharacters
    ]
  );
};

export default General;
