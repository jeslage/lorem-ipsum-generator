import React from "react";
import styled from "styled-components";

import SvgSprite from "../svgSprite/svgSprite";
import CheckIcon from "../../icons/check.svg";

const StyledToast = styled.div`
  width: 340px;
  background: ${({ theme }) => theme.colors.active};
  box-shadow: 0px 2px 5px 2px rgba(0, 0, 0, 0.2);
  color: ${({ theme }) => theme.colors.color};
  border-radius: 5px;
  display: flex;
  align-items: center;
  text-transform: uppercase;
  font-weight: bold;
  font-size: 12px;
  margin: 20px;
  position: relative;
  z-index: 999;
  overflow: hidden;

  .toast__icon {
    padding: 20px 15px;
    display: flex;
    justify-content: center;
    background: ${({ theme }) => theme.colors.color};
  }

  span {
    margin: 0;
    padding: 20px 15px;
  }

  svg {
    width: 15px;
    height: 15px;
    fill: ${({ theme }) => theme.colors.background};
  }
`;

const Toast = ({ appearance, children, ...props }) => {
  return (
    <StyledToast appearance={appearance} {...props}>
      <div className="toast__icon">
        <SvgSprite icon={appearance === "error" ? CheckIcon : CheckIcon} />
      </div>
      <span>{children}</span>
    </StyledToast>
  );
};

export default Toast;