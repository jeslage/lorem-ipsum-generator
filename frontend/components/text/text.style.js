import styled from "styled-components";

const StyledText = styled.div`
  padding: 40px;
  flex-grow: 2;
  height: 100vh;
  max-height: 100vh;
  overflow-y: auto;

  p {
    font-size: ${props => props.theme.paragraph.size}px;
    line-height: ${props => props.theme.paragraph.lineHeight};
    letter-spacing: ${props => props.theme.paragraph.letterSpacing}px;
    font-family: ${props => props.theme.paragraph.fontFamily};
  }

  h2 {
    font-size: ${props => props.theme.headline.size}px;
    line-height: ${props => props.theme.headline.lineHeight};
    letter-spacing: ${props => props.theme.headline.letterSpacing}px;
    font-family: ${props => props.theme.headline.fontFamily};
  }

  h3 {
    font-size: ${props => props.theme.subline.size}px;
    line-height: ${props => props.theme.subline.lineHeight};
    font-family: ${props => props.theme.subline.fontFamily};
  }
`;

export default StyledText;
