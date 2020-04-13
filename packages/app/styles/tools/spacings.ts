import { spacings } from "../settings";
import { px2rem } from "./utility";
/**
 * Returns spacing from settings referenced by id
 * @param  {string} id - Identifier for the space in the configuration map or a string e.g. '12px'
 * @return {number} Resulting space from configuration file
 * @returns {string} Space value
 * @example padding: ${space('m')};
 */

export default function space(id: keyof typeof spacings) {
  return px2rem(spacings[id]);
}
