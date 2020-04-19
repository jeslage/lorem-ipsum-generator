import React, { useContext } from "react";
import { SettingsContext, TextContext } from "../../../../contexts";

import Button from "../../../Button";
import Counter from "../../../Counter";
import Switch from "../../../Switch";
import Textarea from "../../../Textarea";

const Subline = () => {
  const {
    settings,
    updateNestedSettings,
    updateNestedArray,
    addNestedArray,
    removeNestedArray
  } = useContext(SettingsContext);
  const { textType } = settings;
  const { texts } = useContext(TextContext);

  const { subline } = settings;
  const {
    enabled,
    frequency,
    offset,
    numberOfCharacters,
    custom,
    customText
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
          <Counter
            label="Frequency"
            iconBefore="frequency"
            description="Number of paragraphs between sublines."
            value={frequency}
            min={1}
            onChange={value => {
              updateNestedSettings("subline", "frequency", value);
            }}
          />

          <Counter
            label="Offset"
            iconBefore="offset"
            description="Number of paragraphs before first subline."
            min={0}
            value={offset}
            onChange={value => updateNestedSettings("subline", "offset", value)}
          />

          <Counter
            label="Characters"
            min={20}
            max={200}
            steps={1}
            value={numberOfCharacters}
            iconBefore="numberOfCharacters"
            onChange={value =>
              updateNestedSettings("subline", "numberOfCharacters", value)
            }
          />

          <Switch
            label="Custom sublines"
            iconBefore="pen"
            isActive={custom}
            onChange={bool => {
              if (customText.length === 0) {
                updateNestedSettings(
                  "subline",
                  "customText",
                  texts[textType].subline
                );
              }

              updateNestedSettings("subline", "custom", bool);
            }}
          />
          {custom && (
            <>
              {customText.map((text, index) => (
                <Textarea
                  key={index}
                  value={text}
                  onChange={value =>
                    updateNestedArray("subline", "customText", value, index)
                  }
                  onRemove={() =>
                    removeNestedArray("subline", "customText", index)
                  }
                />
              ))}
              <Button onClick={() => addNestedArray("subline", "customText")}>
                Add subline
              </Button>
            </>
          )}
        </>
      )}
    </>
  );
};

export default Subline;
