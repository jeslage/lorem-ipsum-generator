import styled from "styled-components";
import { getBoxShadow } from "@helper";

const StyledRadioGroup = styled.div`
  display: flex;
  align-items: center;
  margin: 1.5em 0;

  .radioGroup__label {
    flex-grow: 2;
    padding-right: 20px;
    margin: 0;
    display: flex;
    font-size: 14px;
    align-items: center;

    svg {
      width: 20px;
      height: auto;
      margin-right: 15px;
      fill: ${props => props.theme.colors.tertiary};
    }
  }

  .radioGroup__icon {
    display: flex;
    align-items: center;
    padding: 5px;
    margin: 0;
    border-radius: 5px;
    opacity: 0.5;

    svg {
      width: 20px;
      height: auto;
      fill: ${props => props.theme.colors.primary};
    }
  }

  .radioGroup__radio {
    cursor: pointer;
    margin-left: 10px;
    border-radius: 15px;
    padding: 2px 5px;
    ${getBoxShadow}

    input {
      display: none;
    }

    input:checked + .radioGroup__icon {
      opacity: 1;
    }
  }
`;

export default StyledRadioGroup;
