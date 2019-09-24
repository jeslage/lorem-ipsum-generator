import React, { useContext } from "react";
import PropTypes from "prop-types";

import { textTypes, texts } from "../config";

import { SettingsContext } from "./settingsProvider";

export const TextContext = React.createContext();

const getRandomValue = arr => arr[Math.floor(Math.random() * arr.length)];

const TextProvider = ({ children }) => {
  const { settings, utility } = useContext(SettingsContext);
  const {
    paragraph: { numberOfCharacters },
    removeSpecialCharacters,
    lowercase,
    uppercase,
    textType,
    useCustomText,
    customText
  } = settings;
  const { printTags } = utility;

  const deleteSpecialCharacters = string =>
    string.replace(/[^a-zA-Z0-9.,-?!\s]/g, "");

  const processText = (text, tag = "p") => {
    let updatedText = text;

    if (lowercase) {
      updatedText = updatedText.toLowerCase();
    }

    if (uppercase) {
      updatedText = updatedText.toUpperCase();
    }

    console.log(getRandomValue(text.split("###")));

    if (updatedText.slice(-1) !== ".") {
      updatedText = `${updatedText}.`;
    }

    if (removeSpecialCharacters) {
      updatedText = deleteSpecialCharacters(updatedText);
    }

    if (printTags) {
      updatedText = `<${tag}>${updatedText}</${tag}>`;
    }

    return updatedText;
  };

  const getText = () => {
    const text = useCustomText ? customText : texts[textType].paragraph;
    const repeatNumber = Math.ceil(numberOfCharacters / text.length);

    let updatedText = text
      .repeat(repeatNumber)
      .substring(0, numberOfCharacters)
      .trim();

    return processText(updatedText, "p");
  };

  const getHeadline = () => {
    let headline = texts[textType].headline;

    return processText(headline, "h2");
  };

  const getSubline = () => {
    let subline = texts[textType].subline;

    return processText(subline, "h3");
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
