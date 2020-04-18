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

const Paragraph = () => {
  const {
    settings,
    updateNestedSettings,
    fontFamilies,
    updateNestedArray,
    removeNestedArray,
    addNestedArray
  } = useContext(SettingsContext);
  const { texts } = useContext(TextContext);

  const { paragraph, textType } = settings;
  const {
    fontFamily,
    count,
    size,
    letterSpacing,
    lineHeight,
    numberOfCharacters,
    color,
    margin,
    textAlign,
    textTransform,
    custom,
    customText
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
          steps={20}
          value={numberOfCharacters}
          onChange={value =>
            updateNestedSettings("paragraph", "numberOfCharacters", value)
          }
        />

        <Switch
          label="Custom paragraphs"
          isActive={custom}
          onChange={bool => {
            if (customText.length === 0) {
              updateNestedSettings(
                "paragraph",
                "customText",
                texts[textType].paragraph
              );
            }

            updateNestedSettings("paragraph", "custom", bool);
          }}
        />
        {custom && (
          <>
            {customText.map((text, index) => (
              <Textarea
                key={index}
                value={text}
                onChange={value =>
                  updateNestedArray("paragraph", "customText", value, index)
                }
                onRemove={() =>
                  removeNestedArray("paragraph", "customText", index)
                }
              />
            ))}
            <Button onClick={() => addNestedArray("paragraph", "customText")}>
              Add paragraph
            </Button>
          </>
        )}

        <hr />

        <Select
          options={fontFamilies}
          initialValue={fontFamily}
          iconBefore="fontFamily"
          label="Font"
          name="fontFamily"
          onChange={value =>
            updateNestedSettings("paragraph", "fontFamily", value)
          }
        />

        <Range
          label="Size"
          iconBefore="fontSize"
          value={size}
          suffix="px"
          onChange={value => updateNestedSettings("paragraph", "size", value)}
        />

        <Counter
          label="Line Height"
          iconBefore="lineHeight"
          value={lineHeight}
          steps={0.25}
          onChange={value =>
            updateNestedSettings("paragraph", "lineHeight", value)
          }
        />

        <Counter
          label="Letter spacing"
          iconBefore="letterSpacing"
          value={letterSpacing}
          min={0}
          onChange={value =>
            updateNestedSettings("paragraph", "letterSpacing", value)
          }
        />

        <ColorPicker
          label="Color"
          iconBefore="color"
          value={color}
          onChange={value => updateNestedSettings("paragraph", "color", value)}
        />

        <Shorthand
          iconBefore="margin"
          value={margin}
          label="Margin"
          onChange={value => updateNestedSettings("paragraph", "margin", value)}
        />

        <RadioGroup
          label="Text align"
          value={textAlign}
          name="paragraph-textalign"
          iconBefore="leftAlign"
          options={[
            { value: "left", icon: "leftAlign" },
            { value: "center", icon: "centerAlign" },
            { value: "right", icon: "rightAlign" }
          ]}
          onChange={value =>
            updateNestedSettings("paragraph", "textAlign", value)
          }
        />

        <RadioGroup
          label="Text transform"
          value={textTransform}
          name="paragraph-texttransform"
          iconBefore="mixedcase"
          options={[
            { value: "none", icon: "mixedcase" },
            { value: "uppercase", icon: "uppercase" },
            { value: "lowercase", icon: "lowercase" }
          ]}
          onChange={value =>
            updateNestedSettings("paragraph", "textTransform", value)
          }
        />

        <Code
          code={`p {\r\n\tfont-family: ${fontFamily};\r\n\tfont-size: ${size}px;\r\n\tletter-spacing: ${letterSpacing}px;\r\n\tline-height: ${lineHeight};\r\n\tcolor: ${color};\r\n\tmargin: ${margin.top}px ${margin.right}px ${margin.bottom}px ${margin.left}px;\r\n\ttext-align: ${textAlign};\r\n}`}
        />
      </>
    ),
    [paragraph]
  );
};

export default Paragraph;
