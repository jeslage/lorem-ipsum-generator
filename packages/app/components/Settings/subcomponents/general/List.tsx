import React, { useContext } from "react";

import Counter from "../../../Counter";
import { SettingsContext } from "../../../../contexts";
import Switch from "../../../Switch";

const List = () => {
  const { settings, updateNestedSettings } = useContext(SettingsContext);

  const { list } = settings;
  const { enabled, offset, frequency, orderedList } = list;

  return (
    <>
      <Switch
        label="Enable lists"
        isActive={enabled}
        onChange={bool => updateNestedSettings("list", "enabled", bool)}
      />
      {enabled && (
        <>
          <Counter
            label="Frequency"
            iconBefore="frequency"
            description="Number of paragraphs between lists."
            value={frequency}
            onChange={value => {
              updateNestedSettings("list", "frequency", value);

              if (value === 1) {
                updateNestedSettings("list", "offset", 0);
              }
            }}
          />

          {frequency !== 1 && (
            <Counter
              label="Offset"
              iconBefore="offset"
              description="Number of paragraphs before first list."
              min={0}
              value={offset}
              onChange={value => updateNestedSettings("list", "offset", value)}
            />
          )}

          <Switch
            label="Ordered List"
            isActive={orderedList}
            onChange={bool => updateNestedSettings("list", "orderedList", bool)}
          />
        </>
      )}
    </>
  );
};

export default List;
