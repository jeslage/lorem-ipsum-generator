import styled from "styled-components";

const StyledTextarea = styled.label`
  display: block;
  margin-bottom: 1.5em;

  textarea {
    width: 100%;
    border: none;
    appeareance: none;
    resize: none;
    background: none;
    padding: 5px;
    border-radius: 5px;
    border: 1px solid ${props => props.theme.colors.primary};
    color: ${props => props.theme.colors.primary};
  }
`;

export default StyledTextarea;
