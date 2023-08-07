import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const GlobalStyle = createGlobalStyle`
    ${reset};

    :root {
        font-family: Inter, system-ui, Avenir, Helvetica, Arial, sans-serif;
        font-synthesis: none;
        text-rendering: optimizeLegibility;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        -webkit-text-size-adjust: 100%;
      }

    body {
        padding : 0;
        margin : 0;
        background: rgb(101,136,247);
    }

    a {
        text-decoration: none;
        color : inherit;
    }

    ul {
        padding : 0;
        margin : 0;
        list-style : none;
    }

`;

export default GlobalStyle;
