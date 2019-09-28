import styled from "styled-components";

const StyledButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  outline: none;
  background: none;
  text-transform: uppercase;
  margin: 1em 0;
  padding: 10px 20px;
  text-align: center;
  font-weight: bold;
  cursor: pointer;
  border-radius: 30px;
  width: 100%;
  border: 1px solid ${props => props.theme.colors.primary};
  color: ${props => props.theme.colors.primary};

  &:active {
    color: ${props => props.theme.colors.primary};
  }

  svg {
    height: 15px;
    width: auto;
    margin-right: 10px;
    fill: ${props => props.theme.colors.primary};
  }
`;

export default StyledButton;
