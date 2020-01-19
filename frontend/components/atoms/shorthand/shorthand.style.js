import styled from "styled-components";
import { getBoxShadow } from "@helper";

const StyledShorthand = styled.div`
  display: flex;
  align-items: center;
  margin: 1.5em 0;

  .shorthand__text {
    flex-grow: 2;
    padding-right: 20px;
  }

  .shorthand__label {
    margin: 0;
    display: flex;
    align-items: center;
    font-size: 14px;

    svg {
      width: 20px;
      height: auto;
      margin-right: 15px;
      fill: ${props => props.theme.colors.tertiary};
    }
  }

  .shorthand__description {
    margin: 0;
    margin-top: 10px;
  }

  .shorthand__shorthand {
    display: flex;
    align-items: center;
  }

  input {
    border-radius: 30px;
    outline: none;
    display: inline-block;
    max-width: 50px;
    padding: 5px 5px 4px;
    margin: 0 5px;
    font-size: 14px;
    font-family: inherit;
    text-align: center;
    color: inherit;
    background: none;
    ${getBoxShadow}

    &:last-of-type {
      margin-right: 0;
    }
  }
`;

export default StyledShorthand;
