import React, { useContext } from "react";

import { PresetsContext } from "../../contexts/presetsProvider";

import Button from "../button/button";
import { SettingsContext } from "../../contexts/settingsProvider";

import StyledPreset from "./preset.style";

const Preset = ({ preset }) => {
  const { removePreset } = useContext(PresetsContext);
  const { updateAllSettings } = useContext(SettingsContext);

  const { settings, dateCreated } = preset;
  const date = new Date(dateCreated);
  const year = date.getFullYear();
  const day = date.getDate();
  const month = date.getMonth();

  return (
    <StyledPreset
      headline={settings.headline}
      subline={settings.subline}
      paragraph={settings.paragraph}
      backgroundColor={settings.backgroundColor}
    >
      <p>
        {day}.{month < 10 ? `0${month}` : month}.{year}
      </p>
      <button
        type="button"
        className="preset__remove"
        onClick={() => removePreset(dateCreated)}
        aria-label="Remove Preset"
      >
        <svg viewBox="0 0 24 24" role="img" focusable="false">
          <rect height="2" rx="1" width="12" x="6" y="11" />
          <rect height="12" rx="1" width="2" x="11" y="6" />
        </svg>
      </button>
      <button
        onClick={() => updateAllSettings(settings)}
        className="preset__content"
      >
        {settings.headline.visible && <h2>Headline</h2>}
        {settings.subline.visible && <h3>Subline</h3>}
        <p>Paragraph</p>
      </button>
    </StyledPreset>
  );
};

export default Preset;
