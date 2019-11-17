import styled from "styled-components";
import { mq } from "@styles/tools";

const StyledSidebar = styled.aside`
  position: fixed;
  top: 0;
  right: 0;
  width: 90%;
  max-width: 385px;
  transition: width 0.2s ease-in-out;
  background: ${props => props.theme.colors.background};
  overflow: hidden;

  ${mq("m")} {
    position: relative;
  }

  .react-tabs__tab-list {
    position: sticky;
    top: 0;
    text-transform: uppercase;
    font-weight: bold;
    font-size: 11px;
    margin: 0;
    padding: 1em 2em;
    border-bottom: 1px solid ${props => props.theme.colors.active};
    background: ${props => props.theme.colors.hover};
    overflow-x: auto;
    width: 100%;
    white-space: nowrap;
  }

  .react-tabs__tab {
    display: inline-block;
    position: relative;
    list-style: none;
    padding: 0.75em 1.5em;
    margin-right: 0.5em;
    border-radius: 20px;
    cursor: pointer;
    background: ${props => props.theme.colors.hover};

    &:hover {
      background: ${props => props.theme.colors.active};
    }
  }

  .react-tabs__tab--selected {
    background: ${props => props.theme.colors.active};

    &:hover {
      background: ${props => props.theme.colors.active};
    }
  }

  .react-tabs__tab-panel {
    display: none;
    height: calc(100vh - 52px);
    max-height: calc(100vh - 52px);
  }

  .react-tabs__tab-panel--selected {
    display: block;
  }
`;

export default StyledSidebar;
