import styled from "styled-components";

import { getBoxShadow } from "@helper";
const StyledSwitch = styled.div`
  display: flex;
  align-items: center;
  margin: 1.5em 0;

  .switch__label {
    flex-grow: 2;
    margin: 0;
    display: flex;
    align-items: center;
    font-size: 14px;
    color: ${props => props.theme.colors.primary};

    svg {
      width: 20px;
      height: auto;
      margin-right: 15px;
      fill: ${props => props.theme.colors.tertiary};
    }
  }

  button {
    position: relative;
    outline: none;
    margin: 0;
    padding: 0;
    appearance: none;
    width: 60px;
    height: 30px;
    border-radius: 30px;
    cursor: pointer;
    background-color: ${props =>
      props.active ? "transparent" : "transparent"};
    will-change: background-color;
    transition: background-color 0.2s ease-in-out;
    border: 1px solid ${props => props.theme.colors.primary};
    ${getBoxShadow}

    span {
      position: absolute;
      top: 4px;
      left: 4px;
      display: block;
      width: 20px;
      height: 20px;
      border-radius: 20px;
      background: ${props => props.theme.colors.primary};
      transform: translateX(${props => (props.active ? "30px" : "0")});
      will-change: transform;
      transition: transform 0.2s ease-in-out;

      svg {
        fill: ${props => props.theme.colors.secondary};
        fill-opacity: 0;
        stroke: ${props => props.theme.colors.secondary};
        stroke-width: 3;
        stroke-linecap: round;
        stroke-linejoin: round;
      }
    }
  }
`;

export default StyledSwitch;
