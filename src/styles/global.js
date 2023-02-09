import { createGlobalStyle } from "styled-components";

import backgroundPage from '../assets/backgroundButton.png'

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  :root {
    font-size: 62.5%;
  }

  body {
    -webkit-font-smoothing: antialiased;
    background: url(${backgroundPage});
    background-repeat: no-repeat;
    background-size: cover;
  }

  body, input, button, textarea {
    outline: none;
  }

  a {
    text-decoration: none;
  }

  button, a {
    cursor: pointer;
    transition: filter(0.2s);
  }

  button:hover, a:hover {
    filter: brightness(0.9)
  }
`;