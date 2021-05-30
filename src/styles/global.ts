import { createGlobalStyle } from 'styled-components';

const backgroundTheme = (theme?: string) => {
  switch (theme) {
    default:
      return '#f3f4f8';
  }
};

type GlobalProps = {
  theme?: string;
};

export default createGlobalStyle<GlobalProps>`
  :root {
    --primary: #1ae5bd;
    --secondary: #174c64;
    --background: ${props =>
      props.theme ? backgroundTheme('#f3f4f8') : '#f3f4f8'};
    --title: #646464;
    --text: #b5b5b5;
    --white: #fff;
    --shadow: #EAEAEC;
  }

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
