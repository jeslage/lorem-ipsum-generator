import React, { useContext } from "react";

import { SettingsContext } from "../../../contexts/settingsProvider";

import Counter from "../../counter/counter";
import Toggle from "../../toggle/toggle";
import Code from "../../code/code";

const HeadlineSettings = () => {
  const { settings, updateNestedSettings, updateSettings } = useContext(
    SettingsContext
  );

  const { headline, withHeadlines } = settings;
  const { size, lineHeight, frequency } = headline;

  return (
    <div>
      <p>Headline</p>
      <Toggle
        isActive={withHeadlines}
        onChange={bool => updateSettings("withHeadlines", bool)}
      />
      <Counter
        value={size}
        onChange={value => updateNestedSettings("headline", "size", value)}
      />

      <Counter
        value={frequency}
        onChange={value => updateNestedSettings("headline", "frequency", value)}
      />

      <Counter
        value={lineHeight}
        steps={0.25}
        onChange={value =>
          updateNestedSettings("headline", "lineHeight", value)
        }
      />
      <Code
        code={`h2 {\r\n\tfont-size: ${size}px;\r\n\tline-height: ${lineHeight};\r\n}`}
      />
      <hr />
    </div>
  );
};

export default HeadlineSettings;
