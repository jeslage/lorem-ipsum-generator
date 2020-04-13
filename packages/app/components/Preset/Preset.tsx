import React, { useContext, FC } from "react";

import { TextContext } from "../../contexts";

import StyledPreset from "./Preset.style";

import PresetOptions from "./subcomponents/PresetOptions";

import { IconTypes } from "../Icon";

import { SettingsObject } from "../../contexts/SettingsProvider/definitions";
import { decodeConfig } from "../../helper";

export type PresetOptionsType = {
  label: string;
  callback: () => void;
  icon: IconTypes;
};

export interface PresetProps {
  settings: string | SettingsObject;
  dateCreated: number;
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
    textTransform,
    headline,
    subline,
    paragraph,
    backgroundColor,
    textType
  } = decodedSettings;

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
              <h2>
                {headline.custom
                  ? headline.customText[0].substring(0, 60)
                  : texts[textType].headline[0].substring(0, 60)}
              </h2>
            )}
            {subline && subline.enabled && (
              <h3>
                {subline.custom
                  ? subline.customText[0].substring(0, 60)
                  : texts[textType].subline[0].substring(0, 60)}{" "}
              </h3>
            )}
            {paragraph && (
              <p className="preset__paragraph">
                {paragraph.custom
                  ? paragraph.customText[0].substring(0, 60)
                  : texts[textType].paragraph[0].substring(0, 60)}{" "}
              </p>
            )}
          </button>
          <div className="preset__meta">
            <span className="preset__meta-text">
              {day}.{month < 9 ? `0${month + 1}` : month + 1}.{year} |{" "}
              {updatedTextType.label}
              {likes ? ` | ${likes} ${likes === 1 ? "like" : "likes"}` : ""}
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
