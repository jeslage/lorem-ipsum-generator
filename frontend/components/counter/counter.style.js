import styled from "styled-components";

const StyledCounter = styled.div`
  display: flex;
  align-items: center;
  margin: 1.5em 0;

  .counter__text {
    flex-grow: 2;
    padding-right: 20px;
  }

  .counter__label {
    margin: 0;
  }

  .counter__description {
    margin: 0;
    margin-top: 10px;
  }

  .counter__counter {
    display: flex;
    align-items: center;
  }

  button {
    padding: 0;
    margin: 0;
    outline: none;
    background: none;
    border: 1px solid ${props => props.theme.colors.primary};
    width: 30px;
    height: 30px;
    border-radius: 15px;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;

    &[disabled] {
      opacity: 0.2;
      pointer-events: none;
    }

    svg {
      fill: ${props => props.theme.colors.primary};
      width: 22px;
      height: 22px;
    }
  }

  span {
    margin: 0 5px;
  }

  input {
    border: 1px solid transparent;
    border-radius: 30px;
    outline: none;
    display: inline-block;
    max-width: 60px;
    padding: 5px 10px 4px;
    font-size: inherit;
    font-family: inherit;
    text-align: center;
    color: inherit;
    background: none;

    &:focus {
      border-color: ${props => props.theme.colors.primary};
    }
  }
`;

export default StyledCounter;
