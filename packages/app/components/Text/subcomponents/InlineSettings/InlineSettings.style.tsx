import styled, { css } from "styled-components";

import { color } from "../../../../styles";

const StyledInlineSettings = styled.div<{ isOpen: boolean }>`
  position: relative;
  border-radius: 0.75em;

  .inlineSettings__setting {
    position: absolute;
    top: 0;
    left: 0;
    z-index: 1;
  }

  .inlineSettings__content {
    background: ${color("hover")};
    border-radius: 0 0.75em 0.75em 0.75em;
    padding: 1px 1.5em;
  }

  .inlineSettings__button {
    cursor: pointer;
    outline: none;
    background: none;
    border: none;
    width: calc(1.6em + 15px);
    height: calc(1.6em + 15px);
    border-radius: 50%;
    margin: 0;
    padding: 0.8em;
    background: ${color("hover")};
    color: ${color("color")};

    ${props =>
      props.isOpen &&
      css`
        border-radius: 50% 50% 0 0;
      `}

    svg {
      width: 15px;
      height: 15px;
      fill: ${color("color")};
    }
  }
`;

export default StyledInlineSettings;
