import { spacings, ThemeObject } from "../theme";
import { px2rem } from "./utility";
/**
 * Returns spacing from settings referenced by id
 * @param  {string} id - Identifier for the space in the configuration map or a string e.g. '12px'
 * @return {number} Resulting space from configuration file
 * @returns {string} Space value
 * @example padding: ${space('m')};
 */

const space = (id: keyof typeof spacings) => ({
  theme
}: {
  theme: ThemeObject;
}) => px2rem(theme.ui.spacings[id]);

export default space;
