import styled from "styled-components";
import {
  ParagraphSettings,
  HeadlineSettings,
  SublineSettings
} from "../../contexts/SettingsProvider/definitions";

import { fontSize, color } from "../../styles";

type StyledPresetProps = {
  readonly backgroundColor: string;
  readonly paragraph: ParagraphSettings;
  readonly headline: HeadlineSettings;
  readonly subline: SublineSettings;
};

const StyledPreset = styled.div<StyledPresetProps>`
  margin: 20px 0;
  flex-wrap: wrap;
  display: flex;
  min-height: 200px;
  border-radius: 3px;
  overflow: hidden;
  justify-content: flex-end;

  .preset__card {
    display: block;
    width: 100%;
    border-radius: 5px;
  }

  .preset__content {
    position: relative;
    width: 100%;
    height: 100%;
    text-align: left;
    margin: 0;
    font-size: inherit;
    background-color: ${({ backgroundColor }) => backgroundColor};
    display: flex;
    flex-direction: column;
  }

  .preset__text {
    padding: 10px 20px;
    appearance: none;
    border: 0;
    margin: 0;
    text-align: left;
    background: transparent;
    cursor: pointer;
    flex-grow: 2;
    display: flex;
    flex-direction: column;
    overflow: hidden;
    border-bottom: 1px solid ${color("background")};
  }

  .preset__paragraph {
    margin: 0;
    white-space: nowrap;
    font-size: ${({ paragraph }) => paragraph.size}px;
    line-height: 1;
    text-transform: ${({ paragraph }) => paragraph.textTransform};
    color: ${({ paragraph }) => paragraph.color};
    font-family: ${({ paragraph }) => paragraph.fontFamily};
  }

  h2 {
    margin: 0;
    white-space: nowrap;
    font-size: ${({ headline }) => headline.size}px;
    line-height: 1;
    text-transform: ${({ headline }) => headline.textTransform};
    color: ${({ headline }) => headline.color};
    font-family: ${({ headline }) => headline.fontFamily};
  }

  h3 {
    margin: 0;
    white-space: nowrap;
    font-size: ${({ subline }) => subline.size}px;
    line-height: 1;
    text-transform: ${({ subline }) => subline.textTransform};
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
      font-size: ${fontSize("s")};
      text-transform: uppercase;
      font-weight: normal;
      margin-bottom: 5px;
    }
  }

  .preset__meta {
    display: flex;
    align-items: center;
    padding: 10px 20px 10px;
  }

  .preset__meta-text {
    flex-grow: 2;
    color: ${({ paragraph }) => paragraph.color};
    text-transform: uppercase;
    font-family: Helvetica, Arial, sans-serif;
    font-size: ${fontSize("s")};
  }

  .preset__options {
    justify-content: flex-end;
  }
`;

export default StyledPreset;
