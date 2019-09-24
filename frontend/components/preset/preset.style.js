import styled, { css } from "styled-components";

const StyledPreset = styled.div`
  border-radius: 5px;
  overflow: hidden;
  margin-bottom: 20px;

  button {
    background: none;
    outline: none;
    border: none;
    appearance: none;
    cursor: pointer;
    padding: 0;
    margin: 0 10px;
    color: inherit;
    text-transform: uppercase;
    font-weight: bold;
    width: 30px;
    height: 30px;
    border-radius: 15px;
    border: 1px solid ${props => props.theme.colors.secondary};
    display: inline-flex;
    align-items: center;
    justify-content: center;

    svg {
      fill: ${props => props.theme.colors.secondary};
      width: 22px;
      height: 22px;
    }

    &.preset__remove svg {
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

    .preset__buttons {
      display: flex;
      align-items: center;
      justify-content: space-evenly;
      transition: opacity 0.2s ease-in-out;
      opacity: 0;
      position: absolute;
      border-radius: 5px 5px 0 0;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background: ${props => props.theme.colors.primary};
      color: ${props => props.theme.colors.secondary};
    }

    &:hover .preset__buttons {
      opacity: 1;
    }
  }

  .preset__text {
    ${props =>
      props.lowercase &&
      css`
        text-transform: lowercase;
      `}

    ${props =>
      props.uppercase &&
      css`
        text-transform: uppercase;
      `}
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
      font-family: Helvetica, Arial, sans-serif;
      font-size: 10px;
      text-transform: uppercase;
      font-weight: normal;
      margin-left: 10px;
    }
  }

  .preset__label {
    font-size: 10px;
    text-transform: uppercase;
    font-weight: bold;
    color: ${props => props.theme.colors.primary};
    border-right: 1px solid ${props => props.theme.colors.secondary};
  }

  .preset__value {
    text-align: right;
    font-size: 14px;
    color: ${props => props.theme.colors.primary};
  }

  table {
    border-spacing: 0;
    border-collapse: collapse;
    width: 100%;
    background: ${props => props.theme.colors.background};
    border-top: 1px solid ${props => props.theme.colors.secondary};

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
        border-bottom: 1px solid ${props => props.theme.colors.secondary};
      }
    }
  }
`;

export default StyledPreset;
