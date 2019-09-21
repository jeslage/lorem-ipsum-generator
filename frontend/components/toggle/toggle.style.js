import styled from "styled-components";

const StyledToggle = styled.div`
  display: flex;
  align-items: center;

  p {
    flex-grow: 2;
  }

  button {
    position: relative;
    outline: none;
    margin: 0;
    padding: 0;
    appearance: none;
    border: 1px solid #000;
    width: 60px;
    height: 30px;
    border-radius: 30px;
    cursor: pointer;
    background-color: ${props => (props.active ? "#bbb" : "#fff")};
    will-change: background-color;
    transition: background-color 0.2s ease-in-out;

    span {
      position: absolute;
      top: -1px;
      left: -1px;
      display: block;
      width: 30px;
      height: 30px;
      border-radius: 30px;
      background: #000;
      transform: translateX(${props => (props.active ? "100%" : "0")});
      will-change: transform;
      transition: transform 0.2s ease-in-out;
    }
  }
`;

export default StyledToggle;
