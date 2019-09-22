import styled from "styled-components";

const StyledSettings = styled.div`
  width: 400px;
  height: 100vh;
  max-height: 100vh;
  overflow-y: auto;
  background: ${props => props.theme.colors.secondary};
  flex-shrink: 0;

  .accordion__item {
    border-bottom: 1px solid ${props => props.theme.colors.border};
  }

  .accordion__button {
    padding: 1em 1.5em;
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
      fill: ${props => props.theme.colors.primary};
    }
  }
`;

export default StyledSettings;
