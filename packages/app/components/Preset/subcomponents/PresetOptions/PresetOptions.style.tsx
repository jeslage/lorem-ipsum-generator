import styled from "styled-components";

const StyledPresetOptions = styled.div`
  position: relative;
  display: flex;

  button {
    margin-left: 0.5rem;
  }

  .presetOptions__additional-toggle  {
    svg {
      transform: rotate(90deg);
    }
  }

  .presetOptions__list {
    position: absolute;
    display: flex;
    flex-direction: column;
    bottom: calc(100% + 10px);
    margin-top: 5px;
    width: 150px;
    right: 0;
    background: ${props => props.theme.colors.hover};
    color: ${props => props.theme.colors.color};
    z-index: 999;
    border-radius: 5px;
    border: 1px solid ${props => props.theme.colors.background};
    overflow: hidden;

    button {
      display: block;
      flex-shrink: 0;
      width: 100%;
      outline: none;
      border: none;
      background: none;
      cursor: pointer;
      padding: 15px;
      text-align: left;
      color: inherit;
      font-weight: bold;
      margin: 0;
      border-bottom: 1px solid ${props => props.theme.colors.hover};

      &:last-of-type {
        border-bottom: none;
      }

      &:hover {
        background: ${props => props.theme.colors.active};
      }
    }
  }
`;

export default StyledPresetOptions;
