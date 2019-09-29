import React, { useContext, useMemo } from "react";

import { SettingsContext } from "../../../contexts/settingsProvider";
import { TextContext } from "../../../contexts/textProvider";

import Select from "../../select/select";
import Counter from "../../counter/counter";
import ColorPicker from "../../colorpicker/colorpicker";
import Switch from "../../switch/switch";
import SvgSprite from "../../svgSprite/svgSprite";
import Textarea from "../../textarea/textarea";

import TextWidthIcon from "../../../icons/textWidth.svg";
import UppercaseIcon from "../../../icons/uppercase.svg";
import LowercaseIcon from "../../../icons/lowercase.svg";
import ColorIcon from "../../../icons/color.svg";
import TextTypeIcon from "../../../icons/textType.svg";
import RemoveSpecialCharactersIcon from "../../../icons/removeSpecialCharacters.svg";
import Button from "../../button/button";

const General = () => {
  const { settings, updateSettings } = useContext(SettingsContext);
  const { textTypes } = useContext(TextContext);

  const {
    textType,
    textWidth,
    backgroundColor,
    lowercase,
    uppercase,
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
          iconBefore={<SvgSprite icon={TextTypeIcon} />}
          onChange={value => updateSettings("textType", value)}
        />

        <hr />

        <Counter
          label="Width"
          iconBefore={<SvgSprite icon={TextWidthIcon} />}
          min={10}
          max={100}
          value={textWidth}
          steps={5}
          suffix="%"
          onChange={value => updateSettings("textWidth", value)}
        />

        <ColorPicker
          label="Background color"
          iconBefore={<SvgSprite icon={ColorIcon} />}
          value={backgroundColor}
          onChange={value => updateSettings("backgroundColor", value)}
        />

        <Switch
          label="Lowercase"
          iconBefore={<SvgSprite icon={LowercaseIcon} />}
          isActive={lowercase}
          onChange={bool => {
            updateSettings("lowercase", bool);
            if (bool) {
              updateSettings("uppercase", false);
            }
          }}
        />

        <Switch
          label="Uppercase"
          iconBefore={<SvgSprite icon={UppercaseIcon} />}
          isActive={uppercase}
          onChange={bool => {
            updateSettings("uppercase", bool);
            if (bool) {
              updateSettings("lowercase", false);
            }
          }}
        />
        <Switch
          label="Remove special characters"
          iconBefore={<SvgSprite icon={RemoveSpecialCharactersIcon} />}
          isActive={removeSpecialCharacters}
          onChange={bool => updateSettings("removeSpecialCharacters", bool)}
        />
      </>
    ),
    [
      textType,
      textWidth,
      backgroundColor,
      lowercase,
      uppercase,
      useCustomText,
      customText,
      removeSpecialCharacters
    ]
  );
};

export default General;
