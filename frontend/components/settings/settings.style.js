import styled from "styled-components";

const StyledSettings = styled.div`
  width: 400px;
  height: 100vh;
  max-height: 100vh;
  overflow-y: auto;
  background: ${props => props.theme.colors.tertiary};
  flex-shrink: 0;
  border-left: 2px solid ${props => props.theme.colors.secondary};

  .accordion__item {
    border-bottom: 2px solid ${props => props.theme.colors.secondary};
  }

  .accordion__button,
  .accordion__panel {
    padding: 20px;
  }

  .accordion__heading {
    text-transform: uppercase;
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
      fill: ${props => props.theme.colors.secondary};
    }
  }
`;

export default StyledSettings;
