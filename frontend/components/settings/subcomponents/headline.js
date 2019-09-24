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

const Headline = () => {
  const { settings, updateNestedSettings, fontFamilies } = useContext(
    SettingsContext
  );

  const { headline } = settings;
  const {
    visible,
    fontFamily,
    size,
    lineHeight,
    offset,
    frequency,
    color
  } = headline;

  return useMemo(
    () => (
      <>
        <Toggle
          label="Enable headlines"
          isActive={visible}
          onChange={bool => updateNestedSettings("headline", "visible", bool)}
        />
        {visible && (
          <>
            <Counter
              label="Frequency"
              description="Number of paragraphs between headlines."
              value={frequency}
              onChange={value =>
                updateNestedSettings("headline", "frequency", value)
              }
            />
            {frequency !== 1 && (
              <Counter
                label="Offset"
                description="Number of paragraphs before first headline."
                min={0}
                value={offset}
                onChange={value =>
                  updateNestedSettings("headline", "offset", value)
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
                updateNestedSettings("headline", "fontFamily", value)
              }
            />
            <Counter
              label="Size"
              iconBefore={<SvgSprite icon={FontSizeIcon} />}
              value={size}
              onChange={value =>
                updateNestedSettings("headline", "size", value)
              }
            />

            <Counter
              label="Line Height"
              iconBefore={<SvgSprite icon={LineHeightIcon} />}
              value={lineHeight}
              steps={0.25}
              onChange={value =>
                updateNestedSettings("headline", "lineHeight", value)
              }
            />
            <ColorPicker
              label="Color"
              iconBefore={<SvgSprite icon={ColorIcon} />}
              value={color}
              onChange={value =>
                updateNestedSettings("headline", "color", value)
              }
            />
            <Code
              code={`h2 {\r\n\tfont-size: ${size}px;\r\n\tline-height: ${lineHeight};\r\n\tcolor: ${color};\r\n}`}
            />
          </>
        )}
      </>
    ),
    [headline]
  );
};

export default Headline;
