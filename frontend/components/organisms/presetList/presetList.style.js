import styled from "styled-components";

const StyledPresetList = styled.div`
  height: calc(100vh - 52px);
  display: flex;
  flex-direction: column;

  .presetList__presets {
    flex-grow: 2;
    overflow-y: auto;
    padding: 1em 1.5em;
  }

  .presetList__bar {
    flex-shrink: 0;
    position: sticky;
    display: flex;
    bottom: 0;
    background: ${props => props.theme.colors.hover};
    border-top: 1px solid ${props => props.theme.colors.active};
    padding: 0 1.5em;

    button {
      width: 100%;
    }
  }
`;

export default StyledPresetList;