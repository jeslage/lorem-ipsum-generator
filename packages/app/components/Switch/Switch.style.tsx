import styled from "styled-components";
import { SwitchProps } from "./switch";

type StyledSwitchProps = Pick<SwitchProps, "isActive">;

const StyledSwitch = styled.div<StyledSwitchProps>`
  display: flex;
  align-items: center;
  margin: 1.5em 0;

  .switch__label {
    flex-grow: 2;
    margin: 0;
    display: flex;
    align-items: center;
    font-size: 14px;
    color: ${props => props.theme.colors.color};

    svg {
      width: 20px;
      height: auto;
      margin-right: 15px;
      fill: ${props => props.theme.colors.border};
    }
  }

  button {
    position: relative;
    outline: none;
    margin: 0;
    padding: 0;
    appearance: none;
    border: 1px solid ${props => props.theme.colors.color};
    width: 60px;
    height: 30px;
    border-radius: 30px;
    cursor: pointer;
    background-color: ${props =>
      props.isActive ? "transparent" : "transparent"};
    will-change: background-color;
    transition: background-color 0.2s ease-in-out;

    span {
      position: absolute;
      top: 4px;
      left: 4px;
      display: block;
      width: 20px;
      height: 20px;
      border-radius: 20px;
      background: ${props => props.theme.colors.color};
      transform: translateX(${props => (props.isActive ? "30px" : "0")});
      will-change: transform;
      transition: transform 0.2s ease-in-out;

      svg {
        fill: ${props => props.theme.colors.background};
        fill-opacity: 0;
        stroke: ${props => props.theme.colors.background};
        stroke-width: 3;
        stroke-linecap: round;
        stroke-linejoin: round;
      }
    }
  }
`;

export default StyledSwitch;
