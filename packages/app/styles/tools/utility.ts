import { breakpoints, colors, ThemeObject } from "../theme";

/**
 * Simple CSS MediaQuery. Expects a breakpoint (string or number) and min or max string (default min).
 * @param {string} mediaQuery - Identifier for the breakpoint in the configuration file
 * @param {string} minMax - Default: min. String for the media-query type
 * @returns {string} Media query definition
 * @example ${mq('m', 'max')} { css styles go here };
 */
export const mq = (
  mediaQuery: keyof typeof breakpoints,
  minMax: "min" | "max" = "min"
) => ({ theme }: { theme: ThemeObject }) => `
    @media (${minMax}-width: ${px2rem(theme.ui.breakpoints[mediaQuery])})
  `;

/**
 * Returns color from settings referenced by id
 * @param  {string} id - Identifier for the color in the configuration map. Default: #000
 * @returns {string} Resulting color from configuration file
 * @example color: ${color('white')};
 */
export const color = (id: keyof typeof colors = "background") => ({
  theme
}: {
  theme: ThemeObject;
}): string => theme.ui.colors[id];

/**
 * CSS to reset button styling.
 * @returns {string}
 * @example ${btnReset()}
 */
export function btnReset() {
  return `
    appearance: none;
    border: 0;
    margin: 0;
    padding: 0;
    background: transparent;
    cursor: pointer;
  }
  `;
}

/**
 * Transform px value to rem value.
 * @param {string} px - PX value as a number
 * @returns {string}
 * @example ${px2rem(25)}
 */
export const px2rem = (px: number) => `${px / 16}rem`;
