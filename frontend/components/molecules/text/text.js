import React, { useContext } from "react";

import { TextContext } from "../../../contexts/textProvider";
import { SettingsContext } from "../../../contexts/settingsProvider";

import Dropzone from "../dropzone/dropzone";

import StyledText from "./text.style";

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
            {headline.visible &&
              (index + headline.offset) % headline.frequency === 0 &&
              index >= headline.offset && <h2>{getText("headline", "h2")}</h2>}

            {subline.visible &&
              (index + subline.offset) % subline.frequency === 0 &&
              index >= subline.offset && <h3>{getText("subline", "h3")}</h3>}

            <p>{getText("paragraph", "p")}</p>

            {list.visible &&
              (index - 1 + list.offset) % list.frequency === 0 &&
              index >= list.offset &&
              getList()}
          </React.Fragment>
        ))}
        {printInlineStyles && <p className="text__tag">{"</main>"}</p>}
      </div>
    </StyledText>
  );
};

export default Text;
