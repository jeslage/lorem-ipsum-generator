import lzString from "lz-string";
import { NextPageContext } from "next";

export const groupBy = key => array =>
  array.reduce(
    (objectsByKeyValue, obj) => ({
      ...objectsByKeyValue,
      [obj[key]]: (objectsByKeyValue[obj[key]] || []).concat(obj)
    }),
    {}
  );

export const hexToRgbA = (hex: any, alpha: number): string => {
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
  JSON.parse(lzString.decompressFromEncodedURIComponent(obj) || "");

export const convertArrayToObject = (array: any[], key: string) => {
  const initialValue = {};
  return array.reduce((obj, item) => {
    return {
      ...obj,
      [item[key]]: item
    };
  }, initialValue);
};

export const redirect = (ctx: NextPageContext, path: string) => {
  if (ctx.res) {
    ctx.res.writeHead(302, { Location: path });
    ctx.res.end();
  } else {
    document.location.pathname = path;
  }
};

export const deleteSpecialCharacters = string =>
  string.replace(/[^a-zA-Z0-9.,-?!\s]/g, "");

export const getInlineStyles = type => `
  font-family: ${type.fontFamily};
  font-size: ${type.size}px;
  line-height: ${type.lineHeight};
  ${type.letterSpacing ? `letter-spacing: ${type.letterSpacing}px;` : ""}
  text-align: ${type.textAlign};
  text-transform: ${type.textTransform};
  color: ${type.color};
`;
