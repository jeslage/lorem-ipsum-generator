import React, { useContext } from "react";
import { useDrag } from "react-dnd-cjs";
import PropTypes from "prop-types";

import { TextContext } from "@contexts/textProvider";

import SvgSprite from "@atoms/svgSprite/svgSprite";
import RemoveIcon from "@icons/remove.svg";

import StyledPreset from "./preset.style";

const Preset = ({ settings, dateCreated, onDrop, onRemove, likes }) => {
  const [{ isDragging }, drag] = useDrag({
    item: { name: "Preset", type: "preset" },
    end: (item, monitor) => {
      const dropResult = monitor.getDropResult();
      if (item && dropResult && onDrop) {
        onDrop();
      }
    },
    collect: monitor => ({
      isDragging: monitor.isDragging()
    })
  });
  const { texts, textTypes } = useContext(TextContext);

  const {
    textTransform,
    headline,
    subline,
    paragraph,
    backgroundColor,
    textType
  } = settings;

  const date = new Date(dateCreated);
  const year = date.getFullYear();
  const day = date.getDate();
  const month = date.getMonth();

  const updatedTextType = textTypes.filter(type => type.value === textType)[0];

  return (
    <StyledPreset
      textTransform={textTransform}
      headline={headline}
      subline={subline}
      paragraph={paragraph}
      backgroundColor={backgroundColor}
      isDragging={isDragging}
    >
      <div ref={drag} className="preset__card">
        <div className="preset__content">
          <div className="preset__text">
            {headline.enabled && (
              <h2>
                <small>
                  Headline | FS: {headline.size} / LH: {headline.lineHeight}
                </small>
                {headline.custom
                  ? headline.customText[0].substring(0, 60)
                  : texts[textType].headline[0].substring(0, 60)}
              </h2>
            )}
            {subline.enabled && (
              <h3>
                <small>
                  Subline | FS: {subline.size} / LH: {subline.lineHeight}
                </small>
                {subline.custom
                  ? subline.customText[0].substring(0, 60)
                  : texts[textType].subline[0].substring(0, 60)}{" "}
              </h3>
            )}
            <p className="preset__paragraph">
              <small>
                Paragraph | FS: {paragraph.size} / LH: {paragraph.lineHeight} /
                LS: {paragraph.letterSpacing}
              </small>
              {paragraph.custom
                ? paragraph.customText[0].substring(0, 60)
                : texts[textType].paragraph[0].substring(0, 60)}{" "}
            </p>
          </div>
          <div className="preset__meta">
            <span>
              {day}.{month < 9 ? `0${month + 1}` : month + 1}.{year} |{" "}
              {updatedTextType.label} {likes !== null ? `| ${likes}` : ""}
            </span>
            <button
              type="button"
              className="preset__remove"
              onClick={() => {
                if (onRemove) onRemove();
              }}
            >
              <SvgSprite icon={RemoveIcon} />
            </button>
          </div>
        </div>
      </div>
    </StyledPreset>
  );
};

Preset.propTypes = {
  settings: PropTypes.string.isRequired,
  dateCreated: PropTypes.string.isRequired,
  onDrop: PropTypes.func,
  onRemove: PropTypes.func,
  likes: PropTypes.number
};

Preset.defaultProps = {
  onDrop: undefined,
  onRemove: undefined,
  likes: null
};

export default Preset;
