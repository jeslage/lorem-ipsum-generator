import lzString from "lz-string";

export const hexToRgbA = (hex, alpha) => {
  var c;
  if (/^#([A-Fa-f0-9]{3}){1,2}$/.test(hex)) {
    c = hex.substring(1).split("");
    if (c.length == 3) {
      c = [c[0], c[0], c[1], c[1], c[2], c[2]];
    }
    c = "0x" + c.join("");

    return (
      "rgba(" +
      [(c >> 16) & 255, (c >> 8) & 255, c & 255].join(",") +
      "," +
      alpha +
      ")"
    );
  }
  throw new Error("Bad Hex");
};

export const encodeConfig = obj =>
  lzString.compressToEncodedURIComponent(JSON.stringify(obj));
export const decodeConfig = obj =>
  JSON.parse(lzString.decompressFromEncodedURIComponent(obj));

export const convertArrayToObject = (array, key) => {
  const initialValue = {};
  return array.reduce((obj, item) => {
    return {
      ...obj,
      [item[key]]: item
    };
  }, initialValue);
};

export const getBoxShadow = () => ({ theme }) => `
  border: 1px solid rgba(255, 255, 255, 0.2);
  box-shadow: 2px 2px 3px 0
      ${hexToRgbA(theme.colors.active, 0.9)},
    -2px -2px 3px 0 rgba(255, 255, 255, 1);
`;
