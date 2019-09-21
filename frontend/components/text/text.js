import React, { useContext } from "react";

import { TextContext } from "../../contexts/textProvider";
import { SettingsContext } from "../../contexts/settingsProvider";

import StyledText from "./text.style";

const Text = () => {
  const { settings } = useContext(SettingsContext);
  const {
    withHeadlines,
    withSublines,
    paragraph: { count },
    headline: { frequency }
  } = settings;

  const { getText } = useContext(TextContext);
  const text = getText();

  return (
    <StyledText>
      {[...Array(count)].map((item, index) => (
        <>
          {withHeadlines && index % frequency === 0 && (
            <h2>Testheadline ist ganz wichtig und so</h2>
          )}
          {withSublines && index % frequency !== 0 && (
            <h3>Testheadline ist ganz wichtig und so</h3>
          )}
          <p>{text}</p>
        </>
      ))}
    </StyledText>
  );
};

export default Text;
