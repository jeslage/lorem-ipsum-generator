import React, { useContext } from "react";

import { SettingsContext } from "@contexts/settingsProvider";

import Switch from "@components/Switch";
import CreateHtmlButton from "@molecules/createHtmlButton/createHtmlButton";

import TagsIcon from "@icons/tags.svg";
import StylingIcon from "@icons/css.svg";

const Utility = () => {
  const { utility, updateUtility } = useContext(SettingsContext);

  const { printTags, printInlineStyles } = utility;

  return (
    <>
      <Switch
        label="Print HTML tags"
        iconBefore={TagsIcon}
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
          iconBefore={StylingIcon}
          isActive={printInlineStyles}
          onChange={bool => updateUtility("printInlineStyles", bool)}
        />
      )}
      <CreateHtmlButton />
    </>
  );
};

export default Utility;
