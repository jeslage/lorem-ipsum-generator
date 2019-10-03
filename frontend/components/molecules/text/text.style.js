import styled from "styled-components";

const getStyling = obj => `
  font-size: ${obj.size}px;
  line-height: ${obj.lineHeight};
  ${obj.letterSpacing ? `letter-spacing: ${obj.letterSpacing}px` : ""};
  font-family: ${obj.fontFamily};
  color: ${obj.color};
  margin: ${obj.margin.top}px ${obj.margin.right}px ${obj.margin.bottom}px ${
  obj.margin.left
}px
`;

const StyledText = styled.div`
  padding: 40px;
  flex-grow: 2;
  height: 100vh;
  max-height: 100vh;
  overflow-y: auto;
  background: ${({ theme }) => theme.backgroundColor};

  .text__content {
    width: ${({ theme }) => theme.textWidth}%;
  }

  .text__copy {
    width: auto;
    display: inline-flex;
    align-items: center;

    svg {
      width: 15px;
      height: auto;
      margin-right: 10px;
    }
  }

  p,
  h2,
  h3,
  ul,
  ol {
    position: relative;

    &:before {
      visibility: hidden;
      position: absolute;
      left: -30px;
      font-size: 12px;
      line-height: 1;
      font-weight: normal;
      margin: 0;
      top: 50%;
      color: #000;
      transform: translateY(-50%) rotate(-90deg);
    }

    &:hover {
      &:before {
        visibility: visible;
      }
    }
  }

  p {
    ${({ theme }) => getStyling(theme.paragraph)}

    &:before {
      content: "<p>";
    }

    &.text__tag:before {
      display: none;
    }
  }

  ul,
  ol {
    ${({ theme }) => getStyling(theme.paragraph)}
  }

  ul:before {
    content: "<ul>";
  }

  ol:before {
    content: "<ol>";
  }

  h2 {
    ${({ theme }) => getStyling(theme.headline)}

    &:before {
      content: "<h2>";
      left: -32px;
    }
  }

  h3 {
    ${({ theme }) => getStyling(theme.subline)}

    &:before {
      content: "<h3>";
      left: -32px;
    }
  }
`;

export default StyledText;
