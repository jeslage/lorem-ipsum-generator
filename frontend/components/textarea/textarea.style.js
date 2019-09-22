import styled from "styled-components";

const StyledTextarea = styled.label`
  textarea {
    width: 100%;
    border: none;
    appeareance: none;
    resize: none;
    background: none;
    padding: 5px;
    border: 1px solid ${props => props.theme.colors.secondary};
  }
`;

export default StyledTextarea;
