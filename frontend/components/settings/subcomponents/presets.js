import React, { useContext } from "react";

import { PresetsContext } from "../../../contexts/presetsProvider";

import Button from "../../button/button";
import { SettingsContext } from "../../../contexts/settingsProvider";
import Preset from "../../preset/preset";

const Presets = () => {
  const { addPreset, presets } = useContext(PresetsContext);

  return (
    <div>
      {presets.map(preset => (
        <Preset preset={preset} key={preset.dateCreated} />
      ))}
      <Button onClick={addPreset}>Add preset</Button>
    </div>
  );
};

export default Presets;
