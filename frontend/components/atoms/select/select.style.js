import styled from "styled-components";

import { getBoxShadow } from "@helper";
const StyledSelect = styled.div`
  margin: 1.5em 0;

  label {
    display: flex;
    align-items: center;
    position: relative;
  }

  .select__label {
    flex-grow: 2;
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

  select {
    background: none;
    border: none;
    outline: none;
    border-radius: 0;
    margin: 0;
    appearance: none;
    font-size: 14px;
    color: inherit;
    font-family: inherit;
    text-align-last: right;
    direction: rtl;
    padding: 9px 15px 11px;
    padding-right: 45px;
    border-radius: 30px;
    ${getBoxShadow}
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
    right: 15px;
    margin-top: -1px;

    &:before,
    &:after {
      position: absolute;
      content: "";
      top: 1px;
      width: 10px;
      height: 2px;
      border-radius: 1px;
      background: ${props => props.theme.colors.primary};
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
