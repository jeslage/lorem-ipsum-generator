import "styled-components";
import { ThemeObject } from "./contexts/SettingsProvider/definitions";

declare module "styled-components" {
  export interface DefaultTheme extends ThemeObject {}
}
