import React, { useState, useEffect, useContext, FC } from "react";
import Cookies from "js-cookie";

import { encodeConfig, decodeConfig } from "../../helper";

import { SettingsContext } from "../SettingsProvider";

import {
  PresetsContextProps,
  PresetsProviderProps,
  Preset
} from "./definitions";

export const PresetsContext = React.createContext<PresetsContextProps>({
  presets: [],
  addPreset: () => {},
  removePreset: () => {}
});

const PresetsProvider: FC<PresetsProviderProps> = ({
  children,
  initialPresets
}) => {
  const [presets, setPresets] = useState<Preset[]>(
    initialPresets ? decodeConfig(initialPresets) : []
  );

  const { settings } = useContext(SettingsContext);

  useEffect(() => {
    Cookies.set("presets", encodeConfig(presets));
  }, [presets]);

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

  return (
    <PresetsContext.Provider value={{ presets, addPreset, removePreset }}>
      {children}
    </PresetsContext.Provider>
  );
};

export const PresetsConsumer = PresetsContext.Consumer;

export default PresetsProvider;
