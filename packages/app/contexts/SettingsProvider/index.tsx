import React, { useState, useEffect, useContext, FC } from "react";

import { useRouter } from "next/router";
import { ThemeProvider } from "styled-components";

import { fontFamilies } from "../../config/fontFamilies";
import { HistoryContext } from "../HistoryProvider";

import { encodeConfig } from "../../helper";
import {
  SettingsObject,
  ThemeObject,
  UtilityObject,
  SettingsContextProps,
  SettingsProviderProps
} from "./definitions";

import { colors } from "../../styles/settings";

export const defaultConfig: SettingsObject = {
  textType: "loremIpsum",
  textWidth: 100,
  backgroundColor: "#fff",
  removeSpecialCharacters: false,
  paragraph: {
    fontFamily: fontFamilies[0].value,
    count: 6,
    numberOfCharacters: 1000,
    size: 20,
    lineHeight: 1.5,
    letterSpacing: 0,
    textTransform: "none",
    color: "#000",
    textAlign: "left",
    margin: {
      top: 20,
      right: 0,
      bottom: 20,
      left: 0
    },
    custom: false,
    customText: []
  },
  headline: {
    fontFamily: fontFamilies[0].value,
    enabled: false,
    numberOfCharacters: 50,
    frequency: 2,
    offset: 0,
    size: 30,
    lineHeight: 1.5,
    textTransform: "none",
    color: "#000",
    textAlign: "left",
    margin: {
      top: 20,
      right: 0,
      bottom: 20,
      left: 0
    },
    custom: false,
    customText: []
  },
  subline: {
    fontFamily: fontFamilies[0].value,
    enabled: false,
    numberOfCharacters: 50,
    frequency: 2,
    offset: 1,
    size: 24,
    lineHeight: 1.5,
    textTransform: "none",
    color: "#000",
    textAlign: "left",
    margin: {
      top: 20,
      right: 0,
      bottom: 20,
      left: 0
    },
    custom: false,
    customText: []
  },
  list: {
    enabled: false,
    frequency: 2,
    offset: 1,
    orderedList: false
  }
};

export const getTheme = (settings?: SettingsObject): ThemeObject => ({
  ...(settings || defaultConfig),
  colors
});

const defaultUtility: UtilityObject = {
  printTags: false,
  printInlineStyles: false
};

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

  // Build initial settings state
  const [settings, setSettings] = useState<SettingsObject>(
    queryConfig
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
  );

  const [utility, setUtility] = useState(defaultUtility);

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
  const updateUtility = (key, value) => {
    setUtility(prev => ({
      ...prev,
      [key]: value
    }));
  };

  // Update settings value
  const updateSettings = (
    key: string,
    value: string | number,
    changeHistory = true
  ) => {
    const newSettings = { ...settings, [key]: value };

    setSettings(newSettings);

    if (changeHistory) {
      addToHistory({
        parentKey: null,
        key,
        value,
        settings: encodeConfig(newSettings)
      });
    }
  };

  // Update nested settings value
  const updateNestedSettings = (
    key: string,
    subKey: string,
    value: string | number,
    changeHistory = true
  ) => {
    const newSettings = {
      ...settings,
      [key]: { ...settings[key], [subKey]: value }
    };

    setSettings(newSettings);

    if (changeHistory) {
      addToHistory({
        parentKey: key,
        key: subKey,
        value,
        settings: encodeConfig(newSettings)
      });
    }
  };

  const updateNestedArray = async (
    key: string,
    subKey: string,
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

    setSettings(newSettings);

    if (changeHistory) {
      addToHistory({
        parentKey: key,
        key: subKey,
        value: null,
        settings: encodeConfig(newSettings)
      });
    }
  };

  const removeNestedArray = (key: string, subKey: string, index: number) => {
    const newArray = settings[key][subKey].filter((_, i) => i !== index);

    setSettings(prev => ({
      ...prev,
      [key]: {
        ...prev[key],
        [subKey]: newArray.length === 0 ? ["Insert custom text"] : newArray
      }
    }));
  };

  const addNestedArray = (key: string, subKey: string) => {
    setSettings(prev => ({
      ...prev,
      [key]: {
        ...prev[key],
        [subKey]: [...settings[key][subKey], ""]
      }
    }));
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

    setSettings(obj);
  };

  // Reset text settings
  const resetSettings = () => {
    addToHistory({
      parentKey: null,
      key: "resetSettings",
      value: null,
      settings: encodeConfig(defaultConfig)
    });

    setSettings(defaultConfig);
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
