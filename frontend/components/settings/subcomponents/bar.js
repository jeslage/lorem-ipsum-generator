import React, { useContext } from "react";

import { SettingsContext } from "../../../contexts/settingsProvider";

const Bar = () => {
  const { resetSettings } = useContext(SettingsContext);

  return (
    <>
      <button type="button" onClick={resetSettings}>
        Reset settings
      </button>
    </>
  );
};

export default Bar;
