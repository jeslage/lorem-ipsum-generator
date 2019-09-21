import styled from "styled-components";

const StyledSettings = styled.div`
  width: 400px;
  height: 100vh;
  max-height: 100vh;
  overflow-y: auto;
  flex-shrink: 0;
  border-left: 1px solid ${props => props.theme.colors.secondary};
`;

export default StyledSettings;
