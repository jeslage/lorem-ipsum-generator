import React, { useContext } from "react";
import { SettingsContext } from "../../../../contexts";

import Code from "../../../Code";
import ColorPicker from "../../../ColorPicker";
import Counter from "../../../Counter";
import RadioGroup from "../../../RadioGroup";
import Range from "../../../Range";
import Select from "../../../Select";
import Shorthand from "../../../Shorthand";
import Switch from "../../../Switch";

const Headline = () => {
  const { settings, updateNestedSettings, fontFamilies } = useContext(
    SettingsContext
  );

  const { headline } = settings;
  const {
    enabled,
    fontFamily,
    size,
    lineHeight,
    color,
    margin,
    textAlign,
    textTransform
  } = headline;

  return (
    <>
      <Switch
        label="Enable headlines"
        isActive={enabled}
        onChange={bool => updateNestedSettings("headline", "enabled", bool)}
      />
      {enabled && (
        <>
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
            onChange={value => updateNestedSettings("headline", "size", value)}
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
            onChange={value => updateNestedSettings("headline", "color", value)}
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

          <RadioGroup
            label="Text transform"
            value={textTransform}
            name="headline-texttransform"
            iconBefore="mixedcase"
            options={[
              { value: "none", icon: "mixedcase" },
              { value: "uppercase", icon: "uppercase" },
              { value: "lowercase", icon: "lowercase" }
            ]}
            onChange={value =>
              updateNestedSettings("headline", "textTransform", value)
            }
          />

          <Code
            code={`h2 {\r\n\tfont-size: ${size}px;\r\n\tline-height: ${lineHeight};\r\n\tcolor: ${color};\r\n\tmargin: ${margin.top}px ${margin.right}px ${margin.bottom}px ${margin.left}px;\r\n\ttext-align: ${textAlign};\r\n}`}
          />
        </>
      )}
    </>
  );
};

export default Headline;
