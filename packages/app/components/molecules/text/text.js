import React, { useContext } from "react";

import { TextContext } from "@contexts/textProvider";
import { SettingsContext } from "@contexts/settingsProvider";

import Dropzone from "@molecules/dropzone/dropzone";

import StyledText from "./text.style";
import InlineSetting from "./subcomponents/inlineSetting/inlineSetting";

const Text = props => {
  const { settings, utility } = useContext(SettingsContext);
  const {
    paragraph,
    headline,
    subline,
    list,
    textWidth,
    backgroundColor
  } = settings;
  const { printInlineStyles } = utility;

  const { textContainer, getText, getList } = useContext(TextContext);

  return (
    <StyledText {...props}>
      <Dropzone />
      <div className="text__content" id="textContent" ref={textContainer}>
        {printInlineStyles && (
          <p className="text__tag">{`<main style="width: ${textWidth}%; background-color: ${backgroundColor};">`}</p>
        )}
        {[...Array(paragraph.count)].map((item, index) => (
          <React.Fragment key={index}>
            {headline.enabled &&
              (index + headline.offset) % headline.frequency === 0 &&
              index >= headline.offset && (
                <InlineSetting setting="headline">
                  <h2>{getText("headline", "h2")}</h2>
                </InlineSetting>
              )}

            {subline.enabled &&
              (index + subline.offset) % subline.frequency === 0 &&
              index >= subline.offset && (
                <InlineSetting setting="subline">
                  <h3>{getText("subline", "h3")}</h3>
                </InlineSetting>
              )}

            <InlineSetting setting="paragraph">
              <p>{getText("paragraph", "p")}</p>
            </InlineSetting>

            {list.enabled &&
              (index - 1 + list.offset) % list.frequency === 0 &&
              index >= list.offset && (
                <InlineSetting setting="list">{getList()}</InlineSetting>
              )}
          </React.Fragment>
        ))}
        {printInlineStyles && <p className="text__tag">{"</main>"}</p>}
      </div>
    </StyledText>
  );
};

export default Text;
