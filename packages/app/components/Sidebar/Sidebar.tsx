import React, { FC } from "react";
import { Tab, Tabs, TabList, TabPanel, resetIdCounter } from "react-tabs";

// Subcomponents
import Settings from "../Settings";
import PresetList from "../PresetList";
import FeaturedList from "../FeaturedList";
import Styling from "../Styling";
import About from "../About";

import StyledSidebar from "./Sidebar.style";

export interface SidebarProps {
  className?: string;
}

const Sidebar: FC<SidebarProps> = ({ className }) => {
  const items = [
    { label: "Settings", content: <Settings /> },
    { label: "Styling", content: <Styling /> },
    { label: "Presets", content: <PresetList /> },
    { label: "Featured", content: <FeaturedList /> },
    { label: "About", content: <About /> }
  ];

  if (!process.browser) resetIdCounter();

  return (
    <StyledSidebar className={className}>
      <Tabs>
        <TabList>
          {items.map(item => (
            <Tab key={item.label}>{item.label}</Tab>
          ))}
        </TabList>
        <div className="sidebar__tab-panels">
          {items.map((item, index) => (
            <TabPanel className="sidebar__tab-panel" key={index}>
              {item.content}
            </TabPanel>
          ))}
        </div>
      </Tabs>
    </StyledSidebar>
  );
};

export default Sidebar;
