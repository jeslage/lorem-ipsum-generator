import { FC } from "react";
import styled, { css } from "styled-components";

import Icon, { IconTypes } from "../Icon";

import { fontSize, color } from "../../styles";

export interface LabelProps {
  description?: string;
  icon?: IconTypes;
  label?: string;
}

export interface StyledLabelProps {
  readonly hasDescription: boolean;
}

const StyledLabel = styled.span<StyledLabelProps>`
  margin: 0;
  flex-grow: 2;
  padding-right: 5px;
  display: flex;
  color: ${color("color")};
  align-items: center;

  .label {
    font-size: ${fontSize("m")};
  }

  svg {
    width: 20px;
    height: auto;
    margin-right: 15px;
    fill: ${color("border")};
  }

  ${props =>
    props.hasDescription &&
    css`
      .label {
        position: relative;
        display: inline-block;
        padding-bottom: 2px;
        cursor: help;
        border-bottom: 1px dotted ${color("border")};
      }

      .label:before,
      .label:after {
        transform: translateY(-20%);
        -webkit-backface-visibility: hidden;
        backface-visibility: hidden;
        opacity: 0;
        pointer-events: none;
        transition: opacity 0.18s ease-in-out;
        position: absolute;
        box-sizing: border-box;
        z-index: 10;
      }

      .label:before {
        content: "";
        background: ${color("active")};
        height: 15px;
        width: 15px;
        transform: translateY(-35%) rotate(45deg);
        top: -15px;
        left: 0;
        border-radius: 2px;
      }

      .label:after {
        background: ${color("active")};
        color: ${color("color")};
        border-radius: 5px;
        content: attr(aria-label);
        font-size: ${fontSize("m")};
        line-height: 1.5;
        padding: 0.75em 1em;
        white-space: nowrap;
        box-sizing: content-box;
        bottom: 100%;
        left: -20px;
        white-space: initial;
        width: 160px;
      }

      .label:hover:before,
      .label:hover:after,
      .label:focus:before,
      .label:focus:after {
        opacity: 1;
        pointer-events: auto;
      }
    `}
`;

const Label: FC<LabelProps> = ({ description, icon, label }) => (
  <StyledLabel hasDescription={Boolean(description)}>
    {icon && <Icon type={icon} />}
    {label && (
      <span
        className="label"
        aria-label={description || undefined}
        role={description ? "tooltip" : undefined}
      >
        {label}
      </span>
    )}
  </StyledLabel>
);

export default Label;
