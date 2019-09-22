import styled from "styled-components";

const StyledText = styled.div`
  padding: 40px;
  flex-grow: 2;
  height: 100vh;
  max-height: 100vh;
  overflow-y: auto;
  background: ${({ theme }) => theme.backgroundColor.rgba};

  .text__content {
    width: ${({ theme }) => theme.textWidth}%;
  }

  p {
    font-size: ${({ theme }) => theme.paragraph.size}px;
    line-height: ${({ theme }) => theme.paragraph.lineHeight};
    letter-spacing: ${({ theme }) => theme.paragraph.letterSpacing}px;
    font-family: ${({ theme }) => theme.paragraph.fontFamily};
    color: ${({ theme }) => theme.paragraph.color.rgba};
  }

  h2 {
    font-size: ${({ theme }) => theme.headline.size}px;
    line-height: ${({ theme }) => theme.headline.lineHeight};
    letter-spacing: ${({ theme }) => theme.headline.letterSpacing}px;
    font-family: ${({ theme }) => theme.headline.fontFamily};
    color: ${({ theme }) => theme.headline.color.rgba};
  }

  h3 {
    font-size: ${({ theme }) => theme.subline.size}px;
    line-height: ${({ theme }) => theme.subline.lineHeight};
    font-family: ${({ theme }) => theme.subline.fontFamily};
    color: ${({ theme }) => theme.subline.color.rgba};
  }
`;

export default StyledText;
