import React, { FC } from "react";

// Subcomponents
import { Settings, Styles } from "../Settings";
import PresetList from "../PresetList";
import FeaturedList from "../FeaturedList";
import About from "../About";
import Tabs from "../Tabs";

import StyledSidebar from "./Sidebar.style";

export interface SidebarProps {
  className?: string;
}

const Sidebar: FC<SidebarProps> = ({ className }) => {
  const items = [
    { label: "Settings", content: <Settings /> },
    { label: "Styles", content: <Styles /> },
    { label: "Presets", content: <PresetList /> },
    { label: "Featured", content: <FeaturedList /> },
    { label: "About", content: <About /> }
  ];

  return (
    <StyledSidebar className={className}>
      <Tabs items={items} />
    </StyledSidebar>
  );
};

export default Sidebar;
