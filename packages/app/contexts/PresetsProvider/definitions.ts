import { SettingsObject } from "../SettingsProvider/definitions";

export type Preset = {
  dateCreated: number;
  settings: SettingsObject;
};

export interface PresetsContextProps {
  presets: Preset[];
  likedPresets: string[];
  addPreset: () => void;
  removePreset: (timestamp: number) => void;
  likePreset: (id: string, likes: number) => void;
  unlikePreset: (id: string, likes: number) => void;
}

export interface PresetsProviderProps {
  initialPresets?: string;
  initialLikedPresets?: string;
}
