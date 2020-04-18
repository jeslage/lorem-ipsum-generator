import styled from "styled-components";
import { color } from "../../styles";

const StyledRadioGroup = styled.div`
  display: flex;
  align-items: center;
  margin: 1em 0;

  .radioGroup__icon {
    display: flex;
    align-items: center;
    padding: 5px;
    margin: 0 0 0 10px;
    border-radius: 5px;
    opacity: 0.5;

    svg {
      width: 20px;
      height: auto;
      fill: ${color("color")};
    }
  }

  .radioGroup__radio {
    cursor: pointer;

    input {
      display: none;
    }

    input:checked + .radioGroup__icon {
      opacity: 1;
    }
  }
`;

export default StyledRadioGroup;
