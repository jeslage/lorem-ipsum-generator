import styled from "styled-components";
import { color } from "../../styles";

const StyledSettings = styled.div`
  max-height: calc(100vh - 52px);
  height: 100%;
  display: flex;
  flex-direction: column;

  .settings__panel {
    flex-grow: 2;
    overflow-y: auto;
  }

  .settings__bar {
    flex-shrink: 0;
    background: ${color("hover")};
    border-top: 1px solid ${color("active")};
  }

  .settings__buttons {
    padding: 0 1.5em;
    display: flex;

    button {
      margin: 10px 0;

      &:nth-of-type(1) {
        margin-right: 5px;
      }

      &:nth-of-type(2) {
        margin-left: 5px;
      }
    }
  }
`;

export default StyledSettings;
