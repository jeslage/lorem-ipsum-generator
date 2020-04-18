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

const Subline = () => {
  const { settings, updateNestedSettings, fontFamilies } = useContext(
    SettingsContext
  );

  const { subline } = settings;
  const {
    fontFamily,
    enabled,
    size,
    lineHeight,
    color,
    margin,
    textAlign,
    textTransform
  } = subline;

  return (
    <>
      <Switch
        label="Enable sublines"
        isActive={enabled}
        onChange={bool => updateNestedSettings("subline", "enabled", bool)}
      />
      {enabled && (
        <>
          <Select
            options={fontFamilies}
            initialValue={fontFamily}
            iconBefore="fontFamily"
            label="Family"
            name="sublineFontFamily"
            onChange={value =>
              updateNestedSettings("subline", "fontFamily", value)
            }
          />
          <Range
            label="Size"
            suffix="px"
            iconBefore="fontSize"
            value={size}
            onChange={value => updateNestedSettings("subline", "size", value)}
          />

          <Counter
            label="Line Height"
            value={lineHeight}
            iconBefore="lineHeight"
            steps={0.25}
            onChange={value =>
              updateNestedSettings("subline", "lineHeight", value)
            }
          />
          <ColorPicker
            label="Color"
            iconBefore="color"
            value={color}
            onChange={value => updateNestedSettings("subline", "color", value)}
          />

          <Shorthand
            iconBefore="margin"
            value={margin}
            label="Margin"
            onChange={value => updateNestedSettings("subline", "margin", value)}
          />

          <RadioGroup
            label="Text align"
            value={textAlign}
            name="subline-textalign"
            iconBefore="leftAlign"
            options={[
              { value: "left", icon: "leftAlign" },
              { value: "center", icon: "centerAlign" },
              { value: "right", icon: "rightAlign" }
            ]}
            onChange={value =>
              updateNestedSettings("subline", "textAlign", value)
            }
          />

          <RadioGroup
            label="Text transform"
            value={textTransform}
            name="subline-texttransform"
            iconBefore="mixedcase"
            options={[
              { value: "none", icon: "mixedcase" },
              { value: "uppercase", icon: "uppercase" },
              { value: "lowercase", icon: "lowercase" }
            ]}
            onChange={value =>
              updateNestedSettings("subline", "textTransform", value)
            }
          />

          <Code
            code={`h3 {\r\n\tfont-size: ${size}px;\r\n\tline-height: ${lineHeight};\r\n\tcolor: ${color};\r\n\tmargin: ${margin.top}px ${margin.right}px ${margin.bottom}px ${margin.left}px;\r\n\ttext-align: ${textAlign};\r\n}`}
          />
        </>
      )}
    </>
  );
};

export default Subline;
