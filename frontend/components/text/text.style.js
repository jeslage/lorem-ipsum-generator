import styled from "styled-components";

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
    font-size: ${({ theme }) => theme.paragraph.size}px;
    line-height: ${({ theme }) => theme.paragraph.lineHeight};
    letter-spacing: ${({ theme }) => theme.paragraph.letterSpacing}px;
    font-family: ${({ theme }) => theme.paragraph.fontFamily};
    color: ${({ theme }) => theme.paragraph.color};

    margin: ${({
      theme: {
        paragraph: { margin }
      }
    }) =>
      `${margin.top}px ${margin.right}px ${margin.bottom}px ${margin.left}px`};

    &:before {
      content: "<p>";
    }
  }

  ul,
  ol {
    margin: ${({
      theme: {
        paragraph: { margin }
      }
    }) =>
      `${margin.top}px ${margin.right}px ${margin.bottom}px ${margin.left}px`};
  }

  ul:before {
    content: "<ul>";
  }

  ol:before {
    content: "<ol>";
  }

  li {
    font-size: ${({ theme }) => theme.paragraph.size}px;
    line-height: ${({ theme }) => theme.paragraph.lineHeight};
    letter-spacing: ${({ theme }) => theme.paragraph.letterSpacing}px;
    font-family: ${({ theme }) => theme.paragraph.fontFamily};
    color: ${({ theme }) => theme.paragraph.color};
  }

  h2 {
    font-size: ${({ theme }) => theme.headline.size}px;
    line-height: ${({ theme }) => theme.headline.lineHeight};
    letter-spacing: ${({ theme }) => theme.headline.letterSpacing}px;
    font-family: ${({ theme }) => theme.headline.fontFamily};
    color: ${({ theme }) => theme.headline.color};

    margin: ${({
      theme: {
        headline: { margin }
      }
    }) =>
      `${margin.top}px ${margin.right}px ${margin.bottom}px ${margin.left}px`};

    &:before {
      content: "<h2>";
      left: -32px;
    }
  }

  h3 {
    font-size: ${({ theme }) => theme.subline.size}px;
    line-height: ${({ theme }) => theme.subline.lineHeight};
    font-family: ${({ theme }) => theme.subline.fontFamily};
    color: ${({ theme }) => theme.subline.color};

    margin: ${({
      theme: {
        subline: { margin }
      }
    }) =>
      `${margin.top}px ${margin.right}px ${margin.bottom}px ${margin.left}px`};

    &:before {
      content: "<h3>";
      left: -32px;
    }
  }
`;

export default StyledText;
