import React, { useContext, FC } from "react";

import { TextContext, SettingsContext } from "../../contexts";

import Dropzone from "../Dropzone";

import StyledText from "./Text.style";
import InlineSettings from "./subcomponents/InlineSettings/InlineSettings";

export interface TextProps {
  className?: string;
}

const Text: FC<TextProps> = ({ className }) => {
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
    <StyledText className={className}>
      <Dropzone />
      <div className="text__content" id="textContent" ref={textContainer}>
        {printInlineStyles && (
          <p className="text__tag">{`<main style="width: ${textWidth}%; background-color: ${backgroundColor};">`}</p>
        )}
        {[...Array(paragraph.count)].map((_, index) => (
          <React.Fragment key={index}>
            {headline.enabled &&
              (index + headline.offset) % headline.frequency === 0 &&
              index >= headline.offset && (
                <InlineSettings type="headline">
                  <h2>{getText("headline", "h2")}</h2>
                </InlineSettings>
              )}

            {subline.enabled &&
              (index + subline.offset) % subline.frequency === 0 &&
              index >= subline.offset && (
                <InlineSettings type="subline">
                  <h3>{getText("subline", "h3")}</h3>
                </InlineSettings>
              )}

            <InlineSettings type="paragraph">
              <p>{getText("paragraph", "p")}</p>
            </InlineSettings>

            {list.enabled &&
              (index - 1 + list.offset) % list.frequency === 0 &&
              index >= list.offset && (
                <InlineSettings type="list">{getList()}</InlineSettings>
              )}
          </React.Fragment>
        ))}
        {printInlineStyles && <p className="text__tag">{"</main>"}</p>}
      </div>
    </StyledText>
  );
};

export default Text;
