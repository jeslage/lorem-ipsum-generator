import React, { useState, useEffect, useContext, FC } from "react";
import Cookies from "js-cookie";

import { encodeConfig, decodeConfig } from "../../helper";
import { useLikePresetMutation } from "../../graphql/mutations/likePreset.graphql";
import { useUnlikePresetMutation } from "../../graphql/mutations/unlikePreset.graphql";

import { SettingsContext } from "../SettingsProvider";

import {
  PresetsContextProps,
  PresetsProviderProps,
  Preset
} from "./definitions";

export const PresetsContext = React.createContext<PresetsContextProps>({
  presets: [],
  likedPresets: [],
  addPreset: () => {},
  removePreset: () => {},
  likePreset: () => {},
  unlikePreset: () => {}
});

const PresetsProvider: FC<PresetsProviderProps> = ({
  children,
  initialPresets,
  initialLikedPresets
}) => {
  const [presets, setPresets] = useState<Preset[]>(
    initialPresets ? decodeConfig(initialPresets) : []
  );

  const [likedPresets, setLikedPresets] = useState<string[]>(
    initialLikedPresets ? decodeConfig(initialLikedPresets) : []
  );

  const { settings } = useContext(SettingsContext);

  useEffect(() => {
    Cookies.set("presets", encodeConfig(presets));
  }, [presets]);

  useEffect(() => {
    Cookies.set("likedPresets", encodeConfig(likedPresets));
  }, [likedPresets]);

  const addPreset = () => {
    const obj = {
      dateCreated: Date.now(),
      settings
    };

    setPresets(prev => [obj, ...prev]);
  };

  const removePreset = timestamp => {
    const newPresets = presets.filter(
      preset => preset.dateCreated !== timestamp
    );

    setPresets(newPresets);
  };

  const [likePresetMutation] = useLikePresetMutation();
  const [unlikePresetMutation] = useUnlikePresetMutation();

  const likePreset = (id: string, likes: number): void => {
    likePresetMutation({
      variables: { id, likes }
    });
    setLikedPresets(prev => [...prev, id]);
  };

  const unlikePreset = (id: string, likes: number): void => {
    unlikePresetMutation({
      variables: { id, likes }
    });
    const newPresets = likedPresets.filter(i => i !== id);
    setLikedPresets(newPresets);
  };

  return (
    <PresetsContext.Provider
      value={{
        presets,
        addPreset,
        removePreset,
        likedPresets,
        likePreset,
        unlikePreset
      }}
    >
      {children}
    </PresetsContext.Provider>
  );
};

export const PresetsConsumer = PresetsContext.Consumer;

export default PresetsProvider;
