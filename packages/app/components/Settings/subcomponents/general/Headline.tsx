import React, { useContext } from "react";
import { SettingsContext, TextContext } from "../../../../contexts";

import Button from "../../../Button";
import Counter from "../../../Counter";
import Switch from "../../../Switch";
import Textarea from "../../../Textarea";

const Headline = () => {
  const {
    settings,
    updateNestedSettings,
    updateNestedArray,
    addNestedArray,
    removeNestedArray
  } = useContext(SettingsContext);
  const { textType } = settings;
  const { texts } = useContext(TextContext);

  const { headline } = settings;
  const {
    enabled,
    offset,
    frequency,
    numberOfCharacters,
    custom,
    customText
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
          <Counter
            iconBefore="frequency"
            min={1}
            label="Frequency"
            description="Number of paragraphs between headlines."
            value={frequency}
            onChange={value => {
              updateNestedSettings("headline", "frequency", value);
            }}
          />

          <Counter
            label="Offset"
            description="Number of paragraphs before first headline."
            min={0}
            iconBefore="offset"
            value={offset}
            onChange={value =>
              updateNestedSettings("headline", "offset", value)
            }
          />

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
              <Button onClick={() => addNestedArray("headline", "customText")}>
                Add headline
              </Button>
            </>
          )}
        </>
      )}
    </>
  );
};

export default Headline;
