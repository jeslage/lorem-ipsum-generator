import styled, { css } from "styled-components";
import { TabsProps } from "./Tabs";
import { fontSize, color } from "../../styles";

const StyledTabs = styled.div<Pick<TabsProps, "variant">>`
  flex-grow: 2;
  height: 100%;

  .react-tabs {
    height: 100%;
    display: flex;
    flex-direction: column;
  }

  .react-tabs__tab-list {
    position: sticky;
    top: 0;
    text-transform: uppercase;
    font-weight: bold;
    font-size: ${fontSize("s")};
    margin: 0;
    padding: 1em 2em;
    border-bottom: 1px solid ${color("active")};
    background: ${color("hover")};
    overflow-x: auto;
    width: 100%;
    white-space: nowrap;

    ${props =>
      props.variant === "secondary" &&
      css`
        background: ${color("background")};
        border: none;
      `}
  }

  .react-tabs__tab {
    display: inline-block;
    position: relative;
    list-style: none;
    padding: 0.75em 1.5em;
    margin-right: 0.5em;
    border-radius: 20px;
    cursor: pointer;
    background: ${color("hover")};

    &:hover {
      background: ${color("active")};
    }
  }

  .react-tabs__tab--selected {
    background: ${color("active")};

    &:hover {
      background: ${color("active")};
    }
  }

  .tabs__tab-panel {
    height: 100%;
    display: none;
    flex-grow: 2;
  }

  .react-tabs__tab-panel--selected {
    display: block;
  }
`;

export default StyledTabs;
