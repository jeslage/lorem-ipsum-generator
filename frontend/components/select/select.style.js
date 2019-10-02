import styled from "styled-components";

const StyledSelect = styled.div`
  margin: 10px 0;

  label {
    display: flex;
    align-items: center;
    position: relative;
  }

  .select__label {
    flex-grow: 2;
    margin: 0;
    display: flex;
    align-items: center;

    svg {
      width: 20px;
      height: auto;
      margin-right: 15px;
      fill: ${props => props.theme.colors.border};
    }
  }

  select {
    width: 100%;
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
      background: ${props => props.theme.colors.color};
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
