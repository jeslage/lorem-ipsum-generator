import React, { useContext, useMemo } from "react";

import { TextContext } from "../../../../contexts/textProvider";
import { SettingsContext } from "../../../../contexts/settingsProvider";

import Counter from "../../../atoms/counter/counter";
import Switch from "../../../atoms/switch/switch";
import Select from "../../../atoms/select/select";
import Code from "../../../atoms/code/code";
import ColorPicker from "../../../atoms/colorpicker/colorpicker";
import SvgSprite from "../../../atoms/svgSprite/svgSprite";
import Shorthand from "../../../atoms/shorthand/shorthand";
import Button from "../../../atoms/button/button";
import Textarea from "../../../atoms/textarea/textarea";

import FontFamilyIcon from "../../../icons/fontFamily.svg";
import LineHeightIcon from "../../../icons/lineHeight.svg";
import ColorIcon from "../../../icons/color.svg";
import FontSizeIcon from "../../../icons/fontSize.svg";
import MarginIcon from "../../../icons/margin.svg";

const Subline = () => {
  const {
    settings,
    updateNestedSettings,
    fontFamilies,
    updateNestedArray,
    addNestedArray,
    removeNestedArray
  } = useContext(SettingsContext);
  const { textType } = settings;
  const { texts } = useContext(TextContext);

  const { subline } = settings;
  const {
    fontFamily,
    visible,
    frequency,
    offset,
    size,
    lineHeight,
    color,
    margin,
    numberOfCharacters,
    custom,
    customText
  } = subline;

  return useMemo(
    () => (
      <>
        <Switch
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
              onChange={value => {
                updateNestedSettings("subline", "frequency", value);

                if (value === 1) {
                  updateNestedSettings("subline", "offset", 0);
                }
              }}
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
            <Counter
              label="Characters"
              min={20}
              max={200}
              steps={1}
              value={numberOfCharacters}
              onChange={value =>
                updateNestedSettings("subline", "numberOfCharacters", value)
              }
            />

            <Switch
              label="Custom sublines"
              isActive={custom}
              onChange={bool => {
                if (customText.length === 0) {
                  updateNestedSettings(
                    "subline",
                    "customText",
                    texts[textType].subline
                  );
                }

                updateNestedSettings("subline", "custom", bool);
              }}
            />
            {custom && (
              <>
                {customText.map((text, index) => (
                  <Textarea
                    key={index}
                    value={text}
                    onChange={value =>
                      updateNestedArray("subline", "customText", value, index)
                    }
                    onRemove={() =>
                      removeNestedArray("subline", "customText", index)
                    }
                  />
                ))}
                <Button onClick={() => addNestedArray("subline", "customText")}>
                  Add subline
                </Button>
              </>
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
