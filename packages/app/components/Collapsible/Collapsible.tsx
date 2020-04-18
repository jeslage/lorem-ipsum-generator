import { useState, FC } from "react";
import styled, { css } from "styled-components";

import IconButton from "../IconButton";

import { fontSize, color } from "../../styles";

const StyledCollapsible = styled.div<Pick<CollapsibleProps, "variant">>`
  padding: 1em 1.5em;

  ${props =>
    props.variant === "secondary" &&
    css`
      background: ${color("hover")};
    `}

  .collapsible__label {
    display: flex;
    align-items: center;
    color: ${color("border")};
    position: relative;

    p {
      flex-grow: 2;
      display: flex;
      margin: 0;
      align-items: center;
      font-size: ${fontSize("m")};
      text-transform: uppercase;
      font-weight: bold;
      letter-spacing: 1px;
    }
  }

  .collapsible__content {
    display: none;

    &--visible {
      display: block;
    }
  }
`;

export interface CollapsibleProps {
  label?: string;
  initialOpen?: boolean;
  variant?: "primary" | "secondary";
}

const Collapsible: FC<CollapsibleProps> = ({
  label,
  initialOpen = false,
  children,
  variant = "primary"
}) => {
  const [visible, setVisible] = useState(!label || initialOpen);

  return (
    <StyledCollapsible variant={variant}>
      {label && (
        <div className="collapsible__label">
          <p>{label}</p>

          <IconButton
            variant={variant}
            icon={visible ? "minus" : "plus"}
            label="Open"
            onClick={() => setVisible(prev => !prev)}
          />
        </div>
      )}
      <div
        className={`collapsible__content ${
          visible ? "collapsible__content--visible" : ""
        }`}
      >
        {children}
      </div>
    </StyledCollapsible>
  );
};
export default Collapsible;
