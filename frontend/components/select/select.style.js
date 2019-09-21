import styled from "styled-components";

const StyledSelect = styled.div`
  label {
    position: relative;
  }

  select {
    padding-right: 20px;
    background: none;
    border: none;
    outline: none;
    border-radius: 0;
    margin: 0;
    appearance: none;
    font-size: inherit;
    font-family: inherit;
  }

  select::-ms-expand {
    display: none;
  }

  .select__label {
    display: none;
  }

  .select__icon {
    position: absolute;
    width: 10px;
    height: 10px;
    top: 5px;
    right: 0;

    &:before,
    &:after {
      position: absolute;
      content: "";
      top: 1px;
      width: 10px;
      height: 2px;
      border-radius: 1px;
      background: #000;
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
