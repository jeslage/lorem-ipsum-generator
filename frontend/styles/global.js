import { createGlobalStyle } from "styled-components";
import { mq } from "./tools";

const GlobalStyle = createGlobalStyle`
  body {
    font-family: system-ui;
    margin: 0;
    padding: 0;

    background: ${props => props.theme.backgroundColor};
    color: ${props => props.theme.colors.color};
  }

  main {
    ${mq("m")} {
      display: flex;
    }
  }

  small {
    font-size: 11px;
  }

  html,
  body,
  div,
  article,
  section,
  main,
  footer,
  header,
  form,
  fieldset,
  legend,
  pre,
  code,
  p,
  a,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  ul,
  ol,
  li,
  dl,
  dt,
  dd,
  textarea,
  input[type='email'],
  input[type='number'],
  input[type='password'],
  input[type='tel'],
  input[type='text'],
  input[type='url'] {
    box-sizing: border-box;
  }
`;

export default GlobalStyle;
