import styled from "styled-components";

const StlyedColorPicker = styled.div`
  display: flex;
  align-items: center;

  .colorPicker__label {
    flex-grow: 2;
  }

  .colorPicker__wrapper {
    position: relative;

    button {
      width: 50px;
      height: 30px;
      outline: none;
      border: none;
      cursor: pointer;
      background: ${props => props.color};
      border: 1px solid ${props => props.theme.colors.secondary};
    }
  }

  .colorPicker__content {
    position: absolute;
    right: 0;
    z-index: 2;
  }
`;

export default StlyedColorPicker;
