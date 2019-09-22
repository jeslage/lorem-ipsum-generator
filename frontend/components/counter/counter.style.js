import styled from "styled-components";

const StyledCounter = styled.div`
  display: flex;
  align-items: center;

  p {
    flex-grow: 2;
  }

  button {
    padding: 0;
    margin: 0;
    outline: none;
    background: none;
    border: none;
    background: #000;
    width: 30px;
    height: 30px;
    border-radius: 15px;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;

    &[disabled] {
      background: #bbb;
      pointer-events: none;
    }

    &:hover {
      background: #323232;
    }

    svg {
      fill: #fff;
      width: 22px;
      height: 22px;
    }
  }

  span {
    margin: 0 15px;
  }

  input {
    border: none;
    outline: none;
    display: inline-block;
    max-width: 60px;
    padding: 0 10px;
    font-size: inherit;
    font-family: inherit;
    text-align: center;
    color: inherit;
    background: none;

    &:focus {
      border: 1px solid #000;
    }
  }
`;

export default StyledCounter;
