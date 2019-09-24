import React, { useContext, useMemo } from "react";

import { SettingsContext } from "../../../contexts/settingsProvider";

import Toggle from "../../toggle/toggle";
import SvgSprite from "../../svgSprite/svgSprite";

import DarkModeIcon from "../../../icons/darkMode.svg";
import TagsIcon from "../../../icons/tags.svg";

const Utility = () => {
  const { utility, updateUtility } = useContext(SettingsContext);

  const { darkMode, printTags } = utility;

  return useMemo(
    () => (
      <>
        <Toggle
          iconBefore={<SvgSprite icon={DarkModeIcon} />}
          label="Dark mode"
          isActive={darkMode}
          onChange={bool => updateUtility("darkMode", bool)}
        />

        <Toggle
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
