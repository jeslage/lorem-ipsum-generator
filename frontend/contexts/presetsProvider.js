import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Base64 } from "js-base64";
import Cookies from "js-cookie";

import { SettingsContext } from "./settingsProvider";

export const PresetsContext = React.createContext();

const PresetsProvider = ({ children, initialPresets }) => {
  const [presets, setPresets] = useState(
    initialPresets ? JSON.parse(Base64.decode(initialPresets)) : []
  );
  const { settings } = useContext(SettingsContext);

  useEffect(() => {
    Cookies.set("presets", Base64.encode(JSON.stringify(presets)));
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
