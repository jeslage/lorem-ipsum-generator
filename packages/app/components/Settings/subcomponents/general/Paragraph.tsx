import React, { useContext } from "react";
import { SettingsContext, TextContext } from "../../../../contexts";

import Button from "../../../Button";
import Counter from "../../../Counter";
import Switch from "../../../Switch";
import Textarea from "../../../Textarea";

const Paragraph = () => {
  const {
    settings,
    updateNestedSettings,
    updateNestedArray,
    removeNestedArray,
    addNestedArray
  } = useContext(SettingsContext);
  const { texts } = useContext(TextContext);

  const { paragraph, textType } = settings;
  const { count, numberOfCharacters, custom, customText } = paragraph;

  return (
    <>
      <Counter
        label="Paragraphs"
        iconBefore="numberOfParagraphs"
        value={count}
        onChange={value => updateNestedSettings("paragraph", "count", value)}
      />
      <Counter
        label="Characters"
        iconBefore="numberOfCharacters"
        min={50}
        max={9999}
        steps={20}
        value={numberOfCharacters}
        onChange={value =>
          updateNestedSettings("paragraph", "numberOfCharacters", value)
        }
      />

      <Switch
        label="Custom paragraphs"
        iconBefore="pen"
        isActive={custom}
        onChange={bool => {
          if (customText.length === 0) {
            updateNestedSettings(
              "paragraph",
              "customText",
              texts[textType].paragraph
            );
          }

          updateNestedSettings("paragraph", "custom", bool);
        }}
      />

      {custom && (
        <>
          {customText.map((text, index) => (
            <Textarea
              key={index}
              value={text}
              onChange={value =>
                updateNestedArray("paragraph", "customText", value, index)
              }
              onRemove={() =>
                removeNestedArray("paragraph", "customText", index)
              }
            />
          ))}
          <Button onClick={() => addNestedArray("paragraph", "customText")}>
            Add paragraph
          </Button>
        </>
      )}
    </>
  );
};

export default Paragraph;
