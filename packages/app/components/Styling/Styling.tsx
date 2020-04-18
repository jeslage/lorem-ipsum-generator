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

import StyledStyling from "./Styling.style";

const Styling = () => {
  const items = [
    { label: "General", content: <General /> },
    { label: "Paragraph", content: <Paragraph /> },
    { label: "Headline", content: <Headline /> },
    { label: "Subline", content: <Subline /> },
    { label: "Lists", content: <List /> },
    { label: "Utility", content: <Utility /> }
  ];

  return (
    <StyledStyling>
      <div className="styling__accordion">
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

      <div className="styling__bar">
        <History />
        <div className="styling__buttons">
          <Bar />
        </div>
      </div>
    </StyledStyling>
  );
};

export default Styling;
