import React, { useEffect, useContext, FC, useReducer } from "react";

import { useRouter } from "next/router";
import { ThemeProvider } from "styled-components";

import { HistoryContext } from "../HistoryProvider";

import { encodeConfig } from "../../helper";
import {
  SettingsObject,
  UtilityObject,
  SettingsContextProps,
  SettingsProviderProps,
  NestedSettingsObjects,
  NestedSettingsObjectSubKey
} from "./definitions";

import { reducer } from "./reducer";

import { getTheme } from "../../styles/theme";
import { defaultConfig, defaultUtility, fontFamilies } from "./config";

const defaultContextProps: SettingsContextProps = {
  utility: defaultUtility,
  settings: defaultConfig,
  fontFamilies: [],
  addNestedArray: () => {},
  updateSettings: () => {},
  updateNestedSettings: () => {},
  updateAllSettings: () => {},
  updateUtility: () => {},
  updateNestedArray: () => {},
  removeNestedArray: () => {},
  resetSettings: () => {}
};

export const SettingsContext = React.createContext<SettingsContextProps>(
  defaultContextProps
);

const SettingsProvider: FC<SettingsProviderProps> = ({
  queryConfig,
  children
}) => {
  const router = useRouter();
  const { addToHistory } = useContext(HistoryContext);

  const [{ settings, utility }, dispatch] = useReducer(reducer, {
    utility: defaultUtility,
    settings: queryConfig
      ? {
          // General
          textType: queryConfig.textType || defaultConfig.textType,
          textWidth: queryConfig.textWidth || defaultConfig.textWidth,

          backgroundColor:
            queryConfig.backgroundColor || defaultConfig.backgroundColor,
          removeSpecialCharacters:
            queryConfig.removeSpecialCharacters ||
            defaultConfig.removeSpecialCharacters,

          // Paragraph settings
          paragraph: queryConfig.paragraph || defaultConfig.paragraph,
          // Headline settings
          headline: queryConfig.headline || defaultConfig.headline,
          // Subline settings
          subline: queryConfig.subline || defaultConfig.subline,
          // List settings
          list: queryConfig.list || defaultConfig.list
        }
      : defaultConfig
  });

  useEffect(() => {
    // Add initial settings to history object
    addToHistory({
      parentKey: null,
      key: "initialSettings",
      value: null,
      settings: encodeConfig(settings)
    });
  }, []);

  // Update route query params based on settings
  useEffect(() => {
    if (router && router.pathname === "/") {
      router.replace(
        { pathname: "/", query: { settings: encodeConfig(settings) } },
        `/?c=${encodeConfig(settings)}`,
        {
          shallow: true
        }
      );
    }
  }, [settings]);

  // Update utility value
  const updateUtility = (key: keyof UtilityObject, value: boolean) => {
    return dispatch({ type: "UPDATE_UTILITY", payload: { key, value } });
  };

  // Update settings value
  const updateSettings = (
    key: keyof SettingsObject,
    value: string | number,
    changeHistory = true
  ) => {
    const newSettings = { ...settings, [key]: value };

    if (changeHistory) {
      addToHistory({
        parentKey: null,
        key,
        value,
        settings: encodeConfig(newSettings)
      });
    }

    return dispatch({
      type: "UPDATE_SETTINGS",
      payload: { settings: newSettings }
    });
  };

  // Update nested settings value
  const updateNestedSettings = (
    key: keyof NestedSettingsObjects,
    subKey: NestedSettingsObjectSubKey,
    value: string | number,
    changeHistory = true
  ) => {
    const newSettings = {
      ...settings,
      [key]: { ...settings[key], [subKey]: value }
    };

    if (changeHistory) {
      addToHistory({
        parentKey: key,
        key: subKey,
        value,
        settings: encodeConfig(newSettings)
      });
    }

    return dispatch({
      type: "UPDATE_SETTINGS",
      payload: { settings: newSettings }
    });
  };

  const updateNestedArray = async (
    key: keyof NestedSettingsObjects,
    subKey: NestedSettingsObjectSubKey,
    value: string | number,
    index: number,
    changeHistory = true
  ) => {
    const updatedArray = settings[key][subKey].slice(0);
    updatedArray[index] = value;

    const newSettings = {
      ...settings,
      [key]: {
        ...settings[key],
        [subKey]: updatedArray
      }
    };

    if (changeHistory) {
      addToHistory({
        parentKey: key,
        key: subKey,
        value: null,
        settings: encodeConfig(newSettings)
      });
    }

    return dispatch({
      type: "UPDATE_SETTINGS",
      payload: { settings: newSettings }
    });
  };

  const removeNestedArray = (
    key: keyof NestedSettingsObjects,
    subKey: NestedSettingsObjectSubKey,
    index: number
  ) => {
    return dispatch({
      type: "REMOVE_NESTED_ARRAY",
      payload: { key, subKey, index }
    });
  };

  const addNestedArray = (
    key: keyof NestedSettingsObjects,
    subKey: NestedSettingsObjectSubKey
  ) => {
    return dispatch({ type: "ADD_NESTED_ARRAY", payload: { key, subKey } });
  };

  // Update all settings
  const updateAllSettings = (obj: SettingsObject, changeHistory = true) => {
    if (changeHistory) {
      addToHistory({
        parentKey: null,
        key: "allSettings",
        value: null,
        settings: encodeConfig(obj)
      });
    }

    return dispatch({ type: "UPDATE_SETTINGS", payload: { settings: obj } });
  };

  // Reset text settings
  const resetSettings = () => {
    addToHistory({
      parentKey: null,
      key: "resetSettings",
      value: null,
      settings: encodeConfig(defaultConfig)
    });

    return dispatch({
      type: "UPDATE_SETTINGS",
      payload: { settings: defaultConfig }
    });
  };

  const theme = getTheme(settings);

  return (
    <SettingsContext.Provider
      value={{
        settings,
        updateSettings,
        updateNestedSettings,
        updateAllSettings,
        resetSettings,
        fontFamilies,
        updateUtility,
        utility,
        updateNestedArray,
        removeNestedArray,
        addNestedArray
      }}
    >
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </SettingsContext.Provider>
  );
};

export const SettingsConsumer = SettingsContext.Consumer;

export default SettingsProvider;
