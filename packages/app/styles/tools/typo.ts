import { fontSizes } from "../theme";
import { px2rem } from "./utility";

export default function fontSize(id: keyof typeof fontSizes) {
  return px2rem(fontSizes[id]);
}
