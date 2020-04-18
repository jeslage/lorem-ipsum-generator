import styled from "styled-components";

import { fontSize, color } from "../../styles";

const StyledSelect = styled.div`
  margin: 1em 0;
  min-height: 30px;

  label {
    display: flex;
    align-items: center;
    position: relative;
  }

  select {
    width: auto;
    background: none;
    border: none;
    outline: none;
    border-radius: 0;
    margin: 0;
    appearance: none;
    font-size: ${fontSize("m")};
    color: inherit;
    font-family: inherit;
    text-align-last: right;
    direction: rtl;
    padding: 5px;
    padding-right: 35px;
  }

  select::-ms-expand {
    display: none;
  }

  .select__icon {
    position: absolute;
    width: 10px;
    height: 10px;
    top: 50%;
    transform: translateY(-50%);
    right: 5px;

    &:before,
    &:after {
      position: absolute;
      content: "";
      top: 1px;
      width: 10px;
      height: 2px;
      border-radius: 1px;
      background: ${color("color")};
    }

    &:before {
      left: -1px;
      transform: rotate(45deg);
      transform-origin: top left;
    }

    &:after {
      left: 1px;
      transform: rotate(-45deg);
      transform-origin: top right;
    }
  }
`;

export default StyledSelect;
