import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { useRouter } from "next/router";
import { ThemeProvider } from "styled-components";
import { Base64 } from "js-base64";

import { fontFamilies } from "../config/fontFamilies";

// const buildQueryString = obj =>
//   encodeURI(
//     Object.keys(obj)
//       .map(key => {
//         const value =
//           typeof obj[key] === "object" ? JSON.stringify(obj[key]) : obj[key];
//         return `${key}=${value}`;
//       })
//       .join("&")
//   );

export const SettingsContext = React.createContext();

const SettingsProvider = ({ queryConfig, children }) => {
  const defaultConfig = {
    textType: "loremIpsum",
    textWidth: 100,
    backgroundColor: "#fff",
    removeSpecialCharacters: false,
    lowercase: false,
    uppercase: false,
    paragraph: {
      fontFamily: fontFamilies[0].value,
      count: 6,
      numberOfCharacters: 1000,
      size: 20,
      lineHeight: 1.5,
      letterSpacing: 0,
      color: "#000",
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
      visible: false,
      numberOfCharacters: 50,
      frequency: 2,
      offset: 0,
      size: 30,
      lineHeight: 1.5,
      color: "#000",
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
      visible: false,
      numberOfCharacters: 50,
      frequency: 2,
      offset: 1,
      size: 24,
      lineHeight: 1.5,
      color: "#000",
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
      visible: false,
      frequency: 2,
      offset: 1,
      orderedList: false
    }
  };

  // Build initial settings state
  const [settings, setSettings] = useState({
    // General
    textType: queryConfig.textType || defaultConfig.textType,
    textWidth: queryConfig.textWidth || defaultConfig.textWidth,
    backgroundColor:
      queryConfig.backgroundColor || defaultConfig.backgroundColor,
    useCustomText: queryConfig.useCustomText || defaultConfig.useCustomText,
    customText: queryConfig.customText || defaultConfig.customText,
    removeSpecialCharacters:
      queryConfig.removeSpecialCharacters ||
      defaultConfig.removeSpecialCharacters,
    lowercase: queryConfig.lowercase || defaultConfig.lowercase,
    uppercase: queryConfig.uppercase || defaultConfig.uppercase,
    // Paragraph settings
    paragraph: queryConfig.paragraph || defaultConfig.paragraph,
    // Headline settings
    headline: queryConfig.headline || defaultConfig.headline,
    // Subline settings
    subline: queryConfig.subline || defaultConfig.subline,
    // List settings
    list: queryConfig.list || defaultConfig.list
  });

  const [utility, setUtility] = useState({
    // Styling
    darkMode: true,
    printTags: false,
    printInlineStyles: false
  });

  const router = useRouter();

  // Update route query params based on settings
  useEffect(() => {
    router &&
      router.replace(
        { pathname: "/", query: { ...settings } },
        `/?c=${Base64.encode(JSON.stringify(settings))}`,
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
  const updateSettings = (key, value) => {
    setSettings(prev => ({
      ...prev,
      [key]: value
    }));
  };

  // Update nested settings value
  const updateNestedSettings = (key, subKey, value) => {
    setSettings(prev => ({
      ...prev,
      [key]: {
        ...prev[key],
        [subKey]: value
      }
    }));
  };

  const updateNestedArray = (key, subKey, value, index) => {
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

  const removeNestedArray = (key, subKey, index) => {
    const newArray = settings[key][subKey].filter((item, i) => i !== index);

    setSettings(prev => ({
      ...prev,
      [key]: {
        ...prev[key],
        [subKey]: newArray.length === 0 ? ["Insert custom text"] : newArray
      }
    }));
  };

  const addNestedArray = (key, subKey) => {
    setSettings(prev => ({
      ...prev,
      [key]: {
        ...prev[key],
        [subKey]: [...settings[key][subKey], ""]
      }
    }));
  };

  // Update all settings
  const updateAllSettings = obj => {
    setSettings(obj);
  };

  // Reset text settings
  const resetSettings = () => {
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
          active: "#e8e8e8"
        };

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
      <ThemeProvider theme={{ ...settings, colors: getColors() }}>
        {children}
      </ThemeProvider>
    </SettingsContext.Provider>
  );
};

SettingsProvider.propTypes = {
  children: PropTypes.node.isRequired,
  queryConfig: PropTypes.shape()
};

SettingsProvider.defaultProps = {
  queryConfig: {}
};

export const SettingsConsumer = SettingsContext.Consumer;

export default SettingsProvider;
