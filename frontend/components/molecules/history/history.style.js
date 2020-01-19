import styled from "styled-components";

const StyledHistory = styled.div`
  .history__list {
    height: 200px;
    overflow-y: auto;
    font-size: 12px;
    display: flex;
    flex-direction: column;
    border-bottom: 1px solid ${props => props.theme.colors.active};
    border-top: 1px solid ${props => props.theme.colors.active};

    p {
      text-align: center;
      padding: 1em 1.5em;
    }
  }

  .history__entry {
    flex-shrink: 0;
    display: flex;
    outline: none;
    border: none;
    appearance: none;
    cursor: pointer;
    padding: 10px 2em;
    margin: 0;
    color: ${props => props.theme.colors.primary};
    text-align: left;
    background: ${props => props.theme.colors.hover};
    border-bottom: 1px solid ${props => props.theme.colors.active};

    &.inactive {
      opacity: 0.5;
    }

    &.current {
      background: ${props => props.theme.colors.active};
      border: none;
    }

    span:nth-of-type(1) {
      flex-grow: 2;
    }
  }

  .history__buttons {
    display: flex;
  }

  .history__toggle {
    outline: none;
    border: none;
    appearance: none;
    background: none;
    cursor: pointer;
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    font-weight: bold;
    font-size: 11px;
    text-transform: uppercase;
    color: ${props => props.theme.colors.primary};
    background: ${props => props.theme.colors.active};
    margin: 0;

    svg {
      height: 15px;
      width: 15px;
      margin-right: 5px;
      fill: ${props => props.theme.colors.primary};
    }
  }
`;

export default StyledHistory;
