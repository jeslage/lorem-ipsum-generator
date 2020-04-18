import styled from "styled-components";

import { fontSize, color } from "../../styles";

const StyledShorthand = styled.div`
  display: flex;
  align-items: center;
  margin: 1em 0;

  .shorthand {
    display: flex;
    align-items: center;
  }

  input {
    border: 1px solid ${color("color")};
    border-radius: 30px;
    outline: none;
    display: inline-block;
    max-width: 50px;
    padding: 5px 5px 4px;
    margin: 0 5px;
    font-size: ${fontSize("m")};
    font-family: inherit;
    text-align: center;
    color: inherit;
    background: none;

    &:last-of-type {
      margin-right: 0;
    }
  }
`;

export default StyledShorthand;
