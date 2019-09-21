import React, { useContext } from "react";

import { SettingsContext } from "../../contexts/settingsProvider";

import Toggle from "../toggle/toggle";
import Counter from "../counter/counter";

import ParagraphSettings from "./subcomponents/paragraphSettings";
import HeadlineSettings from "./subcomponents/headlineSettings";

import StyledSettings from "./settings.style";
import SublineSettings from "./subcomponents/sublineSettings";

const Settings = () => {
  const { settings, updateSettings, resetSettings } = useContext(
    SettingsContext
  );

  const { darkMode, removeSpecialCharacters, numberOfCharacters } = settings;

  return (
    <StyledSettings>
      <button type="button" onClick={resetSettings}>
        Rest all
      </button>
      <Toggle
        isActive={darkMode}
        onChange={bool => updateSettings("darkMode", bool)}
      />
      <ParagraphSettings />
      <HeadlineSettings />
      <SublineSettings />
      <Counter
        max={10000}
        steps={50}
        value={numberOfCharacters}
        onChange={value => updateSettings("numberOfCharacters", value)}
      />
      <Toggle
        isActive={removeSpecialCharacters}
        onChange={bool => updateSettings("removeSpecialCharacters", bool)}
      />
    </StyledSettings>
  );
};

export default Settings;
