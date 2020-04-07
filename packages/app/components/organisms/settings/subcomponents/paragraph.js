import React, { useContext, useMemo } from "react";

import { SettingsContext } from "@contexts/settingsProvider";
import { TextContext } from "@contexts/textProvider";

import Counter from "@atoms/Counter";
import Code from "@atoms/Code";
import Shorthand from "@atoms/shorthand/shorthand";
import ColorPicker from "@atoms/ColorPicker";
import Select from "@atoms/select/select";
import Switch from "@atoms/switch/switch";
import Textarea from "@atoms/textarea/textarea";
import Button from "@atoms/Button";
import Range from "@atoms/range/range";
import RadioGroup from "@atoms/radioGroup/radioGroup";

import FontFamilyIcon from "@icons/fontFamily.svg";
import ColorIcon from "@icons/color.svg";
import FontSizeIcon from "@icons/fontSize.svg";
import MarginIcon from "@icons/margin.svg";
import LeftAlignIcon from "@icons/leftAlign.svg";
import CenterAlignIcon from "@icons/centerAlign.svg";
import RightAlignIcon from "@icons/rightAlign.svg";

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
          iconBefore={FontFamilyIcon}
          label="Font"
          onChange={value =>
            updateNestedSettings("paragraph", "fontFamily", value)
          }
        />
        <Range
          label="Size"
          iconBefore={FontSizeIcon}
          value={size}
          suffix="px"
          onChange={value => updateNestedSettings("paragraph", "size", value)}
        />
        <Counter
          label="Line Height"
          value={lineHeight}
          steps={0.25}
          onChange={value =>
            updateNestedSettings("paragraph", "lineHeight", value)
          }
        />

        <Counter
          label="Letter spacing"
          value={letterSpacing}
          min={0}
          onChange={value =>
            updateNestedSettings("paragraph", "letterSpacing", value)
          }
        />
        <ColorPicker
          label="Color"
          value={color}
          onChange={value => updateNestedSettings("paragraph", "color", value)}
        />
        <Shorthand
          iconBefore={MarginIcon}
          value={margin}
          label="Margin"
          onChange={value => updateNestedSettings("paragraph", "margin", value)}
        />

        <RadioGroup
          label="Text align"
          value={textAlign}
          name="paragraph-textalign"
          iconBefore={LeftAlignIcon}
          options={[
            { value: "left", icon: LeftAlignIcon },
            { value: "center", icon: CenterAlignIcon },
            { value: "right", icon: RightAlignIcon }
          ]}
          onChange={value =>
            updateNestedSettings("paragraph", "textAlign", value)
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
