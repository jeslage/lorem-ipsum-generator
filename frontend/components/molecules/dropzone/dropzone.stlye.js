import styled from "styled-components";
import { hexToRgbA } from "@helper";

const StyledDropzone = styled.div`
  height: 100vh;
  align-items: center;
  justify-content: center;
  display: flex;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  padding: 4em;
  max-width: calc(100% - 385px);
  z-index: 998;
  transition: opacity 0.2s ease-in-out;
  background: ${props => hexToRgbA(props.theme.colors.primary, 0.95)};
  color: ${props => props.theme.colors.active};
  opacity: ${props => (props.canDrop ? "1" : "0")};
  pointer-events: ${props => (props.canDrop ? "auto" : "none")};
  text-align: center;

  span {
    font-size: 80px;
    font-weight: bold;
  }
`;

export default StyledDropzone;
