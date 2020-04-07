import React, { FC } from "react";

import { color, lineHeight, check, remove } from "./icons";

export type IconTypes = "color" | "lineHeight" | "check" | "remove";

export interface IconProps {
  type: IconTypes;
  className?: string;
}

const icons = {
  color,
  lineHeight,
  check,
  remove
};

const Icon: FC<IconProps> = ({ type, className }) => (
  <div className={className}>{icons[type]}</div>
);

export default Icon;
