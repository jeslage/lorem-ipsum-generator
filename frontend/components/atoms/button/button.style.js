import styled from "styled-components";

const StyledButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  outline: none;
  background: none;
  text-transform: uppercase;
  margin: 1em 0;
  padding: 12px 20px;
  text-align: center;
  font-weight: bold;
  font-size: 11px;
  cursor: pointer;
  border-radius: 30px;
  width: 100%;
  border: 1px solid ${props => props.theme.colors.color};
  color: ${props => props.theme.colors.color};

  &:active {
    color: ${props => props.theme.colors.color};
  }

  svg {
    height: 15px;
    width: auto;
    margin-right: 10px;
    fill: ${props => props.theme.colors.color};
  }
`;

export default StyledButton;
