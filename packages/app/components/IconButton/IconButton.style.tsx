import styled, { css } from "styled-components";
import { IconButtonProps } from "./IconButton";
import { color } from "../../styles";

type StyledIconButtonProps = Pick<IconButtonProps, "variant" | "size">;

const StyledIconButton = styled.button<StyledIconButtonProps>`
  display: block;
  outline: none;
  background: none;
  text-transform: uppercase;
  padding: 0px;
  margin: 0;
  text-align: center;
  flex-shrink: 0;
  cursor: pointer;
  border-radius: 30px;
  border: 1px solid ${color("hover")};
  color: ${color("color")};
  background: ${color("hover")};
  transition: all 0.2s ease-in-out;

  &:active,
  &:focus {
    color: ${color("hover")};
  }

  &:hover {
    border-color: ${color("active")};
    background: ${color("active")};
  }

  &[disabled] {
    pointer-events: none;
    opacity: 0.5;
  }

  span {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 25px;
    width: 25px;

    ${props =>
      props.size === "large" &&
      css`
        height: 42px;
        width: 42px;
      `}
  }

  svg {
    height: 15px;
    width: 15px;
    fill: ${color("color")};
  }

  ${props =>
    props.variant === "secondary" &&
    css`
      border: 1px solid ${color("background")};
      background: ${color("background")};
    `}

  ${props =>
    props.variant === "outlined" &&
    css`
      border-color: ${color("color")};
      background: none;

      &:hover {
        border-color: ${color("color")};
      }
    `}
`;

export default StyledIconButton;
