import { TextObject } from "../../config/text";

export interface TextContextProps {
  textTypes: Pick<TextObject, "label" | "value">[];
  texts: {
    [key: string]: Pick<
      TextObject,
      "paragraph" | "headline" | "subline" | "list"
    >;
  };
  getText: (key: "paragraph" | "headline" | "subline", tag: string) => string;
  getList: () => JSX.Element;
}
