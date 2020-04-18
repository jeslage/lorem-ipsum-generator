import React from "react";
import History from "../History";

// Subcomponents
import General from "./subcomponents/general/General";
import Paragraph from "./subcomponents/general/Paragraph";
import Headline from "./subcomponents/general/Headline";
import Subline from "./subcomponents/general/Subline";
import Utility from "./subcomponents/general/Utility";
import List from "./subcomponents/general/List";

import GeneralStyles from "./subcomponents/styles/General";
import ParagraphStyles from "./subcomponents/styles/Paragraph";
import HeadlineStyles from "./subcomponents/styles/Headline";
import SublineStyles from "./subcomponents/styles/Subline";

import Bar from "./subcomponents/Bar";

import StyledSettings from "./Settings.style";

import Collapsible from "../Collapsible";

export const Settings = () => (
  <StyledSettings>
    <div className="settings__panel">
      <Collapsible>
        <General />
      </Collapsible>
      <Collapsible initialOpen label="Paragraph" variant="secondary">
        <Paragraph />
      </Collapsible>
      <Collapsible initialOpen label="Headline">
        <Headline />
      </Collapsible>
      <Collapsible initialOpen label="Subline" variant="secondary">
        <Subline />
      </Collapsible>
      <Collapsible initialOpen label="List">
        <List />
      </Collapsible>
      <Collapsible initialOpen label="Utility" variant="secondary">
        <Utility />
      </Collapsible>
    </div>

    <div className="settings__bar">
      <History />
      <div className="settings__buttons">
        <Bar />
      </div>
    </div>
  </StyledSettings>
);

export const Styles = () => (
  <StyledSettings>
    <div className="settings__panel">
      <Collapsible>
        <GeneralStyles />
      </Collapsible>
      <Collapsible initialOpen label="Paragraph" variant="secondary">
        <ParagraphStyles />
      </Collapsible>
      <Collapsible initialOpen label="Headline">
        <HeadlineStyles />
      </Collapsible>
      <Collapsible initialOpen label="Subline" variant="secondary">
        <SublineStyles />
      </Collapsible>
    </div>

    <div className="settings__bar">
      <History />
      <div className="settings__buttons">
        <Bar />
      </div>
    </div>
  </StyledSettings>
);
