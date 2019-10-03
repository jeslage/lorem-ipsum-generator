import React, { useContext } from "react";

import { PresetsContext } from "../../../../contexts/presetsProvider";

import Button from "../../../atoms/button/button";
import Preset from "../../../molecules/preset/preset";
import SvgSprite from "../../../atoms/svgSprite/svgSprite";

import CopyIcon from "../../../icons/copy.svg";

const Presets = () => {
  const { addPreset, presets } = useContext(PresetsContext);

  return (
    <>
      <div className="settings__wrapper">
        <div className="settings__presets">
          {presets.length > 0 ? (
            presets.map(preset => (
              <Preset preset={preset} key={preset.dateCreated} />
            ))
          ) : (
            <p className="settings__no-presets">
              No presets saved yet, add your first!
            </p>
          )}
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
