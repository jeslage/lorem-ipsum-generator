import React from "react";
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
  AccordionItemState
} from "react-accessible-accordion";

import Icon from "../Icon";
import History from "../History";

// Subcomponents
import Paragraph from "./subcomponents/Paragraph";
import Headline from "./subcomponents/Headline";
import Subline from "./subcomponents/Subline";
import Utility from "./subcomponents/Utility";
import General from "./subcomponents/General";
import Bar from "./subcomponents/Bar";
import List from "./subcomponents/List";

import StyledSettings from "./Settings.style";

const Settings = () => {
  const items = [
    { label: "General", content: <General /> },
    { label: "Paragraph", content: <Paragraph /> },
    { label: "Headline", content: <Headline /> },
    { label: "Subline", content: <Subline /> },
    { label: "Lists", content: <List /> },
    { label: "Utility", content: <Utility /> }
  ];

  return (
    <StyledSettings>
      <div className="settings__accordion">
        <Accordion allowZeroExpanded allowMultipleExpanded>
          {items.map((item, index) => (
            <AccordionItem key={item.label} uuid={`${index}`}>
              <AccordionItemHeading>
                <AccordionItemButton>
                  <AccordionItemState>
                    {({ expanded }) => (
                      <>
                        <span>{item.label}</span>

                        <Icon type={expanded ? "minus" : "plus"} />
                      </>
                    )}
                  </AccordionItemState>
                </AccordionItemButton>
              </AccordionItemHeading>
              <AccordionItemPanel>{item.content}</AccordionItemPanel>
            </AccordionItem>
          ))}
        </Accordion>
      </div>

      <div className="settings__bar">
        <History />
        <div className="settings__buttons">
          <Bar />
        </div>
      </div>
    </StyledSettings>
  );
};

export default Settings;
