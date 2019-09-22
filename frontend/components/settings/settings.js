import React from "react";
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
  AccordionItemState
} from "react-accessible-accordion";

// Subcomponents
import Paragraph from "./subcomponents/paragraph";
import Headline from "./subcomponents/headline";
import Subline from "./subcomponents/subline";
import Utility from "./subcomponents/utility";
import General from "./subcomponents/general";
import Advanced from "./subcomponents/advanced";
import Presets from "./subcomponents/presets";

import StyledSettings from "./settings.style";

const Settings = () => {
  const items = [
    { label: "General", content: <General /> },
    { label: "Paragraph", content: <Paragraph /> },
    { label: "Headline", content: <Headline /> },
    { label: "Subline", content: <Subline /> },
    { label: "Advanced", content: <Advanced /> },
    { label: "Utility", content: <Utility /> },
    { label: "Presets", content: <Presets /> }
  ];
  return (
    <StyledSettings>
      <Accordion allowZeroExpanded allowMultipleExpanded preExpanded={["0"]}>
        {items.map((item, index) => (
          <AccordionItem key={item.label} uuid={`${index}`}>
            <AccordionItemHeading>
              <AccordionItemButton>
                <AccordionItemState>
                  {({ expanded }) => (
                    <>
                      <span>{item.label}</span>

                      <svg viewBox="0 0 24 24" role="img" focusable="false">
                        <rect height="2" rx="1" width="12" x="6" y="11" />
                        {!expanded && (
                          <rect height="12" rx="1" width="2" x="11" y="6" />
                        )}
                      </svg>
                    </>
                  )}
                </AccordionItemState>
              </AccordionItemButton>
            </AccordionItemHeading>
            <AccordionItemPanel>{item.content}</AccordionItemPanel>
          </AccordionItem>
        ))}
      </Accordion>
    </StyledSettings>
  );
};

export default Settings;
