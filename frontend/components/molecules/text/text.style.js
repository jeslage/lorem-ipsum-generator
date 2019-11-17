import styled from "styled-components";

const getStyling = obj => `
  font-size: ${obj.size}px;
  line-height: ${obj.lineHeight};
  ${obj.letterSpacing ? `letter-spacing: ${obj.letterSpacing}px` : ""};
  font-family: ${obj.fontFamily};
  color: ${obj.color};
  ${obj.textAlign ? `text-align: ${obj.textAlign}` : ""};
  margin: ${obj.margin.top}px ${obj.margin.right}px ${obj.margin.bottom}px ${
  obj.margin.left
}px;

`;

const StyledText = styled.div`
  padding: 40px;
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
  }

  p {
    ${({ theme }) => getStyling(theme.paragraph)}
  }

  ul,
  ol {
    ${({ theme }) => getStyling(theme.paragraph)}
  }

  h2 {
    ${({ theme }) => getStyling(theme.headline)}
  }

  h3 {
    ${({ theme }) => getStyling(theme.subline)}
  }
`;

export default StyledText;
