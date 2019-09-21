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
    textType: "loremIpsum",
    removeSpecialCharacters: false,
    paragraph: {
      fontFamily: "Arial, Helvetica, sans-serif",
      count: 1,
      numberOfCharacters: 500,
      size: 20,
      lineHeight: 1.5,
      letterSpacing: 0
    },
    headline: {
      fontFamily: "Arial, Helvetica, sans-serif",
      visible: false,
      frequency: 1,
      size: 30,
      lineHeight: 1.5
    },
    subline: {
      fontFamily: "Arial, Helvetica, sans-serif",
      visible: false,
      size: 24,
      lineHeight: 1.5
    }
  };

  // Build initial settings state
  const [settings, setSettings] = useState({
    // General
    textType: queryConfig.textType || defaultConfig.textType,
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

  // Font families
  const fontFamilies = [
    { label: "Arial, Helvetica", value: "Arial, Helvetica, sans-serif" },
    { label: "Arial Black", value: "'Arial Black', Gadget, sans-serif" },
    { label: "Comic Sans", value: "'Comic Sans MS', cursive, sans-serif" },
    { label: "Impact, Charcoal", value: "Impact, Charcoal, sans-serif" },
    {
      label: "Lucida Sans, Lucida Grande",
      value: "'Lucida Sans Unicode', 'Lucida Grande', sans-serif"
    },
    { label: "Tahoma, Geneva", value: "Tahoma, Geneva, sans-serif" },
    {
      label: "Trebuchet MS, Helvetica",
      value: "'Trebuchet MS', Helvetica, sans-serif"
    },
    { label: "Verdana, Geneva", value: "Verdana, Geneva, sans-serif" },
    { label: "Georgia", value: "Georgia, serif" },
    {
      label: "Palatino, Book Antiqua",
      value: "'Palatino Linotype', 'Book Antiqua', Palatino, serif"
    },
    {
      label: "Times New Roman, Times",
      value: "'Times New Roman', Times, serif"
    },
    {
      label: "Courier New, Courier",
      value: "'Courier New', Courier, monospace"
    },
    {
      label: "Lucida Console, Monaco",
      value: "'Lucida Console', Monaco, monospace"
    }
  ];

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
          primary: "#323232",
          secondary: "#aaa",
          tertiary: "#222"
        }
      : {
          primary: "#fff",
          secondary: "#323232",
          tertiary: "#f4f4f4"
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
