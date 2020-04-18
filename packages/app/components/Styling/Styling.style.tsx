import styled from "styled-components";

const StyledStyling = styled.div`
  height: calc(100vh - 52px);
  display: flex;
  flex-direction: column;

  .styling__accordion {
    flex-grow: 2;
    overflow-y: auto;
  }

  .styling__bar {
    flex-shrink: 0;
    background: ${props => props.theme.colors.hover};
    border-top: 1px solid ${props => props.theme.colors.active};
  }

  .styling__buttons {
    padding: 0 1.5em;
    display: flex;

    button {
      margin: 10px 0;

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
    padding: 0;
  }

  .accordion__button {
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
`;

export default StyledStyling;
