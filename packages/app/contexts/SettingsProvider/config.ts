import { SettingsObject, UtilityObject } from "./definitions";

export const fontFamilies = [
  {
    label: "System UI",
    value:
      "-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Oxygen-Sans,Ubuntu,Cantarell,'Helvetica Neue',sans-serif"
  },
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
