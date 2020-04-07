import styled, { css } from "styled-components";

import { hexToRgbA } from "@helper";

const StyledInlineSetting = styled.div`
  position: relative;
  border-radius: 0.75em;

  .inlineSetting__setting {
    position: absolute;
    top: 0;
    left: 0;
    z-index: 1;
  }

  .inlineSetting__content {
    background: ${props => hexToRgbA(props.theme.colors.hover, 0.98)};
    border-radius: 0 0.75em 0.75em 0.75em;
    padding: 1px 1.5em;
  }

  .inlineSetting__button {
    cursor: pointer;
    outline: none;
    background: none;
    border: none;
    width: calc(1.6em + 15px);
    height: calc(1.6em + 15px);
    border-radius: 50%;
    margin: 0;
    padding: 0.8em;
    background: ${props => hexToRgbA(props.theme.colors.hover, 0.98)};
    color: ${props => props.theme.colors.color};

    ${props =>
      props.isOpen &&
      css`
        border-radius: 50% 50% 0 0;
      `}

    svg {
      width: 15px;
      height: 15px;
    }
  }
`;

export default StyledInlineSetting;
