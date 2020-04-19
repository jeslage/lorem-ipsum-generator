import { SettingsObject, UtilityObject } from "./definitions";
import { fontFamilies } from "../../config/fontFamilies";

export const defaultConfig: SettingsObject = {
  textType: "loremIpsum",
  textWidth: 100,
  backgroundColor: "#fff",
  removeSpecialCharacters: false,
  paragraph: {
    fontFamily: fontFamilies[0].value,
    count: 6,
    numberOfCharacters: 1000,
    size: 20,
    lineHeight: 1.5,
    letterSpacing: 0,
    textTransform: "none",
    color: "#000",
    textAlign: "left",
    margin: {
      top: 20,
      right: 0,
      bottom: 20,
      left: 0
    },
    custom: false,
    customText: ["Insert custom text"]
  },
  headline: {
    fontFamily: fontFamilies[0].value,
    enabled: false,
    numberOfCharacters: 50,
    frequency: 2,
    offset: 0,
    size: 30,
    lineHeight: 1.5,
    textTransform: "none",
    color: "#000",
    textAlign: "left",
    margin: {
      top: 20,
      right: 0,
      bottom: 20,
      left: 0
    },
    custom: false,
    customText: ["Insert custom text"]
  },
  subline: {
    fontFamily: fontFamilies[0].value,
    enabled: false,
    numberOfCharacters: 50,
    frequency: 2,
    offset: 1,
    size: 24,
    lineHeight: 1.5,
    textTransform: "none",
    color: "#000",
    textAlign: "left",
    margin: {
      top: 20,
      right: 0,
      bottom: 20,
      left: 0
    },
    custom: false,
    customText: ["Insert custom text"]
  },
  list: {
    enabled: false,
    frequency: 2,
    offset: 1,
    orderedList: false
  }
};

export const defaultUtility: UtilityObject = {
  printTags: false,
  printInlineStyles: false
};
