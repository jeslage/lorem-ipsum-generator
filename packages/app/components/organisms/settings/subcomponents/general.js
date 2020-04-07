import React, { useContext, useMemo } from "react";

import { SettingsContext } from "@contexts/settingsProvider";
import { TextContext } from "@contexts/textProvider";

import Select from "@atoms/select/select";
import Counter from "@atoms/Counter";
import ColorPicker from "@atoms/ColorPicker";
import Switch from "@atoms/switch/switch";
import RadioGroup from "@atoms/radioGroup/radioGroup";

import UppercaseIcon from "@icons/uppercase.svg";
import LowercaseIcon from "@icons/lowercase.svg";
import ColorIcon from "@icons/color.svg";
import TextTypeIcon from "@icons/textType.svg";
import RemoveSpecialCharactersIcon from "@icons/removeSpecialCharacters.svg";
import MixedcaseIcon from "@icons/mixedcase.svg";

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
          iconBefore={TextTypeIcon}
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
          value={backgroundColor}
          onChange={value => updateSettings("backgroundColor", value)}
        />

        <Switch
          label="Remove special characters"
          iconBefore={RemoveSpecialCharactersIcon}
          isActive={removeSpecialCharacters}
          onChange={bool => updateSettings("removeSpecialCharacters", bool)}
        />

        <RadioGroup
          label="Text transform"
          value={textTransform}
          name="general-textTransform"
          iconBefore={MixedcaseIcon}
          options={[
            { value: "none", icon: MixedcaseIcon },
            { value: "uppercase", icon: UppercaseIcon },
            { value: "lowercase", icon: LowercaseIcon }
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
