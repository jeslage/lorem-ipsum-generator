import styled from "styled-components";

const StyledPreset = styled.div`
  button {
    background: none;
    outline: none;
    border: none;
    appearance: none;
    cursor: pointer;
  }

  .preset__remove {
    padding: 0;
    margin: 0;
    border: 1px solid ${props => props.theme.colors.primary};
    width: 30px;
    height: 30px;
    border-radius: 15px;
    display: inline-flex;
    align-items: center;
    justify-content: center;

    svg {
      fill: ${props => props.theme.colors.primary};
      width: 22px;
      height: 22px;
      transform: rotate(45deg);
    }
  }

  .preset__content {
    width: 100%;
    text-align: left;
    margin: 0;
    font-size: inherit;
    background-color: ${({ backgroundColor }) => backgroundColor};
    overflow: hidden;
    padding: 10px;
  }

  .preset__paragraph {
    margin: 0;
    white-space: nowrap;
    font-size: ${({ paragraph }) => paragraph.size}px;
    letter-spacing: ${({ paragraph }) => paragraph.letterSpacing}px;
    line-height: ${({ paragraph }) => paragraph.lineHeight};
    color: ${({ paragraph }) => paragraph.color};
    font-family: ${({ paragraph }) => paragraph.fontFamily};
  }

  h2 {
    margin: 0;
    white-space: nowrap;
    font-size: ${({ headline }) => headline.size}px;
    line-height: ${({ headline }) => headline.lineHeight};
    color: ${({ headline }) => headline.color};
    font-family: ${({ headline }) => headline.fontFamily};
  }

  h3 {
    margin: 0;
    white-space: nowrap;
    font-size: ${({ subline }) => subline.size}px;
    line-height: ${({ subline }) => subline.lineHeight};
    color: ${({ subline }) => subline.color};
    font-family: ${({ subline }) => subline.fontFamily};
  }
`;

export default StyledPreset;
