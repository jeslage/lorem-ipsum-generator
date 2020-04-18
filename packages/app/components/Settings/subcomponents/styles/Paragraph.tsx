import React, { useContext } from "react";
import { SettingsContext } from "../../../../contexts";

import Code from "../../../Code";
import ColorPicker from "../../../ColorPicker";
import Counter from "../../../Counter";
import RadioGroup from "../../../RadioGroup";
import Range from "../../../Range";
import Select from "../../../Select";
import Shorthand from "../../../Shorthand";

const Paragraph = () => {
  const { settings, updateNestedSettings, fontFamilies } = useContext(
    SettingsContext
  );

  const { paragraph } = settings;
  const {
    fontFamily,
    size,
    letterSpacing,
    lineHeight,
    color,
    margin,
    textAlign,
    textTransform
  } = paragraph;

  return (
    <>
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
  );
};

export default Paragraph;
