import styled from "styled-components";

type StyledPresetProps = {
  readonly isDragging: boolean;
  readonly textTransform: string;
  readonly backgroundColor: string;
  readonly paragraph: any;
  readonly headline: any;
  readonly subline: any;
};

const StyledPreset = styled.div<StyledPresetProps>`
  margin: 20px 0;
  flex-wrap: wrap;
  display: flex;
  justify-content: flex-end;

  .preset__card {
    overflow: hidden;
    display: block;
    width: 100%;
    border-radius: 5px;
    transition: all 0.2s ease-in-out;
    cursor: ${props => (props.isDragging ? "grabbing" : "grab")};
    opacity: ${props => (props.isDragging ? "0.1" : "1")};

    &:hover {
      transform: scale(1.01);
    }
  }

  .preset__content {
    position: relative;
    width: 100%;
    text-align: left;
    margin: 0;
    font-size: inherit;
    background-color: ${({ backgroundColor }) => backgroundColor};
    overflow: hidden;
    padding: 10px 20px;
  }

  .preset__text {
    text-transform: ${props => props.textTransform};
  }

  .preset__paragraph {
    margin: 0;
    white-space: nowrap;
    font-size: ${({ paragraph }) => paragraph.size}px;
    line-height: 1;
    color: ${({ paragraph }) => paragraph.color};
    font-family: ${({ paragraph }) => paragraph.fontFamily};
  }

  h2 {
    margin: 0;
    white-space: nowrap;
    font-size: ${({ headline }) => headline.size}px;
    line-height: 1;
    color: ${({ headline }) => headline.color};
    font-family: ${({ headline }) => headline.fontFamily};
  }

  h3 {
    margin: 0;
    white-space: nowrap;
    font-size: ${({ subline }) => subline.size}px;
    line-height: 1;
    color: ${({ subline }) => subline.color};
    font-family: ${({ subline }) => subline.fontFamily};
  }

  .preset__paragraph,
  h2,
  h3 {
    margin: 10px 0;

    small {
      display: block;
      font-family: Helvetica, Arial, sans-serif;
      font-size: 10px;
      text-transform: uppercase;
      font-weight: normal;
      margin-bottom: 5px;
    }
  }

  .preset__meta {
    display: flex;
    align-items: center;
    padding: 10px 0 0;

    span {
      opacity: 0.5;
      flex-grow: 2;
      color: ${({ paragraph }) => paragraph.color};
      text-transform: uppercase;
      font-family: Helvetica, Arial, sans-serif;
      font-size: 10px;
    }
  }

  .preset__remove {
    background: none;
    outline: none;
    border: 1px solid ${({ paragraph }) => paragraph.color};
    margin: 0;
    padding: 0;
    appearance: none;
    cursor: pointer;
    opacity: 0.5;
    border-radius: 50%;
    width: 20px;
    height: 20px;
    display: flex;
    align-items: center;
    justify-content: center;

    &:hover {
      opacity: 1;
    }

    svg {
      fill: ${({ paragraph }) => paragraph.color};
      width: 10px;
      height: 10px;
    }
  }
`;

export default StyledPreset;
