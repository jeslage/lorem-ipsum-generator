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

import StyledSettings from "./settings.style";

const Settings = () => {
  return (
    <StyledSettings>
      <Accordion allowZeroExpanded allowMultipleExpanded>
        <AccordionItem>
          <AccordionItemHeading>
            <AccordionItemButton>
              <AccordionItemState>
                {({ expanded }) => (
                  <>
                    <span>General</span>

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
          <AccordionItemPanel>
            <General />
          </AccordionItemPanel>
        </AccordionItem>

        <AccordionItem>
          <AccordionItemHeading>
            <AccordionItemButton>
              <AccordionItemState>
                {({ expanded }) => (
                  <>
                    <span>Paragraph</span>

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
          <AccordionItemPanel>
            <Paragraph />
          </AccordionItemPanel>
        </AccordionItem>

        <AccordionItem>
          <AccordionItemHeading>
            <AccordionItemButton>
              <AccordionItemState>
                {({ expanded }) => (
                  <>
                    <span>Headline</span>

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
          <AccordionItemPanel>
            <Headline />
          </AccordionItemPanel>
        </AccordionItem>

        <AccordionItem>
          <AccordionItemHeading>
            <AccordionItemButton>
              <AccordionItemState>
                {({ expanded }) => (
                  <>
                    <span>Subline</span>

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
          <AccordionItemPanel>
            <Subline />
          </AccordionItemPanel>
        </AccordionItem>

        <AccordionItem>
          <AccordionItemHeading>
            <AccordionItemButton>
              <AccordionItemState>
                {({ expanded }) => (
                  <>
                    <span>Utility</span>

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
          <AccordionItemPanel>
            <Utility />
          </AccordionItemPanel>
        </AccordionItem>
      </Accordion>
    </StyledSettings>
  );
};

export default Settings;
