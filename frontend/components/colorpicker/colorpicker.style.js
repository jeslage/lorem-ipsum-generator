import styled from "styled-components";

const StlyedColorPicker = styled.div`
  display: flex;
  align-items: center;
  margin: 1.5em 0;

  .colorPicker__cover {
    position: fixed;
    top: 0px;
    right: 0px;
    bottom: 0px;
    left: 0px;
    outline: none;
    border: none;
    background: none;
  }

  .colorPicker__open {
    width: 50px;
    height: 30px;
    outline: none;
    border: none;
    cursor: pointer;
    background: ${props => props.color};
    border: 1px solid ${props => props.theme.colors.secondary};
  }

  .colorPicker__label {
    flex-grow: 2;
    margin: 0;
  }

  .colorPicker__wrapper {
    position: relative;
  }

  .colorPicker__content {
    position: absolute;
    right: 0;
    z-index: 2;
  }
`;

export default StlyedColorPicker;
