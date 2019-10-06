import React, { useState } from "react";

import { Tab, Tabs, TabList, TabPanel, resetIdCounter } from "react-tabs";

// Subcomponents
import Settings from "../settings/settings";

import StyledSidebar from "./sidebar.style";
import PresetList from "../presetList/presetList";
import CommunityList from "../communityList/communityList";

const Sidebar = props => {
  const [wide, setWide] = useState(false);
  const items = [
    { label: "Settings", content: <Settings /> },
    { label: "Presets", content: <PresetList /> },
    { label: "Featured", content: <CommunityList />, wide: true }
  ];

  if (!process.browser) resetIdCounter();

  const handleTabChange = index => {
    if (items[index].wide) {
      setWide(true);
    } else {
      setWide(false);
    }
  };

  return (
    <StyledSidebar wide={wide} {...props}>
      <Tabs onSelect={index => handleTabChange(index)}>
        <TabList>
          {items.map((item, index) => (
            <Tab key={index}>{item.label}</Tab>
          ))}
        </TabList>

        {items.map((item, index) => (
          <TabPanel className="sidebar__tab-panel" key={index}>
            {item.content}
          </TabPanel>
        ))}
      </Tabs>
    </StyledSidebar>
  );
};

export default Sidebar;
