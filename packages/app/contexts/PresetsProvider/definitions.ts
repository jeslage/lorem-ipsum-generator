import { SettingsObject } from "../SettingsProvider/definitions";

export type Preset = {
  dateCreated: number;
  settings: SettingsObject;
};

export interface PresetsContextProps {
  featuredPresets: any[] | undefined;
  presets: Preset[];
  likedPresets: string[];
  addPreset: (value?: string) => void;
  removePreset: (timestamp: number) => void;
  likePreset: (id: string, likes: number) => void;
  unlikePreset: (id: string, likes: number) => void;
}

export interface PresetsProviderProps {
  initialPresets?: string;
  initialLikedPresets?: string;
}
