import React, { useContext, useMemo } from "react";
import { SettingsContext, TextContext } from "../../../contexts";

import Button from "../../Button";
import Code from "../../Code";
import ColorPicker from "../../ColorPicker";
import Counter from "../../Counter";
import RadioGroup from "../../RadioGroup";
import Range from "../../Range";
import Select from "../../Select";
import Shorthand from "../../Shorthand";
import Switch from "../../Switch";
import Textarea from "../../Textarea";

const Headline = () => {
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

  const { headline } = settings;
  const {
    enabled,
    fontFamily,
    size,
    lineHeight,
    offset,
    frequency,
    color,
    margin,
    textAlign,
    numberOfCharacters,
    custom,
    customText
  } = headline;

  return useMemo(
    () => (
      <>
        <Switch
          label="Enable headlines"
          isActive={enabled}
          onChange={bool => updateNestedSettings("headline", "enabled", bool)}
        />
        {enabled && (
          <>
            <Counter
              label="Frequency"
              description="Number of paragraphs between headlines."
              value={frequency}
              onChange={value => {
                updateNestedSettings("headline", "frequency", value);

                if (value === 1) {
                  updateNestedSettings("headline", "offset", 0);
                }
              }}
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
            <Counter
              label="Characters"
              min={20}
              max={200}
              steps={1}
              value={numberOfCharacters}
              onChange={value =>
                updateNestedSettings("headline", "numberOfCharacters", value)
              }
            />

            <Switch
              label="Custom headlines"
              isActive={custom}
              onChange={bool => {
                if (customText.length === 0) {
                  updateNestedSettings(
                    "headline",
                    "customText",
                    texts[textType].headline
                  );
                }

                updateNestedSettings("headline", "custom", bool);
              }}
            />
            {custom && (
              <>
                {customText.map((text, index) => (
                  <Textarea
                    key={index}
                    value={text}
                    onChange={value =>
                      updateNestedArray("headline", "customText", value, index)
                    }
                    onRemove={() =>
                      removeNestedArray("headline", "customText", index)
                    }
                  />
                ))}
                <Button
                  onClick={() => addNestedArray("headline", "customText")}
                >
                  Add headline
                </Button>
              </>
            )}

            <hr />

            <Select
              options={fontFamilies}
              initialValue={fontFamily}
              iconBefore="fontFamily"
              label="Family"
              name="family"
              onChange={value =>
                updateNestedSettings("headline", "fontFamily", value)
              }
            />

            <Range
              label="Size"
              iconBefore="fontSize"
              value={size}
              suffix="px"
              onChange={value =>
                updateNestedSettings("headline", "size", value)
              }
            />

            <Counter
              label="Line Height"
              iconBefore="lineHeight"
              value={lineHeight}
              steps={0.25}
              onChange={value =>
                updateNestedSettings("headline", "lineHeight", value)
              }
            />

            <ColorPicker
              label="Color"
              iconBefore="color"
              value={color}
              onChange={value =>
                updateNestedSettings("headline", "color", value)
              }
            />

            <Shorthand
              iconBefore="margin"
              value={margin}
              label="Margin"
              onChange={value =>
                updateNestedSettings("headline", "margin", value)
              }
            />

            <RadioGroup
              label="Text align"
              value={textAlign}
              name="headline-textalign"
              iconBefore="leftAlign"
              options={[
                { value: "left", icon: "leftAlign" },
                { value: "center", icon: "centerAlign" },
                { value: "right", icon: "rightAlign" }
              ]}
              onChange={value =>
                updateNestedSettings("headline", "textAlign", value)
              }
            />

            <Code
              code={`h2 {\r\n\tfont-size: ${size}px;\r\n\tline-height: ${lineHeight};\r\n\tcolor: ${color};\r\n\tmargin: ${margin.top}px ${margin.right}px ${margin.bottom}px ${margin.left}px;\r\n\ttext-align: ${textAlign};\r\n}`}
            />
          </>
        )}
      </>
    ),
    [headline]
  );
};

export default Headline;
