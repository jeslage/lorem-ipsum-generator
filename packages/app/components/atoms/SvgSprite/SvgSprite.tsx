import React from "react";
import { FC } from "react";

export interface SvgSpriteProps {
  icon: any;
  width?: string | number;
  height?: string | number;
  className?: string;
}

const SvgSprite: FC<SvgSpriteProps> = ({
  icon,
  width,
  height,
  className,
  ...props
}) => {
  const [viewBoxWidth, viewBoxHeight] = icon.viewBox.split(" ").splice(2, 2);

  return (
    <svg
      className={className}
      width={width || viewBoxWidth}
      height={height || viewBoxHeight}
      viewBox={icon.viewBox}
      role="presentation"
      {...props}
    >
      <use xlinkHref={`#${icon.id}`} />
    </svg>
  );
};

export default SvgSprite;
