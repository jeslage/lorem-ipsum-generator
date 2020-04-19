import { SettingsObject } from "../contexts/SettingsProvider/definitions";

export interface ThemeObject extends SettingsObject {
  ui: {
    colors: typeof colors;
    breakpoints: typeof breakpoints;
    spacings: typeof spacings;
    fontSizes: typeof fontSizes;
  };
}

const colors = {
  color: "#c9c9c9",
  background: "#202020",
  border: "#808080",
  hover: "#181818",
  active: "#080808"
};

// Breakpoints
const breakpoints = {
  s: 375,
  m: 768,
  l: 940,
  xl: 1280
};

// Spacings
const spacings = {
  s: 20,
  m: 30,
  l: 40,
  xl: 60
};

// Font sizes
const fontSizes = {
  s: 10,
  m: 12,
  l: 14
};

export const getTheme = (settings: SettingsObject): ThemeObject => ({
  ...settings,
  ui: {
    colors,
    spacings,
    fontSizes,
    breakpoints
  }
});

export { breakpoints, colors, fontSizes, spacings };
