import React, { useContext, useMemo } from "react";

import { PresetsContext } from "../../../contexts/presetsProvider";

import Button from "../../button/button";
import Preset from "../../preset/preset";

const Presets = () => {
  const { addPreset, presets } = useContext(PresetsContext);

  return useMemo(
    () => (
      <>
        {presets.length > 0 &&
          presets.map(preset => (
            <Preset preset={preset} key={preset.dateCreated} />
          ))}
        <Button onClick={addPreset}>
          {presets.length > 0 ? "Add another preset" : "Add your first preset"}
        </Button>
      </>
    ),
    [presets]
  );
};

export default Presets;
