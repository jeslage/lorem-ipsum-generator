import React, { FC } from "react";

import {
  Color,
  LineHeight,
  Check,
  Remove,
  Settings,
  Minus,
  Plus,
  Redo,
  Undo,
  Copy
} from "./icons";

export type IconTypes =
  | "color"
  | "lineHeight"
  | "check"
  | "remove"
  | "settings"
  | "minus"
  | "plus"
  | "undo"
  | "redo"
  | "copy";

export interface IconProps {
  type: IconTypes;
}

const icons = {
  color: <Color />,
  lineHeight: <LineHeight />,
  check: <Check />,
  remove: <Remove />,
  settings: <Settings />,
  minus: <Minus />,
  plus: <Plus />,
  undo: <Undo />,
  redo: <Redo />,
  copy: <Copy />
};

const Icon: FC<IconProps> = ({ type }) => <>{icons[type]}</>;

export default Icon;
