import React, { useContext, useEffect, useState } from "react";
import * as clipboard from "clipboard-polyfill";

import { TextContext } from "../../contexts/textProvider";
import { SettingsContext } from "../../contexts/settingsProvider";

import StyledText from "./text.style";

const Text = () => {
  const [copied, setCopied] = useState(false);
  const textContent = React.createRef();

  const { settings } = useContext(SettingsContext);
  const {
    paragraph: { count },
    headline,
    subline
  } = settings;

  const { getText, getHeadline, getSubline } = useContext(TextContext);

  const copyText = () => {
    setCopied(true);
    clipboard.writeText(textContent.current.innerText);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <StyledText>
      <button type="button" onClick={copyText}>
        {copied ? "Copied" : "Copy"}
      </button>
      <div className="text__content" ref={textContent}>
        {[...Array(count)].map((item, index) => (
          <React.Fragment key={index}>
            {headline.visible && index % headline.frequency === 0 && (
              <h2>{getHeadline()}</h2>
            )}

            {subline.visible &&
              headline.visible &&
              index % headline.frequency !== 0 && <h3>{getSubline()}</h3>}

            {!headline.visible && subline.visible && <h3>{getSubline()}</h3>}
            <p>{getText()}</p>
          </React.Fragment>
        ))}
      </div>
    </StyledText>
  );
};

export default Text;
