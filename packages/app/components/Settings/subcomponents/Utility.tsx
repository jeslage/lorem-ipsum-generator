import React, { useContext } from "react";

import CreateHtmlButton from "../../CreateHtmlButton";
import { SettingsContext } from "../../../contexts";
import Switch from "../../Switch";

const Utility = () => {
  const { utility, updateUtility } = useContext(SettingsContext);

  const { printTags, printInlineStyles } = utility;

  return (
    <>
      <Switch
        label="Print HTML tags"
        iconBefore="tags"
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
          iconBefore="css"
          isActive={printInlineStyles}
          onChange={bool => updateUtility("printInlineStyles", bool)}
        />
      )}
      <CreateHtmlButton />
    </>
  );
};

export default Utility;
