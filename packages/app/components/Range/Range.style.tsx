import styled from "styled-components";

const StyledRange = styled.div`
  margin: 1.5em 0;

  label {
    display: flex;
    align-items: center;
    position: relative;
  }

  .range__label {
    flex-grow: 2;
    margin: 0;
    display: flex;
    font-size: 14px;
    align-items: center;
    color: ${props => props.theme.colors.color};

    svg {
      width: 20px;
      height: auto;
      margin-right: 15px;
      fill: ${props => props.theme.colors.border};
    }
  }

  span {
    margin-right: 10px;
    font-size: 14px;
  }

  input[type="text"] {
    border: none;
    border-bottom: 1px solid transparent;
    outline: none;
    display: inline-block;
    max-width: 30px;
    font-size: inherit;
    padding: 5px 2px 4px;
    font-family: inherit;
    text-align: right;
    color: inherit;
    background: none;

    &:focus {
      border-color: ${({ theme }) => theme.colors.border};
    }
  }

  input[type="range"] {
    appearance: none;
    width: 120px;
    margin: 0;
    background: none;
  }

  input[type="range"]:focus {
    outline: none;
  }

  input[type="range"]::-webkit-slider-runnable-track {
    width: 100%;
    height: 4px;
    cursor: pointer;
    background: ${({ theme }) => theme.colors.border};
    border-radius: 2px;
  }

  input[type="range"]::-moz-range-track {
    width: 100%;
    height: 4px;
    cursor: pointer;
    background: ${({ theme }) => theme.colors.border};
    border-radius: 2px;
  }

  input[type="range"]::-ms-track {
    width: 100%;
    height: 4px;
    cursor: pointer;
    background: ${({ theme }) => theme.colors.border};
    border-radius: 2px;
  }

  input[type="range"]::-ms-thumb {
    height: 20px;
    width: 20px;
    border-radius: 10px;
    background: ${({ theme }) => theme.colors.color};
    cursor: pointer;
    appearance: none;
    margin-top: -8px;
  }

  input[type="range"]::-moz-range-thumb {
    height: 20px;
    width: 20px;
    border-radius: 10px;
    background: ${({ theme }) => theme.colors.color};
    cursor: pointer;
    appearance: none;
    margin-top: -8px;
  }

  input[type="range"]::-webkit-slider-thumb {
    height: 20px;
    width: 20px;
    border-radius: 10px;
    background: ${({ theme }) => theme.colors.color};
    cursor: pointer;
    appearance: none;
    margin-top: -8px;
  }
`;

export default StyledRange;
