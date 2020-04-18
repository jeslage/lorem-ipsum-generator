import React, { FC } from "react";
import { Tab, Tabs, TabList, TabPanel, resetIdCounter } from "react-tabs";

import StyledTabs from "./Tabs.style";

type TabItem = {
  label: string;
  content: JSX.Element;
};

export interface TabsProps {
  items: TabItem[];
  variant?: "primary" | "secondary";
  className?: string;
  panelClassName?: string;
}

const CustomTabs: FC<TabsProps> = ({
  items,
  variant = "primary",
  className = "",
  panelClassName = ""
}) => {
  if (!process.browser) resetIdCounter();

  return (
    <StyledTabs className={className} variant={variant}>
      <Tabs forceRenderTabPanel>
        <TabList>
          {items.map(item => (
            <Tab key={item.label}>{item.label}</Tab>
          ))}
        </TabList>

        {items.map((item, index) => (
          <TabPanel className={`tabs__tab-panel ${panelClassName}`} key={index}>
            {item.content}
          </TabPanel>
        ))}
      </Tabs>
    </StyledTabs>
  );
};

export default CustomTabs;
