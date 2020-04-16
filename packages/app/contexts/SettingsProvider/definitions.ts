import { TextAlignProperty, TextTransformProperty } from "csstype";

export type ParagraphSettings = {
  fontFamily: string;
  count: number;
  numberOfCharacters: number;
  size: number;
  lineHeight: number;
  letterSpacing: number;
  color: string;
  textAlign: TextAlignProperty;
  textTransform: TextTransformProperty;
  margin: {
    top: number;
    right: number;
    bottom: number;
    left: number;
  };
  custom: boolean;
  customText: string[];
};

export type HeadlineSettings = {
  fontFamily: string;
  enabled: boolean;
  numberOfCharacters: number;
  frequency: number;
  offset: number;
  size: number;
  lineHeight: number;
  color: string;
  textAlign: TextAlignProperty;
  textTransform: TextTransformProperty;
  margin: {
    top: number;
    right: number;
    bottom: number;
    left: number;
  };
  custom: boolean;
  customText: string[];
};

export type SublineSettings = {
  fontFamily: string;
  enabled: boolean;
  numberOfCharacters: number;
  frequency: number;
  offset: number;
  size: number;
  lineHeight: number;
  color: string;
  textAlign: TextAlignProperty;
  textTransform: TextTransformProperty;
  margin: {
    top: number;
    right: number;
    bottom: number;
    left: number;
  };
  custom: boolean;
  customText: string[];
};

export type ListSettings = {
  enabled: boolean;
  frequency: number;
  offset: number;
  orderedList: boolean;
};

export interface SettingsObject {
  textType: string;
  textWidth: number;
  backgroundColor: string;
  removeSpecialCharacters: boolean;
  paragraph: ParagraphSettings;
  headline: HeadlineSettings;
  subline: SublineSettings;
  list: ListSettings;
}

export interface ThemeObject extends SettingsObject {
  colors: {
    color: string;
    background: string;
    border: string;
    hover: string;
    active: string;
  };
}

export interface UtilityObject {
  printTags: boolean;
  printInlineStyles: boolean;
}

type FontFamily = {
  label: string;
  value: string;
};

export interface SettingsContextProps {
  settings: SettingsObject;
  fontFamilies: FontFamily[];
  utility: UtilityObject;
  addNestedArray: any;
  updateSettings: any;
  updateNestedSettings: any;
  updateAllSettings: any;
  updateUtility: any;
  updateNestedArray: any;
  removeNestedArray: any;
  resetSettings: any;
}

export interface SettingsProviderProps {
  queryConfig?: Partial<SettingsObject>;
}
