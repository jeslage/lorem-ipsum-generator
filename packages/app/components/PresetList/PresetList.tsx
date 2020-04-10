import React, { useContext } from "react";
import { useToasts } from "react-toast-notifications";

import { PresetsContext, SettingsContext } from "../../contexts";

import Button from "../Button";
import Preset from "../Preset";

import StyledPresetList from "./PresetList.style";

const PresetList = () => {
  const { addToast } = useToasts();
  const { updateAllSettings } = useContext(SettingsContext);
  const { addPreset, removePreset, presets } = useContext(PresetsContext);

  return (
    <StyledPresetList>
      <div className="presetList__presets">
        {presets.length > 0 ? (
          <>
            <p>Drag preset on the left side</p>
            {presets.map(preset => (
              <Preset
                settings={preset.settings}
                dateCreated={preset.dateCreated}
                onDrop={() => {
                  addToast("Settings updated", {
                    appearance: "success",
                    autoDismiss: true
                  });
                  updateAllSettings(preset.settings);
                }}
                onRemove={() => {
                  addToast("Preset removed successfully", {
                    appearance: "success",
                    autoDismiss: true
                  });
                  removePreset(preset.dateCreated);
                }}
                key={preset.dateCreated}
              />
            ))}
          </>
        ) : (
          <p>No presets saved yet, add your first!</p>
        )}
      </div>

      <div className="presetList__bar">
        <Button onClick={addPreset} iconBefore="copy">
          {presets.length > 0 ? "Add another preset" : "Add your first preset"}
        </Button>
      </div>
    </StyledPresetList>
  );
};

export default PresetList;
