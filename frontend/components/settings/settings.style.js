import styled from "styled-components";
import { mq } from "../../styles/tools";

const StyledSettings = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  width: 90%;
  max-width: 400px;
  height: 100vh;
  max-height: 100vh;
  overflow-y: auto;
  background: ${props => props.theme.colors.background};
  flex-shrink: 0;

  ${mq("m")} {
    position: relative;
  }

  .settings__bar,
  .settings__add-preset {
    position: sticky;
    display: flex;
    bottom: 0;
    z-index: 1;
    background: ${props => props.theme.colors.background};
    border-top: 1px solid ${props => props.theme.colors.active};
    padding: 0 1.5em;

    button {
      width: 100%;

      &:nth-of-type(1) {
        margin-right: 5px;
      }

      &:nth-of-type(2) {
        margin-left: 5px;
      }
    }
  }

  hr {
    margin: 10px 0 20px;
    border: none;
    border-top: 1px solid ${props => props.theme.colors.hover};
  }

  .accordion__item {
    ${"" /* border-bottom: 1px solid ${props => props.theme.colors.border}; */}
  }

  .accordion__button,
  .settings__wrapper {
    padding: 1em 1.5em;
  }

  .accordion__button:hover {
    background: ${props => props.theme.colors.hover};
  }

  .accordion__panel {
    padding: 0 1.5em;
    margin: 1em 0;
  }

  .accordion__heading {
    font-weight: bold;
  }

  .accordion__button {
    display: flex;
    align-items: center;
    outline: none;
    cursor: pointer;

    span {
      flex-grow: 2;
    }

    svg {
      width: 20px;
      height: 20px;
      fill: ${props => props.theme.colors.color};
    }
  }

  .accordion,
  .settings__presets {
    min-height: calc(100vh - 60px);
  }

  .react-tabs__tab-list {
    position: sticky;
    top: 1em;
    text-transform: uppercase;
    font-weight: bold;
    font-size: 11px;
    margin: 1em 2em;
    padding: 0;
    z-index: 9;
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
  }

  .react-tabs__tab-panel--selected {
    display: block;
  }
`;

export default StyledSettings;
