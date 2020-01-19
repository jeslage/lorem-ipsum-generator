import styled from "styled-components";

import { getBoxShadow } from "@helper";

const StyledCounter = styled.div`
  display: flex;
  align-items: center;
  margin: 1.5em 0;

  .counter__text {
    flex-grow: 2;
    padding-right: 20px;
  }

  .counter__label {
    margin: 0;
    display: flex;
    font-size: 14px;
    align-items: center;
    color: ${props => props.theme.colors.primary};

    svg {
      width: 20px;
      height: auto;
      margin-right: 15px;
      fill: ${props => props.theme.colors.tertiary};
    }
  }

  .counter__description {
    margin: 0;
    margin-top: 10px;
  }

  .counter__counter {
    display: flex;
    align-items: center;
  }

  button {
    padding: 0;
    margin: 0;
    outline: none;
    background: ${props => props.theme.colors.secondary};

    width: 30px;
    height: 30px;
    border-radius: 15px;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    ${getBoxShadow}

    &:hover {
      background: ${props => props.theme.colors.hover};
    }

    &[disabled] {
      opacity: 0.2;
      pointer-events: none;
    }

    svg {
      fill: ${props => props.theme.colors.primary};
      width: 22px;
      height: 22px;
    }
  }

  span {
    margin: 0 5px;
  }

  input {
    border: none;
    border-bottom: 1px solid transparent;
    outline: none;
    display: inline-block;
    max-width: 60px;
    height: 30px;
    font-size: 14px;
    padding: 3px 10px 6px;
    font-family: inherit;
    text-align: center;
    color: inherit;
    background: none;
    border-radius: 15px;
    ${getBoxShadow}
  }
`;

export default StyledCounter;
