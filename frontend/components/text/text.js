import React, { useContext } from "react";

import { TextContext } from "../../contexts/textProvider";
import { SettingsContext } from "../../contexts/settingsProvider";

import StyledText from "./text.style";

const Text = () => {
  const { settings } = useContext(SettingsContext);
  const { paragraph, headline, subline } = settings;

  const { getText } = useContext(TextContext);

  return (
    <StyledText>
      <div className="text__content" id="textContent">
        {[...Array(paragraph.count)].map((item, index) => (
          <React.Fragment key={index}>
            {headline.visible &&
              (index + headline.offset) % headline.frequency === 0 &&
              index >= headline.offset && <h2>{getText("headline", "h2")}</h2>}

            {subline.visible &&
              (index + subline.offset) % subline.frequency === 0 &&
              index >= subline.offset && <h3>{getText("subline", "h3")}</h3>}

            <p>{getText("paragraph", "p")}</p>
          </React.Fragment>
        ))}
      </div>
    </StyledText>
  );
};

export default Text;
