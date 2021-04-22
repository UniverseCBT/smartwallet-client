import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    outline: none;
  }

  *::selection {
    background: #174c64;
    color: #F3F4F8;
  }

  body {
    -webkit-font-smoothing: antialiased;
    background: #F3F4F8;
  }

  body, button, input, textarea {
    font-family: 'Roboto', arial, sans-serif, helvetica;
  }

  img {
    max-width: 100%;
  }

  button {
    cursor: pointer;
  }

  ul {
    list-style: none;
  }

  a {
    text-decoration: none;
  }
`;
