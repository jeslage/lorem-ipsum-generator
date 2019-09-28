import styled from "styled-components";

const StyledSettings = styled.div`
  width: 400px;
  height: 100vh;
  max-height: 100vh;
  overflow-y: auto;
  background: ${props => props.theme.colors.secondary};
  flex-shrink: 0;

  .settings__bar {
    position: sticky;
    display: flex;
    top: 0;
    z-index: 1;
    background: ${props => props.theme.colors.secondary};
    border-bottom: 1px solid ${props => props.theme.colors.border};
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
    border-top: 1px solid ${props => props.theme.colors.border};
  }

  .accordion__item {
    border-bottom: 1px solid ${props => props.theme.colors.border};

    ${"" /* &:nth-of-type(even) {
      background: ${props => props.theme.colors.border};

      hr {
        border-color: ${props => props.theme.colors.secondary};
      }
    } */}
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
