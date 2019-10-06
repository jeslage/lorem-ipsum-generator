import styled, { css } from "styled-components";

const StyledPreset = styled.div`
  margin: 20px 0;
  flex-wrap: wrap;
  display: flex;
  justify-content: flex-end;

  button {
    background: none;
    outline: none;
    border: none;
    margin: 0;
    padding: 0;
    appearance: none;
    cursor: pointer;
  }

  .preset__use {
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

  .preset__remove {
    margin-top: 10px;

    svg {
      fill: ${props => props.theme.colors.color};
      width: 15px;
      height: 15px;
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

  .preset__label {
    font-size: 10px;
    text-transform: uppercase;
    font-weight: bold;
    text-align: left;
    color: ${props => props.theme.colors.color};
    border-right: 1px solid ${props => props.theme.colors.background};
  }

  .preset__value {
    text-align: right;
    font-size: 14px;
    color: ${props => props.theme.colors.color};
  }

  table {
    border-spacing: 0;
    border-collapse: collapse;
    width: 100%;
    background: ${props => props.theme.colors.active};
    border-top: 1px solid ${props => props.theme.colors.background};

    tr,
    td {
      margin: 0;
      outline: none;
      border: 0;
    }

    td {
      padding: 10px 20px;
    }

    tr:first-of-type {
      .preset__label,
      .preset__value {
        border-bottom: 1px solid ${props => props.theme.colors.background};
      }
    }
  }
`;

export default StyledPreset;
