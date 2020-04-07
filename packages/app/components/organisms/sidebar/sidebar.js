import React from "react";

import { Tab, Tabs, TabList, TabPanel, resetIdCounter } from "react-tabs";

// Subcomponents
import Settings from "../settings/settings";
import PresetList from "../presetList/presetList";
import CommunityList from "../communityList/communityList";

import StyledSidebar from "./sidebar.style";
import About from "@organisms/about/about";

const Sidebar = props => {
  const items = [
    { label: "Settings", content: <Settings /> },
    { label: "Presets", content: <PresetList /> },
    { label: "Featured", content: <CommunityList /> },
    { label: "About", content: <About /> }
  ];

  if (!process.browser) resetIdCounter();

  return (
    <StyledSidebar {...props}>
      <Tabs>
        <TabList>
          {items.map((item, index) => (
            <Tab key={index}>{item.label}</Tab>
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
