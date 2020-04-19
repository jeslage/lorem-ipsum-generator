import React, { FC } from "react";
import styled from "styled-components";
import { ToastProps } from "react-toast-notifications";

import Icon from "../Icon";

import { fontSize, color, space } from "../../styles";

const StyledToast = styled.div`
  width: 340px;
  background: ${color("active")};
  box-shadow: 0px 2px 5px 2px rgba(0, 0, 0, 0.2);
  color: ${color("color")};
  border-radius: ${space("xs")};
  display: flex;
  align-items: center;
  text-transform: uppercase;
  font-weight: bold;
  font-size: ${fontSize("s")};
  margin: ${space("m")};
  position: relative;
  z-index: 999;
  overflow: hidden;

  .toast__icon {
    padding: ${space("m")} ${space("s")};
    display: flex;
    justify-content: center;
    background: ${color("color")};
  }

  span {
    margin: 0;
    padding: ${space("m")} ${space("s")};
  }

  svg {
    width: ${space("s")};
    height: ${space("s")};
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
