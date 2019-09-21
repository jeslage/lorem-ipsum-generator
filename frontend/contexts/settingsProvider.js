import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import Router from "next/router";
import { ThemeProvider } from "styled-components";
import { Base64 } from "js-base64";

const buildQueryString = obj =>
  encodeURI(
    Object.keys(obj)
      .map(key => {
        const value =
          typeof obj[key] === "object" ? JSON.stringify(obj[key]) : obj[key];
        return `${key}=${value}`;
      })
      .join("&")
  );

export const SettingsContext = React.createContext();

const SettingsProvider = ({ queryConfig, children }) => {
  const defaultConfig = {
    paragraph: {
      count: 1,
      size: 12,
      lineHeight: 1.5,
      letterSpacing: 0
    },

    withHeadlines: false,
    headline: {
      frequency: 1,
      size: 30,
      lineHeight: 1.5
    },

    withSublines: false,
    subline: {
      size: 24,
      lineHeight: 1.5
    },

    numberOfCharacters: 500,
    removeSpecialCharacters: false
  };

  // Build initial settings state
  const [settings, setSettings] = useState({
    // Styling
    darkMode: queryConfig.darkMode || false,

    // Paragraph settings
    paragraph: queryConfig.paragraph || defaultConfig.paragraph,

    // Headline settings
    withHeadlines: queryConfig.withHeadlines || defaultConfig.withHeadlines,
    headline: queryConfig.headline || defaultConfig.headline,

    // Subline settings
    withSublines: queryConfig.withSublines || defaultConfig.withSublines,
    subline: queryConfig.subline || defaultConfig.subline,

    // General
    numberOfCharacters: queryConfig.numberOfCharacters
      ? parseFloat(queryConfig.numberOfCharacters)
      : defaultConfig.numberOfCharacters,
    removeSpecialCharacters: queryConfig.removeSpecialCharacters
      ? parseFloat(queryConfig.removeSpecialCharacters)
      : defaultConfig.removeSpecialCharacters
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
    setSettings(prev => ({ ...prev, ...defaultConfig }));
  };

  // Color theme settings
  const getColors = () =>
    settings.darkMode
      ? {
          primary: "#323232",
          secondary: " #fff"
        }
      : {
          primary: "#fff",
          secondary: " #323232"
        };

  return (
    <SettingsContext.Provider
      value={{ settings, updateSettings, updateNestedSettings, resetSettings }}
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
