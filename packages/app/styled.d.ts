import "styled-components";
import { ThemeObject } from "./contexts/SettingsProvider";

declare module "styled-components" {
  export interface DefaultTheme extends ThemeObject {}
}
