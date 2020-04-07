import React, { useContext, useMemo } from "react";

import { TextContext } from "@contexts/textProvider";
import { SettingsContext } from "@contexts/settingsProvider";

import Counter from "@components/Counter";
import Switch from "@components/Switch";
import Select from "@atoms/select/select";
import Code from "@components/Code";
import ColorPicker from "@components/ColorPicker";

import Shorthand from "@atoms/shorthand/shorthand";
import Button from "@components/Button";
import Textarea from "@components/Textarea";
import Range from "@atoms/range/range";
import RadioGroup from "@atoms/radioGroup/radioGroup";

import FontFamilyIcon from "@icons/fontFamily.svg";
import ColorIcon from "@icons/color.svg";
import FontSizeIcon from "@icons/fontSize.svg";
import MarginIcon from "@icons/margin.svg";
import LeftAlignIcon from "@icons/leftAlign.svg";
import CenterAlignIcon from "@icons/centerAlign.svg";
import RightAlignIcon from "@icons/rightAlign.svg";

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
    enabled,
    frequency,
    offset,
    size,
    lineHeight,
    color,
    margin,
    textAlign,
    numberOfCharacters,
    custom,
    customText
  } = subline;

  return useMemo(
    () => (
      <>
        <Switch
          label="Enable sublines"
          isActive={enabled}
          onChange={bool => updateNestedSettings("subline", "enabled", bool)}
        />
        {enabled && (
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
              iconBefore={FontFamilyIcon}
              label="Family"
              onChange={value =>
                updateNestedSettings("subline", "fontFamily", value)
              }
            />
            <Range
              label="Size"
              suffix="px"
              iconBefore={FontSizeIcon}
              value={size}
              onChange={value => updateNestedSettings("subline", "size", value)}
            />

            <Counter
              label="Line Height"
              value={lineHeight}
              steps={0.25}
              onChange={value =>
                updateNestedSettings("subline", "lineHeight", value)
              }
            />
            <ColorPicker
              label="Color"
              value={color}
              onChange={value =>
                updateNestedSettings("subline", "color", value)
              }
            />

            <Shorthand
              iconBefore={MarginIcon}
              value={margin}
              label="Margin"
              onChange={value =>
                updateNestedSettings("subline", "margin", value)
              }
            />

            <RadioGroup
              label="Text align"
              value={textAlign}
              name="subline-textalign"
              iconBefore={LeftAlignIcon}
              options={[
                { value: "left", icon: LeftAlignIcon },
                { value: "center", icon: CenterAlignIcon },
                { value: "right", icon: RightAlignIcon }
              ]}
              onChange={value =>
                updateNestedSettings("subline", "textAlign", value)
              }
            />
            <Code
              code={`h3 {\r\n\tfont-size: ${size}px;\r\n\tline-height: ${lineHeight};\r\n\tcolor: ${color};\r\n\tmargin: ${margin.top}px ${margin.right}px ${margin.bottom}px ${margin.left}px;\r\n\ttext-align: ${textAlign};\r\n}`}
            />
          </>
        )}
      </>
    ),
    [subline]
  );
};

export default Subline;
