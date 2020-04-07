import styled from "styled-components";

const StyledColorpicker = styled.div`
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
    outline: none;
    border: none;
    cursor: pointer;
    background: none;
    padding: 5px;
    width: 60px;
    border-radius: 30px;
    border: 1px solid ${props => props.theme.colors.color};

    span {
      display: block;
      border-radius: 30px;
      background: ${props => props.color};
      height: 20px;
    }
  }

  .colorPicker__label {
    flex-grow: 2;
    margin: 0;
    display: flex;
    align-items: center;
    font-size: 14px;

    svg {
      width: 20px;
      height: auto;
      margin-right: 15px;
      fill: ${props => props.theme.colors.border};
    }
  }

  .colorPicker__wrapper {
    position: relative;
  }

  .colorPicker__content {
    position: absolute;
    right: 0;
    top: 40px;
    z-index: 2;
  }
`;

export default StyledColorpicker;
