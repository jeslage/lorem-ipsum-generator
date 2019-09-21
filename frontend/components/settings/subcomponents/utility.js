import React, { useContext } from "react";

import { SettingsContext } from "../../../contexts/settingsProvider";

import Toggle from "../../toggle/toggle";

const Utility = () => {
  const { utility, updateUtility } = useContext(SettingsContext);

  const { darkMode, printTags } = utility;

  return (
    <div>
      <Toggle
        label="Dark mode"
        isActive={darkMode}
        onChange={bool => updateUtility("darkMode", bool)}
      />

      <Toggle
        label="Print HTML tags"
        isActive={printTags}
        onChange={bool => updateUtility("printTags", bool)}
      />
    </div>
  );
};

export default Utility;
