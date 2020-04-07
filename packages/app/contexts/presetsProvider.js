import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import Cookies from "js-cookie";

import { encodeConfig, decodeConfig } from "@helper";

import { SettingsContext } from "./settingsProvider";

export const PresetsContext = React.createContext();

const PresetsProvider = ({ children, initialPresets }) => {
  const [presets, setPresets] = useState(
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

PresetsProvider.propTypes = {
  children: PropTypes.node.isRequired
};

PresetsProvider.defaultProps = {};

export const PresetsConsumer = PresetsContext.Consumer;

export default PresetsProvider;
