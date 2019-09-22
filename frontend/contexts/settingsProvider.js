import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import Router from "next/router";
import { ThemeProvider } from "styled-components";
import { Base64 } from "js-base64";

import { fontFamilies } from "../config";

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
    useCustomText: false,
    customText: "",
    removeSpecialCharacters: false,
    paragraph: {
      fontFamily: "Arial, Helvetica, sans-serif",
      count: 1,
      numberOfCharacters: 1000,
      size: 20,
      lineHeight: 1.5,
      letterSpacing: 0,
      color: "#000"
    },
    headline: {
      fontFamily: "Arial, Helvetica, sans-serif",
      visible: false,
      frequency: 2,
      size: 30,
      lineHeight: 1.5,
      color: "#000"
    },
    subline: {
      fontFamily: "Arial, Helvetica, sans-serif",
      visible: false,
      size: 24,
      lineHeight: 1.5,
      color: "#000"
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
    // Paragraph settings
    paragraph: queryConfig.paragraph || defaultConfig.paragraph,
    // Headline settings
    headline: queryConfig.headline || defaultConfig.headline,
    // Subline settings
    subline: queryConfig.subline || defaultConfig.subline
  });

  const [utility, setUtility] = useState({
    // Styling
    darkMode: false,
    printTags: false
  });

  // Update route query params based on settings
  useEffect(() => {
    Router.replace(
      { pathname: "/", query: { ...settings } },
      `/?config=${Base64.encode(JSON.stringify(settings))}`,
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

  // Reset text settings
  const resetSettings = () => {
    setSettings(defaultConfig);
  };

  // Color theme settings
  const getColors = () =>
    utility.darkMode
      ? {
          primary: "#aaa",
          secondary: "#222",
          border: "#323232"
        }
      : {
          primary: "#323232",
          secondary: "#E0E0E0",
          border: "#C9C9C9"
        };

  return (
    <SettingsContext.Provider
      value={{
        settings,
        updateSettings,
        updateNestedSettings,
        resetSettings,
        fontFamilies,
        updateUtility,
        utility
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
