import styled from "styled-components";

const StyledPresetOptions = styled.div`
  position: relative;
  display: flex;

  button {
    margin-left: 0.5rem;
  }

  .presetOptions__list {
    position: absolute;
    display: flex;
    flex-direction: column;
    top: 100%;
    margin-top: 5px;
    width: 150px;
    right: 0;
    background: ${props => props.theme.colors.color};
    color: ${props => props.theme.colors.hover};
    z-index: 999;
    border-radius: 5px;
    overflow: hidden;

    button {
      display: block;
      flex-shrink: 0;
      width: 100%;
      outline: none;
      border: none;
      background: none;
      cursor: pointer;
      padding: 10px;
      text-align: left;
      color: inherit;
      font-weight: bold;

      &:hover {
        background: ${props => props.theme.colors.border};
      }
    }
  }
`;

export default StyledPresetOptions;
