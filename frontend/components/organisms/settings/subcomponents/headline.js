import React, { useContext, useMemo } from "react";

import { SettingsContext } from "../../../../contexts/settingsProvider";
import { TextContext } from "../../../../contexts/textProvider";

import Counter from "../../../atoms/counter/counter";
import Switch from "../../../atoms/switch/switch";
import Select from "../../../atoms/select/select";
import Code from "../../../atoms/code/code";
import ColorPicker from "../../../atoms/colorpicker/colorpicker";
import SvgSprite from "../../../atoms/svgSprite/svgSprite";
import Shorthand from "../../../atoms/shorthand/shorthand";
import Textarea from "../../../atoms/textarea/textarea";
import Button from "../../../atoms/button/button";

import FontFamilyIcon from "../../../icons/fontFamily.svg";
import LineHeightIcon from "../../../icons/lineHeight.svg";
import ColorIcon from "../../../icons/color.svg";
import FontSizeIcon from "../../../icons/fontSize.svg";
import MarginIcon from "../../../icons/margin.svg";

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
    visible,
    fontFamily,
    size,
    lineHeight,
    offset,
    frequency,
    color,
    margin,
    numberOfCharacters,
    custom,
    customText
  } = headline;

  return useMemo(
    () => (
      <>
        <Switch
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
            <Shorthand
              iconBefore={<SvgSprite icon={MarginIcon} />}
              value={margin}
              label="Margin"
              onChange={value =>
                updateNestedSettings("headline", "margin", value)
              }
            />
            <Code
              code={`h2 {\r\n\tfont-size: ${size}px;\r\n\tline-height: ${lineHeight};\r\n\tcolor: ${color};\r\n\tmargin: ${margin.top}px ${margin.right}px ${margin.bottom}px ${margin.left}px;\r\n}`}
            />
          </>
        )}
      </>
    ),
    [headline]
  );
};

export default Headline;
