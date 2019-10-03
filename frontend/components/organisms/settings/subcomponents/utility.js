import React, { useContext, useMemo } from "react";

import { SettingsContext } from "../../../../contexts/settingsProvider";

import Switch from "../../../atoms/switch/switch";
import SvgSprite from "../../../atoms/svgSprite/svgSprite";

import DarkModeIcon from "../../../icons/darkMode.svg";
import TagsIcon from "../../../icons/tags.svg";
import StylingIcon from "../../../icons/css.svg";

const Utility = () => {
  const { utility, updateUtility } = useContext(SettingsContext);

  const { darkMode, printTags, printInlineStyles } = utility;

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
          onChange={bool => {
            updateUtility("printTags", bool);
            if (!bool) {
              updateUtility("printInlineStyles", bool);
            }
          }}
        />

        {printTags && (
          <Switch
            label="Print Inline Styles"
            iconBefore={<SvgSprite icon={StylingIcon} />}
            isActive={printInlineStyles}
            onChange={bool => updateUtility("printInlineStyles", bool)}
          />
        )}
      </>
    ),
    [utility]
  );
};

export default Utility;
