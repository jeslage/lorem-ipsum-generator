import React, { useContext, useMemo } from "react";

import { SettingsContext } from "../../../contexts/settingsProvider";

import Counter from "../../counter/counter";
import Toggle from "../../toggle/toggle";
import Select from "../../select/select";
import Code from "../../code/code";
import ColorPicker from "../../colorpicker/colorpicker";
import SvgSprite from "../../svgSprite/svgSprite";

import FontFamilyIcon from "../../../icons/fontFamily.svg";
import LineHeightIcon from "../../../icons/lineHeight.svg";
import ColorIcon from "../../../icons/color.svg";
import FontSizeIcon from "../../../icons/fontSize.svg";
import MarginIcon from "../../../icons/margin.svg";
import Shorthand from "../../shorthand/shorthand";

const Subline = () => {
  const { settings, updateNestedSettings, fontFamilies } = useContext(
    SettingsContext
  );

  const { subline } = settings;
  const {
    fontFamily,
    visible,
    frequency,
    offset,
    size,
    lineHeight,
    color,
    margin
  } = subline;

  return useMemo(
    () => (
      <>
        <Toggle
          label="Enable sublines"
          isActive={visible}
          onChange={bool => updateNestedSettings("subline", "visible", bool)}
        />
        {visible && (
          <>
            <Counter
              label="Frequency"
              description="Number of paragraphs between sublines."
              value={frequency}
              onChange={value =>
                updateNestedSettings("subline", "frequency", value)
              }
            />
            {frequency !== 1 && (
              <Counter
                label="Offset"
                description="Number of paragraphs before first subline."
                min={0}
                value={offset}
                onChange={value =>
                  updateNestedSettings("subline", "offset", value)
                }
              />
            )}

            <hr />
            <Select
              options={fontFamilies}
              initialValue={fontFamily}
              iconBefore={<SvgSprite icon={FontFamilyIcon} />}
              label="Family"
              onChange={value =>
                updateNestedSettings("subline", "fontFamily", value)
              }
            />
            <Counter
              label="Size"
              iconBefore={<SvgSprite icon={FontSizeIcon} />}
              value={size}
              onChange={value => updateNestedSettings("subline", "size", value)}
            />

            <Counter
              label="Line Height"
              iconBefore={<SvgSprite icon={LineHeightIcon} />}
              value={lineHeight}
              steps={0.25}
              onChange={value =>
                updateNestedSettings("subline", "lineHeight", value)
              }
            />
            <ColorPicker
              label="Color"
              iconBefore={<SvgSprite icon={ColorIcon} />}
              value={color}
              onChange={value =>
                updateNestedSettings("subline", "color", value)
              }
            />

            <Shorthand
              iconBefore={<SvgSprite icon={MarginIcon} />}
              value={margin}
              label="Margin"
              onChange={value =>
                updateNestedSettings("subline", "margin", value)
              }
            />
            <Code
              code={`h3 {\r\n\tfont-size: ${size}px;\r\n\tline-height: ${lineHeight};\r\n\tcolor: ${color};\r\n\tmargin: ${margin.top}px ${margin.right}px ${margin.bottom}px ${margin.left}px;\r\n}`}
            />
          </>
        )}
      </>
    ),
    [subline]
  );
};

export default Subline;
