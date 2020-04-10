import React, { useState, useEffect, useContext } from "react";

import { useRouter } from "next/router";
import { ThemeProvider } from "styled-components";

import { fontFamilies } from "../config/fontFamilies";
import { HistoryContext } from "./HistoryProvider";

import { encodeConfig } from "../helper";

export interface SettingsObject {
  textType: string;
  textWidth: number;
  backgroundColor: string;
  removeSpecialCharacters: boolean;
  textTransform: string;
  paragraph: {
    fontFamily: string;
    count: number;
    numberOfCharacters: number;
    size: number;
    lineHeight: number;
    letterSpacing: number;
    color: string;
    textAlign: string;
    margin: {
      top: number;
      right: number;
      bottom: number;
      left: number;
    };
    custom: boolean;
    customText: string[];
  };
  headline: {
    fontFamily: string;
    enabled: boolean;
    numberOfCharacters: number;
    frequency: number;
    offset: number;
    size: number;
    lineHeight: number;
    color: string;
    textAlign: string;
    margin: {
      top: number;
      right: number;
      bottom: number;
      left: number;
    };
    custom: boolean;
    customText: string[];
  };
  subline: {
    fontFamily: string;
    enabled: boolean;
    numberOfCharacters: number;
    frequency: number;
    offset: number;
    size: number;
    lineHeight: number;
    color: string;
    textAlign: string;
    margin: {
      top: number;
      right: number;
      bottom: number;
      left: number;
    };
    custom: boolean;
    customText: string[];
  };
  list: {
    enabled: boolean;
    frequency: number;
    offset: number;
    orderedList: boolean;
  };
}

export interface ThemeObject extends SettingsObject {
  colors: {
    color: string;
    background: string;
    border: string;
    hover: string;
    active: string;
  };
}

export interface UtilityObject {
  darkMode: boolean;
  printTags: boolean;
  printInlineStyles: boolean;
}

const defaultConfig: SettingsObject = {
  textType: "loremIpsum",
  textWidth: 100,
  backgroundColor: "#fff",
  removeSpecialCharacters: false,
  textTransform: "none",
  paragraph: {
    fontFamily: fontFamilies[0].value,
    count: 6,
    numberOfCharacters: 1000,
    size: 20,
    lineHeight: 1.5,
    letterSpacing: 0,
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

const defaultUtility: UtilityObject = {
  darkMode: true,
  printTags: false,
  printInlineStyles: false
};

type FontFamily = {
  label: string;
  value: string;
};

export interface SettingsContextProps {
  settings: SettingsObject;
  fontFamilies: FontFamily[];
  utility: UtilityObject;
  addNestedArray: any;
  updateSettings: any;
  updateNestedSettings: any;
  updateAllSettings: any;
  updateUtility: any;
  updateNestedArray: any;
  removeNestedArray: any;
  resetSettings: any;
}

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

const SettingsProvider = ({ queryConfig, children }) => {
  const { addToHistory } = useContext(HistoryContext);

  // Build initial settings state
  const [settings, setSettings] = useState<SettingsObject>({
    // General
    textType: queryConfig.textType || defaultConfig.textType,
    textWidth: queryConfig.textWidth || defaultConfig.textWidth,
    textTransform: queryConfig.textTransform || defaultConfig.textTransform,

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
  });

  const [utility, setUtility] = useState(defaultUtility);

  const router = useRouter();

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
    router &&
      router.replace(
        { pathname: "/", query: { settings: encodeConfig(settings) } },
        `/?c=${encodeConfig(settings)}`,
        {
          shallow: true
        }
      );
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
    setSettings(prev => {
      const newSettings = { ...prev, [key]: value };

      if (changeHistory)
        addToHistory({
          parentKey: null,
          key,
          value,
          settings: encodeConfig(newSettings)
        });

      return newSettings;
    });
  };

  // Update nested settings value
  const updateNestedSettings = (
    key: string,
    subKey: string,
    value: string | number,
    changeHistory = true
  ) => {
    setSettings(prev => {
      const newSettings = {
        ...prev,
        [key]: { ...prev[key], [subKey]: value }
      };

      if (changeHistory)
        addToHistory({
          parentKey: key,
          key: subKey,
          value,
          settings: encodeConfig(newSettings)
        });

      return newSettings;
    });
  };

  const updateNestedArray = (
    key: string,
    subKey: string,
    value: string | number,
    index: number
  ) => {
    const updatedArray = settings[key][subKey].slice(0);
    updatedArray[index] = value;
    setSettings(prev => ({
      ...prev,
      [key]: {
        ...prev[key],
        [subKey]: updatedArray
      }
    }));
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
    if (changeHistory)
      addToHistory({
        parentKey: null,
        key: "allSettings",
        value: null,
        settings: encodeConfig(obj)
      });

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

  // Color theme settings
  const getColors = () =>
    utility.darkMode
      ? {
          color: "#c9c9c9",
          background: "#202020",
          border: "#808080",
          hover: "#181818",
          active: "#080808"
        }
      : {
          color: "#323232",
          background: "#E0E0E0",
          border: "#3b3b3b",
          hover: "#d6d6d6",
          active: "#c8c8c8"
        };

  const theme: ThemeObject = { ...settings, colors: getColors() };

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
