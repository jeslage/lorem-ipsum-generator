import React, { useContext, FC } from "react";

import { TextContext } from "../../contexts";

import StyledPreset from "./Preset.style";

import PresetOptions from "./subcomponents/PresetOptions";

import { IconTypes } from "../Icon";

import { SettingsObject } from "../../contexts/SettingsProvider/definitions";
import { decodeConfig } from "../../helper";

const getDate = dateCreated => {
  const date = new Date(dateCreated);

  const year = date.getFullYear();
  const day = date.getDate();
  const month = date.getMonth();

  return `${day}.${month < 9 ? `0${month + 1}` : month + 1}.${year}`;
};

export type PresetOptionsType = {
  label: string;
  callback: () => void;
  icon: IconTypes;
};

export interface PresetProps {
  settings: string | SettingsObject;
  dateCreated?: number;
  onClick?: () => void;
  options?: PresetOptionsType[];
  additionalOptions?: Array<{
    label: string;
    callback: () => void;
  }>;
  likes?: number;
  className?: string;
}

const Preset: FC<PresetProps> = ({
  settings,
  dateCreated,
  onClick,
  options,
  additionalOptions,
  likes,
  className
}) => {
  const { texts, textTypes } = useContext(TextContext);

  const decodedSettings: SettingsObject =
    typeof settings === "string" ? decodeConfig(settings) : settings;

  const {
    headline,
    subline,
    paragraph,
    backgroundColor,
    textType
  } = decodedSettings;

  const updatedTextType = textTypes.filter(type => type.value === textType)[0];

  const getSubstring = (key: string) =>
    decodedSettings[key].custom
      ? decodedSettings[key].customText[0].substring(0, 60)
      : texts[textType][key][0].substring(0, 60);

  return (
    <StyledPreset
      headline={headline}
      subline={subline}
      paragraph={paragraph}
      backgroundColor={backgroundColor}
      className={className}
    >
      <div className="preset__card">
        <div className="preset__content">
          <button
            className="preset__text"
            onClick={onClick}
            aria-label="Update settings"
          >
            {headline && headline.enabled && (
              <h2>{getSubstring("headline")}</h2>
            )}
            {subline && subline.enabled && <h3>{getSubstring("subline")}</h3>}
            {paragraph && (
              <p className="preset__paragraph">{getSubstring("paragraph")}</p>
            )}
          </button>
          <div className="preset__meta">
            <span className="preset__meta-text">
              {updatedTextType.label}

              {dateCreated && (
                <>
                  <br />
                  {getDate(dateCreated)}
                </>
              )}

              {likes ? (
                <>
                  <br />
                  {likes} {likes !== 1 ? "likes" : "like"}
                </>
              ) : null}
            </span>

            <PresetOptions
              options={options}
              additionalOptions={additionalOptions}
              className="preset__options"
            />
          </div>
        </div>
      </div>
    </StyledPreset>
  );
};

export default Preset;
