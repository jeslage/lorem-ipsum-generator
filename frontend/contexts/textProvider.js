import React, { useContext, useRef } from "react";
import PropTypes from "prop-types";

import { textTypes, texts } from "@config/text";

import { SettingsContext } from "./settingsProvider";

export const TextContext = React.createContext();

// const getRandomValue = arr => arr[Math.floor(Math.random() * arr.length)];

const TextProvider = ({ children }) => {
  const textContainer = useRef();
  const { settings, utility } = useContext(SettingsContext);
  const { removeSpecialCharacters, textTransform, textType } = settings;
  const { printTags, printInlineStyles } = utility;

  const index = {
    paragraph: 0,
    headline: 0,
    subline: 0
  };

  const deleteSpecialCharacters = string =>
    string.replace(/[^a-zA-Z0-9.,-?!\s]/g, "");

  const getInlineStyles = type => `
    font-family: ${type.fontFamily};
    font-size: ${type.size}px;
    line-height: ${type.lineHeight};
    ${type.letterSpacing ? `letter-spacing: ${type.letterSpacing}px;` : ""}
    text-align: ${type.textAlign};
    color: ${type.color};
`;

  const getText = (key, tag) => {
    let text = "";

    const textsArray = settings[key].custom
      ? settings[key].customText
      : texts[textType][key];

    if (textsArray[index[key]]) {
      text = textsArray[index[key]];
      index[key] = index[key] + 1;
    } else {
      text = textsArray[0];
      index[key] = 0;
    }

    const repeatBy = Math.ceil(
      settings[key].numberOfCharacters / text.length === 0 ? 1 : text.length
    );

    let updatedText = `${text} `
      .repeat(repeatBy)
      .substring(0, settings[key].numberOfCharacters)
      .trim();

    if (textTransform === "lowercase") updatedText = updatedText.toLowerCase();
    if (textTransform === "uppercase") updatedText = updatedText.toUpperCase();

    if (key === "paragraph" && updatedText.slice(-1) !== ".")
      updatedText = `${updatedText}.`;

    if (removeSpecialCharacters)
      updatedText = deleteSpecialCharacters(updatedText);

    if (printTags) {
      updatedText = printInlineStyles
        ? `<${tag} style="${getInlineStyles(
            settings[key]
          ).trim()}">${updatedText}</${tag}>`
        : `<${tag}>${updatedText}</${tag}>`;
    }

    return updatedText;
  };

  const getList = () => {
    const ListTag = settings.list.orderedList ? "ol" : "ul";

    const list = (
      <>
        {printTags && (
          <p className="text__tag">
            {`<${ListTag}${
              printInlineStyles
                ? ` style="${getInlineStyles(settings.paragraph).trim()}"`
                : ""
            }>`}
          </p>
        )}
        <ListTag>
          {texts[textType].list.map((item, i) => {
            let updatedItem = item;
            if (textTransform === "lowercase")
              updatedItem = updatedItem.toLowerCase();
            if (textTransform === "uppercase")
              updatedItem = updatedItem.toUpperCase();
            if (removeSpecialCharacters)
              updatedItem = deleteSpecialCharacters(item);

            if (printTags) updatedItem = `<li>${item}</li>`;
            return <li key={i}>{updatedItem}</li>;
          })}
        </ListTag>
        {printTags && <p className="text__tag">{`</${ListTag}>`}</p>}
      </>
    );

    return list;
  };

  return (
    <TextContext.Provider
      value={{ textContainer, textTypes, texts, getText, getList }}
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
