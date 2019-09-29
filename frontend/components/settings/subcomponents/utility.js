import React, { useContext, useMemo } from "react";

import { SettingsContext } from "../../../contexts/settingsProvider";

import Switch from "../../switch/switch";
import SvgSprite from "../../svgSprite/svgSprite";

import DarkModeIcon from "../../../icons/darkMode.svg";
import TagsIcon from "../../../icons/tags.svg";

const Utility = () => {
  const { utility, updateUtility } = useContext(SettingsContext);

  const { darkMode, printTags } = utility;

  return useMemo(
    () => (
      <>
        <Switch
          iconBefore={<SvgSprite icon={DarkModeIcon} />}
          label="Dark mode"
          isActive={darkMode}
          onChange={bool => updateUtility("darkMode", bool)}
        />

        <Switch
          label="Print HTML tags"
          iconBefore={<SvgSprite icon={TagsIcon} />}
          isActive={printTags}
          onChange={bool => updateUtility("printTags", bool)}
        />
      </>
    ),
    [utility]
  );
};

export default Utility;
