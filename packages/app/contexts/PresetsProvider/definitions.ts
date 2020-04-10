import { SettingsObject } from "../SettingsProvider/definitions";

export type Preset = {
  dateCreated: number;
  settings: SettingsObject;
};

export interface PresetsContextProps {
  presets: Preset[];
  addPreset: () => void;
  removePreset: (timestamp: number) => void;
}

export interface PresetsProviderProps {
  initialPresets?: string;
}
