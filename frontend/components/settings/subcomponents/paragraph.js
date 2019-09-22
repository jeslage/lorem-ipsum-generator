import React, { useContext } from "react";

import { SettingsContext } from "../../../contexts/settingsProvider";

import Counter from "../../counter/counter";
import Code from "../../code/code";
import ColorPicker from "../../colorpicker/colorpicker";
import Select from "../../select/select";

const Paragraph = () => {
  const { settings, updateNestedSettings, fontFamilies } = useContext(
    SettingsContext
  );

  const { paragraph } = settings;
  const {
    fontFamily,
    count,
    size,
    letterSpacing,
    lineHeight,
    numberOfCharacters,
    color
  } = paragraph;

  return (
    <div>
      <Select
        options={fontFamilies}
        initialValue={fontFamily}
        label="Font Family"
        onChange={value =>
          updateNestedSettings("paragraph", "fontFamily", value)
        }
      />
      <Counter
        label="Number of Paragraphs"
        value={count}
        onChange={value => updateNestedSettings("paragraph", "count", value)}
      />
      <Counter
        label="Number of characters"
        min={50}
        max={9999}
        steps={50}
        value={numberOfCharacters}
        onChange={value =>
          updateNestedSettings("paragraph", "numberOfCharacters", value)
        }
      />
      <Counter
        label="Font Size"
        value={size}
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
        label="Letter Spacing"
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
      <Code
        code={`p {\r\n\tfont-size: ${size}px;\r\n\tletter-spacing: ${letterSpacing}px;\r\n\tline-height: ${lineHeight};\r\n\tcolor: ${color};\r\n}`}
      />
    </div>
  );
};

export default Paragraph;
