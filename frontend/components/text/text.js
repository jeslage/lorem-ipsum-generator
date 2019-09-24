import React, { useContext, useEffect, useState, useMemo } from "react";
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

  const renderedText = getText();
  const renderedHeadline = getHeadline();
  const renderedSubline = getSubline();

  return useMemo(
    () => (
      <StyledText>
        <button type="button" onClick={copyText}>
          {copied ? "Copied" : "Copy"}
        </button>
        <div className="text__content" ref={textContent}>
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
    ),
    [count, headline, subline]
  );
};

export default Text;
