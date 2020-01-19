import styled, { css } from "styled-components";

const StyledButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  outline: none;
  background: none;
  text-transform: uppercase;
  margin: 1em 0;
  padding: 12px 20px;
  text-align: center;
  font-weight: bold;
  font-size: 11px;
  cursor: pointer;
  border-radius: 30px;
  width: 100%;
  border: 1px solid ${props => props.theme.colors.primary};
  color: ${props => props.theme.colors.primary};

  &:active {
    color: ${props => props.theme.colors.primary};
  }

  &[disabled] {
    opacity: 0.3;
  }

  svg {
    height: 15px;
    width: auto;
    fill: ${props => props.theme.colors.primary};

    &.button__icon-before {
      margin-right: 10px;
    }

    &.button__icon-after {
      margin-left: 10px;
    }
  }

  ${props =>
    props.secondary &&
    css`
      border: none;
      border-radius: 0;
      margin: 0;
    `}
`;

export default StyledButton;
