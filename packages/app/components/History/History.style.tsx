import styled from "styled-components";
import { fontSize, color } from "../../styles";

const StyledHistory = styled.div`
  .history__list {
    height: 200px;
    overflow-y: auto;
    font-size: ${fontSize("m")};
    display: flex;
    flex-direction: column;
    border-bottom: 1px solid ${color("active")};
    border-top: 1px solid ${color("active")};

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
    color: ${color("color")};
    text-align: left;
    background: ${color("hover")};
    border-bottom: 1px solid ${color("active")};

    &.inactive {
      opacity: 0.5;
    }

    &.current {
      background: ${color("active")};
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
    font-size: ${fontSize("s")};
    text-transform: uppercase;
    color: ${color("color")};
    background: ${color("active")};
    margin: 0;

    svg {
      height: 15px;
      width: 15px;
      margin-right: 5px;
      fill: ${color("color")};
    }
  }
`;

export default StyledHistory;
