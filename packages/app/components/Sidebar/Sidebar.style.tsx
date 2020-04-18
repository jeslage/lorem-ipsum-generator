import styled from "styled-components";
import { mq, color } from "../../styles";

const StyledSidebar = styled.aside`
  position: fixed;
  top: 0;
  right: 0;
  width: 90%;
  max-width: 370px;
  transition: width 0.2s ease-in-out;
  background: ${color("background")};
  overflow: hidden;
  border-left: 1px solid ${color("active")};

  ${mq("m")} {
    position: relative;
  }
`;

export default StyledSidebar;
