import React, { useContext, useMemo } from "react";

import { SettingsContext } from "../../../contexts/settingsProvider";
import { TextContext } from "../../../contexts/textProvider";

import Counter from "../../counter/counter";
import Code from "../../code/code";
import Shorthand from "../../shorthand/shorthand";
import ColorPicker from "../../colorpicker/colorpicker";
import Select from "../../select/select";
import Switch from "../../switch/switch";
import Textarea from "../../textarea/textarea";
import Button from "../../button/button";
import SvgSprite from "../../svgSprite/svgSprite";

import FontFamilyIcon from "../../../icons/fontFamily.svg";
import LetterSpacingIcon from "../../../icons/letterSpacing.svg";
import LineHeightIcon from "../../../icons/lineHeight.svg";
import ColorIcon from "../../../icons/color.svg";
import FontSizeIcon from "../../../icons/fontSize.svg";
import MarginIcon from "../../../icons/margin.svg";

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
              updateNestedSettings("paragraph", "customText", [
                texts[textType].paragraph[0]
              ]);
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
