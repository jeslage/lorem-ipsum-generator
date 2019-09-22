import styled from "styled-components";

const StyledSelect = styled.div`
  margin: 1.5em 0;

  label {
    display: flex;
    align-items: center;
    position: relative;
  }

  span {
    flex-grow: 2;
  }

  select {
    background: none;
    border: none;

    outline: none;
    border-radius: 0;
    margin: 0;
    appearance: none;
    font-size: inherit;
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
    top: 7px;
    right: 5px;

    &:before,
    &:after {
      position: absolute;
      content: "";
      top: 1px;
      width: 10px;
      height: 2px;
      border-radius: 1px;
      background: ${props => props.theme.colors.secondary};
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
