import styled from "styled-components";
import { color } from "../../styles";

const StyledTextarea = styled.label`
  display: block;
  margin-bottom: 1.5em;

  .textarea__meta {
    display: flex;
    align-items: center;

    .textarea__characters {
      flex-grow: 2;
    }
  }

  textarea {
    width: 100%;
    border: none;
    appearance: none;
    resize: none;
    background: none;
    padding: 5px;
    border-radius: 5px;
    border: 1px solid ${color("color")};
    color: ${color("color")};
  }

  button {
    margin: 0;
    padding: 0;
    outline: none;
    background: none;
    border: none;
    text-transform: uppercase;
    font-weight: bold;
    cursor: pointer;

    svg {
      width: 15px;
      height: 15px;
      fill: ${color("color")};
    }
  }
`;

export default StyledTextarea;
