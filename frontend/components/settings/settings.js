import React from "react";
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
  AccordionItemState
} from "react-accessible-accordion";

import SvgSprite from "../svgSprite/svgSprite";

// Subcomponents
import Paragraph from "./subcomponents/paragraph";
import Headline from "./subcomponents/headline";
import Subline from "./subcomponents/subline";
import Utility from "./subcomponents/utility";
import General from "./subcomponents/general";
import Presets from "./subcomponents/presets";
import Bar from "./subcomponents/bar";

import StyledSettings from "./settings.style";

import MinusIcon from "../../icons/minus.svg";
import PlusIcon from "../../icons/plus.svg";

const Settings = () => {
  const items = [
    { label: "General", content: <General /> },
    { label: "Paragraph", content: <Paragraph /> },
    { label: "Headline", content: <Headline /> },
    { label: "Subline", content: <Subline /> },
    { label: "Utility", content: <Utility /> },
    { label: "Presets", content: <Presets /> }
  ];
  return (
    <StyledSettings>
      <div className="settings__bar">
        <Bar />
      </div>
      <Accordion allowZeroExpanded allowMultipleExpanded>
        {items.map((item, index) => (
          <AccordionItem key={item.label} uuid={`${index}`}>
            <AccordionItemHeading>
              <AccordionItemButton>
                <AccordionItemState>
                  {({ expanded }) => (
                    <>
                      <span>{item.label}</span>

                      <SvgSprite icon={expanded ? MinusIcon : PlusIcon} />
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
