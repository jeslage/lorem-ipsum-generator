import styled, { css } from "styled-components";
import { IconButtonProps } from "./IconButton";

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
  border: 1px solid ${props => props.theme.colors.background};
  color: ${props => props.theme.colors.color};
  background: ${props => props.theme.colors.background};
  transition: background 0.2s ease-in-out;

  &:active,
  &:focus {
    color: ${props => props.theme.colors.hover};
  }

  &:hover {
    background: ${props => props.theme.colors.hover};
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
    fill: ${props => props.theme.colors.color};
  }

  ${props =>
    props.variant === "outlined" &&
    css`
      border-color: ${props => props.theme.colors.color};
      background: none;

      &:hover {
        background: transparent;
      }
    `}
`;

export default StyledIconButton;
