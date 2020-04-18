import styled from "styled-components";

import { fontSize, color } from "../../styles";

const StyledCounter = styled.div`
  display: flex;
  align-items: center;
  margin: 1em 0;

  .counter {
    display: flex;
    align-items: center;
  }

  input {
    border: none;
    border-bottom: 1px solid transparent;
    outline: none;
    display: inline-block;
    max-width: 60px;
    font-size: ${fontSize("m")};
    padding: 5px 10px 4px;
    font-family: inherit;
    text-align: center;
    color: inherit;
    background: none;

    &:focus {
      border-color: ${color("color")};
    }
  }
`;

export default StyledCounter;
