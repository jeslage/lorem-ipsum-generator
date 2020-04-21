import React, { useContext } from "react";

import { textConfig } from "./config";

import { SettingsContext } from "../SettingsProvider";

import { TextContextProps } from "./definitions";
import { deleteSpecialCharacters, getInlineStyles } from "../../helper";

const defaultTextContext = {
  textTypes: [],
  texts: {},
  getList: () => (
    <ul>
      <li>List</li>
    </ul>
  ),
  getText: () => "Text"
};

export const TextContext = React.createContext<TextContextProps>(
  defaultTextContext
);

const textTypes = Object.keys(textConfig).map(key => ({
  value: key,
  label: textConfig[key].label,
  genre: textConfig[key].genre
}));

const TextProvider = ({ children }) => {
  const { settings, utility } = useContext(SettingsContext);
  const { removeSpecialCharacters, textType } = settings;
  const { printTags, printInlineStyles } = utility;

  const index = {
    paragraph: 0,
    headline: 0,
    subline: 0
  };

  const getText = (
    key: "paragraph" | "subline" | "headline",
    tag: string
  ): string => {
    let text = "";

    const textsArray =
      settings[key].custom && settings[key].customText.length > 0
        ? settings[key].customText
        : textConfig[textType][key];

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

    if (settings[key].textTransform === "lowercase")
      updatedText = updatedText.toLowerCase();
    if (settings[key].textTransform === "uppercase")
      updatedText = updatedText.toUpperCase();

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

  const getList = (): JSX.Element => {
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
          {textConfig[textType].list.map((item, i) => {
            let updatedItem = item;
            if (settings.paragraph.textTransform === "lowercase")
              updatedItem = updatedItem.toLowerCase();
            if (settings.paragraph.textTransform === "uppercase")
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
      value={{ textTypes, texts: textConfig, getText, getList }}
    >
      {children}
    </TextContext.Provider>
  );
};

export const TextConsumer = TextContext.Consumer;

export default TextProvider;
