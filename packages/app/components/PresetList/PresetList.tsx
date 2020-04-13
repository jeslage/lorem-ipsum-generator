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
          presets.map(preset => (
            <Preset
              settings={preset.settings}
              dateCreated={preset.dateCreated}
              onClick={() => {
                addToast("Settings updated", {
                  appearance: "success",
                  autoDismiss: true
                });
                updateAllSettings(preset.settings);
              }}
              options={[
                {
                  label: "Remove preset",
                  icon: "remove",
                  callback: () => {
                    addToast("Preset removed successfully", {
                      appearance: "success",
                      autoDismiss: true
                    });
                    removePreset(preset.dateCreated);
                  }
                }
              ]}
              key={preset.dateCreated}
            />
          ))
        ) : (
          <Button onClick={addPreset} iconBefore="plus">
            Add your first preset
          </Button>
        )}
      </div>

      {presets.length > 0 ? (
        <div className="presetList__bar">
          <Button onClick={addPreset} iconBefore="plus">
            Add another preset
          </Button>
        </div>
      ) : (
        ""
      )}
    </StyledPresetList>
  );
};

export default PresetList;
