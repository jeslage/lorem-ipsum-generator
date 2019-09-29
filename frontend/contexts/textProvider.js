import React, { useContext } from "react";
import PropTypes from "prop-types";

import { textTypes, texts } from "../config";

import { SettingsContext } from "./settingsProvider";

export const TextContext = React.createContext();

const getRandomValue = arr => arr[Math.floor(Math.random() * arr.length)];

const TextProvider = ({ children }) => {
  const { settings, utility } = useContext(SettingsContext);
  const { removeSpecialCharacters, lowercase, uppercase, textType } = settings;
  const { printTags } = utility;

  const index = {
    paragraph: 0,
    headline: 0,
    subline: 0
  };

  const deleteSpecialCharacters = string =>
    string.replace(/[^a-zA-Z0-9.,-?!\s]/g, "");

  const getText = (key, tag) => {
    const textsArray = settings[key].custom
      ? settings[key].customText
      : texts[textType][key];
    let text = "";

    if (textsArray[index[key]]) {
      text = textsArray[index[key]];
      index[key] = index[key] + 1;
    } else {
      text = textsArray[0];
      index[key] = 0;
    }

    const repeatBy = Math.ceil(settings[key].numberOfCharacters / text.length);

    let updatedText = `${text} `
      .repeat(repeatBy)
      .substring(0, settings[key].numberOfCharacters)
      .trim();

    if (lowercase) updatedText = updatedText.toLowerCase();
    if (uppercase) updatedText = updatedText.toUpperCase();
    if (key === "paragraph" && updatedText.slice(-1) !== ".")
      updatedText = `${updatedText}.`;
    if (removeSpecialCharacters)
      updatedText = deleteSpecialCharacters(updatedText);
    if (printTags) updatedText = `<${tag}>${updatedText}</${tag}>`;

    return updatedText;
  };

  return (
    <TextContext.Provider value={{ textTypes, texts, getText }}>
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
