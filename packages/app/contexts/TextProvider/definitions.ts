export type TextObject = {
  label: string;
  paragraph: string[];
  headline: string[];
  subline: string[];
  list: string[];
};
export interface TextContextProps {
  textTypes: { label: string; value: string }[];
  texts: {
    [key: string]: TextObject;
  };
  getText: (key: "paragraph" | "headline" | "subline", tag: string) => string;
  getList: () => JSX.Element;
}
