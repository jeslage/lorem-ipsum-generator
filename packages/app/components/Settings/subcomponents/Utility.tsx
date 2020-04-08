import React, { useContext } from "react";

import { SettingsContext } from "../../../contexts";

import Switch from "../../Switch";
import CreateHtmlButton from "../../CreateHtmlButton";

const Utility = () => {
  const { utility, updateUtility } = useContext(SettingsContext);

  const { printTags, printInlineStyles } = utility;

  return (
    <>
      <Switch
        label="Print HTML tags"
        iconBefore="color"
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
          iconBefore="color"
          isActive={printInlineStyles}
          onChange={bool => updateUtility("printInlineStyles", bool)}
        />
      )}
      <CreateHtmlButton />
    </>
  );
};

export default Utility;
