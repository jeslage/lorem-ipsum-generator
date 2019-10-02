import React, { useContext } from "react";

import { PresetsContext } from "../../../contexts/presetsProvider";

import Button from "../../button/button";
import Preset from "../../preset/preset";
import SvgSprite from "../../svgSprite/svgSprite";

import CopyIcon from "../../../icons/copy.svg";

const Presets = () => {
  const { addPreset, presets } = useContext(PresetsContext);

  return (
    <>
      <div className="settings__wrapper">
        <div className="settings__presets">
          {presets.length > 0 &&
            presets.map(preset => (
              <Preset preset={preset} key={preset.dateCreated} />
            ))}
        </div>
      </div>

      <div className="settings__add-preset">
        <Button onClick={addPreset}>
          <SvgSprite icon={CopyIcon} />
          {presets.length > 0 ? "Add another preset" : "Add your first preset"}
        </Button>
      </div>
    </>
  );
};

export default Presets;
