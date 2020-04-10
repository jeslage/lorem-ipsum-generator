export interface SettingsObject {
  textType: string;
  textWidth: number;
  backgroundColor: string;
  removeSpecialCharacters: boolean;
  textTransform: string;
  paragraph: {
    fontFamily: string;
    count: number;
    numberOfCharacters: number;
    size: number;
    lineHeight: number;
    letterSpacing: number;
    color: string;
    textAlign: string;
    margin: {
      top: number;
      right: number;
      bottom: number;
      left: number;
    };
    custom: boolean;
    customText: string[];
  };
  headline: {
    fontFamily: string;
    enabled: boolean;
    numberOfCharacters: number;
    frequency: number;
    offset: number;
    size: number;
    lineHeight: number;
    color: string;
    textAlign: string;
    margin: {
      top: number;
      right: number;
      bottom: number;
      left: number;
    };
    custom: boolean;
    customText: string[];
  };
  subline: {
    fontFamily: string;
    enabled: boolean;
    numberOfCharacters: number;
    frequency: number;
    offset: number;
    size: number;
    lineHeight: number;
    color: string;
    textAlign: string;
    margin: {
      top: number;
      right: number;
      bottom: number;
      left: number;
    };
    custom: boolean;
    customText: string[];
  };
  list: {
    enabled: boolean;
    frequency: number;
    offset: number;
    orderedList: boolean;
  };
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
  darkMode: boolean;
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
