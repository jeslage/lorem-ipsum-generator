import React, { useContext } from "react";

import { textTypes } from "../../../config/text";

import { PresetsContext } from "../../../contexts/presetsProvider";
import { SettingsContext } from "../../../contexts/settingsProvider";

import StyledPreset from "./preset.style";
import SvgSprite from "../../atoms/svgSprite/svgSprite";

import RemoveIcon from "../../icons/remove.svg";

const Preset = ({ preset }) => {
  const { removePreset } = useContext(PresetsContext);
  const { updateAllSettings } = useContext(SettingsContext);

  const { settings, dateCreated } = preset;
  const {
    lowercase,
    uppercase,
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
      lowercase={lowercase}
      uppercase={uppercase}
      headline={headline}
      subline={subline}
      paragraph={paragraph}
      backgroundColor={backgroundColor}
    >
      <button
        type="button"
        onClick={() => updateAllSettings(settings)}
        className="preset__use"
      >
        <div className="preset__content">
          <div className="preset__text">
            {headline.visible && (
              <h2>
                {"<h2>"}
                <small>
                  FS: {headline.size} / LH: {headline.lineHeight}
                </small>
              </h2>
            )}
            {subline.visible && (
              <h3>
                {"<h3>"}
                <small>
                  FS: {subline.size} / LH: {subline.lineHeight}
                </small>
              </h3>
            )}
            <p className="preset__paragraph">
              {"<p>"}
              <small>
                FS: {paragraph.size} / LH: {paragraph.lineHeight} / LS:{" "}
                {paragraph.letterSpacing}
              </small>
            </p>
          </div>
        </div>
        <table>
          <tbody>
            <tr>
              <td className="preset__label">Created</td>
              <td className="preset__value">
                {day}.{month < 10 ? `0${month}` : month}.{year}
              </td>
            </tr>
            <tr>
              <td className="preset__label">Text type</td>
              <td className="preset__value">{updatedTextType.label}</td>
            </tr>
          </tbody>
        </table>
      </button>
      <button
        type="button"
        className="preset__remove"
        onClick={() => removePreset(dateCreated)}
      >
        <SvgSprite icon={RemoveIcon} />
      </button>
    </StyledPreset>
  );
};

export default Preset;
