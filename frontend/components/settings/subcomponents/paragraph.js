import React, { useContext, useMemo } from "react";

import { SettingsContext } from "../../../contexts/settingsProvider";

import Counter from "../../counter/counter";
import Code from "../../code/code";
import Shorthand from "../../shorthand/shorthand";
import ColorPicker from "../../colorpicker/colorpicker";
import Select from "../../select/select";
import SvgSprite from "../../svgSprite/svgSprite";

import FontFamilyIcon from "../../../icons/fontFamily.svg";
import LetterSpacingIcon from "../../../icons/letterSpacing.svg";
import LineHeightIcon from "../../../icons/lineHeight.svg";
import ColorIcon from "../../../icons/color.svg";
import FontSizeIcon from "../../../icons/fontSize.svg";
import MarginIcon from "../../../icons/margin.svg";

const Paragraph = () => {
  const { settings, updateNestedSettings, fontFamilies } = useContext(
    SettingsContext
  );

  const { paragraph } = settings;
  const {
    fontFamily,
    count,
    size,
    letterSpacing,
    lineHeight,
    numberOfCharacters,
    color,
    margin
  } = paragraph;

  return useMemo(
    () => (
      <>
        <Counter
          label="Paragraphs"
          value={count}
          onChange={value => updateNestedSettings("paragraph", "count", value)}
        />
        <Counter
          label="Characters"
          min={50}
          max={9999}
          steps={50}
          value={numberOfCharacters}
          onChange={value =>
            updateNestedSettings("paragraph", "numberOfCharacters", value)
          }
        />

        <hr />

        <Select
          options={fontFamilies}
          initialValue={fontFamily}
          iconBefore={<SvgSprite icon={FontFamilyIcon} />}
          label="Font"
          onChange={value =>
            updateNestedSettings("paragraph", "fontFamily", value)
          }
        />
        <Counter
          label="Font size"
          iconBefore={<SvgSprite icon={FontSizeIcon} />}
          value={size}
          onChange={value => updateNestedSettings("paragraph", "size", value)}
        />
        <Counter
          iconBefore={<SvgSprite icon={LineHeightIcon} />}
          label="Line Height"
          value={lineHeight}
          steps={0.25}
          onChange={value =>
            updateNestedSettings("paragraph", "lineHeight", value)
          }
        />
        <Counter
          label="Letter spacing"
          iconBefore={<SvgSprite icon={LetterSpacingIcon} />}
          value={letterSpacing}
          min={0}
          onChange={value =>
            updateNestedSettings("paragraph", "letterSpacing", value)
          }
        />
        <ColorPicker
          iconBefore={<SvgSprite icon={ColorIcon} />}
          label="Color"
          value={color}
          onChange={value => updateNestedSettings("paragraph", "color", value)}
        />
        <Shorthand
          iconBefore={<SvgSprite icon={MarginIcon} />}
          value={margin}
          label="Margin"
          onChange={value => updateNestedSettings("paragraph", "margin", value)}
        />

        <Code
          code={`p {\r\n\tfont-family: ${fontFamily};\r\n\tfont-size: ${size}px;\r\n\tletter-spacing: ${letterSpacing}px;\r\n\tline-height: ${lineHeight};\r\n\tcolor: ${color};\r\n\tmargin: ${margin.top}px ${margin.right}px ${margin.bottom}px ${margin.left}px;\r\n}`}
        />
      </>
    ),
    [paragraph]
  );
};

export default Paragraph;
