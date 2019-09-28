import React, { useContext } from "react";

import { TextContext } from "../../contexts/textProvider";
import { SettingsContext } from "../../contexts/settingsProvider";

import StyledText from "./text.style";

const Text = () => {
  const { settings } = useContext(SettingsContext);
  const {
    paragraph: { count },
    headline,
    subline
  } = settings;

  const { getText, getHeadline, getSubline } = useContext(TextContext);

  const renderedText = getText();
  const renderedHeadline = getHeadline();
  const renderedSubline = getSubline();

  return (
    <StyledText>
      <div className="text__content" id="textContent">
        {[...Array(count)].map((item, index) => (
          <React.Fragment key={index}>
            {headline.visible &&
              index % headline.frequency === 0 &&
              (index + headline.offset) % headline.frequency === 0 &&
              index >= headline.offset && <h2>{renderedHeadline}</h2>}

            {subline.visible &&
              (index + subline.offset) % subline.frequency === 0 &&
              index >= subline.offset && <h3>{renderedSubline}</h3>}

            <p>{renderedText}</p>
          </React.Fragment>
        ))}
      </div>
    </StyledText>
  );
};

export default Text;
