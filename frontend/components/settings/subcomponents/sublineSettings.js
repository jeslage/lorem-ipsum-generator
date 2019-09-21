import React, { useContext } from "react";

import { SettingsContext } from "../../../contexts/settingsProvider";

import Counter from "../../counter/counter";
import Toggle from "../../toggle/toggle";
import Code from "../../code/code";

const SublineSettings = () => {
  const { settings, updateNestedSettings, updateSettings } = useContext(
    SettingsContext
  );

  const { subline, withSublines } = settings;
  const { size, lineHeight } = subline;

  return (
    <div>
      <p>Subline</p>
      <Toggle
        isActive={withSublines}
        onChange={bool => updateSettings("withSublines", bool)}
      />
      <Counter
        value={size}
        onChange={value => updateNestedSettings("subline", "size", value)}
      />

      <Counter
        value={lineHeight}
        steps={0.25}
        onChange={value => updateNestedSettings("subline", "lineHeight", value)}
      />
      <Code
        code={`h2 {\r\n\tfont-size: ${size}px;\r\n\tline-height: ${lineHeight};\r\n}`}
      />
      <hr />
    </div>
  );
};

export default SublineSettings;
