import React, { FC } from "react";
import styled from "styled-components";
import { ToastProps } from "react-toast-notifications";

import Icon from "../Icon";

import { fontSize, color } from "../../styles";

const StyledToast = styled.div`
  width: 340px;
  background: ${color("active")};
  box-shadow: 0px 2px 5px 2px rgba(0, 0, 0, 0.2);
  color: ${color("color")};
  border-radius: 5px;
  display: flex;
  align-items: center;
  text-transform: uppercase;
  font-weight: bold;
  font-size: ${fontSize("m")};
  margin: 20px;
  position: relative;
  z-index: 999;
  overflow: hidden;

  .toast__icon {
    padding: 20px 15px;
    display: flex;
    justify-content: center;
    background: ${color("color")};
  }

  span {
    margin: 0;
    padding: 20px 15px;
  }

  svg {
    width: 15px;
    height: 15px;
    fill: ${color("background")};
  }
`;

const Toast: FC<ToastProps> = ({ appearance, children }) => (
  <StyledToast>
    <div className="toast__icon">
      <Icon type={appearance === "error" ? "check" : "check"} />
    </div>
    <span>{children}</span>
  </StyledToast>
);

export default Toast;
