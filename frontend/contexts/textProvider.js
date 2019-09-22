import React, { useContext } from "react";
import PropTypes from "prop-types";

import { textTypes, texts } from "../config";

import { SettingsContext } from "./settingsProvider";

export const TextContext = React.createContext();

const TextProvider = ({ children }) => {
  const { settings, utility } = useContext(SettingsContext);
  const {
    paragraph: { numberOfCharacters },
    removeSpecialCharacters,
    textType,
    useCustomText,
    customText
  } = settings;
  const { printTags } = utility;

  const deleteSpecialCharacters = string =>
    string.replace(/[^a-zA-Z0-9.,-?!\s]/g, "");

  const getText = () => {
    const text = useCustomText ? customText : texts[textType].paragraph;
    const repeatNumber = Math.ceil(numberOfCharacters / text.length);

    let updatedText = text
      .repeat(repeatNumber)
      .substring(0, numberOfCharacters);

    if (removeSpecialCharacters) {
      updatedText = deleteSpecialCharacters(updatedText);
    }

    if (printTags) {
      updatedText = `<p>${updatedText}</p>`;
    }

    return updatedText;
  };

  const getHeadline = () => {
    let headline = texts[textType].headline;

    if (removeSpecialCharacters) {
      headline = deleteSpecialCharacters(headline);
    }

    if (printTags) {
      headline = `<h2>${headline}</h2>`;
    }

    return headline;
  };

  const getSubline = () => {
    let subline = texts[textType].subline;

    if (removeSpecialCharacters) {
      subline = deleteSpecialCharacters(subline);
    }

    if (printTags) {
      subline = `<h3>${subline}</h3>`;
    }

    return subline;
  };

  return (
    <TextContext.Provider
      value={{ textTypes, texts, getText, getHeadline, getSubline }}
    >
      {children}
    </TextContext.Provider>
  );
};

TextProvider.propTypes = {
  children: PropTypes.node.isRequired
};

TextProvider.defaultProps = {};

export const TextConsumer = TextContext.Consumer;

export default TextProvider;
