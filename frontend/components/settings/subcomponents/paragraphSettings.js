import React, { useContext } from "react";

import { SettingsContext } from "../../../contexts/settingsProvider";

import Counter from "../../counter/counter";
import Code from "../../code/code";

const ParagraphSettings = () => {
  const { settings, updateNestedSettings } = useContext(SettingsContext);

  const { paragraph } = settings;
  const { count, size, letterSpacing, lineHeight } = paragraph;

  return (
    <div>
      <p>Paragraph</p>
      <Counter
        value={count}
        onChange={value => updateNestedSettings("paragraph", "count", value)}
      />
      <Counter
        value={size}
        suffix="px"
        onChange={value => updateNestedSettings("paragraph", "size", value)}
      />

      <Counter
        value={lineHeight}
        steps={0.25}
        onChange={value =>
          updateNestedSettings("paragraph", "lineHeight", value)
        }
      />
      <Counter
        value={letterSpacing}
        suffix="px"
        min={0}
        onChange={value =>
          updateNestedSettings("paragraph", "letterSpacing", value)
        }
      />

      <Code
        code={`p {\r\n\tfont-size: ${size}px;\r\n\tletter-spacing: ${letterSpacing}px;\r\n\tline-height: ${lineHeight};\r\n}`}
      />
      <hr />
    </div>
  );
};

export default ParagraphSettings;
