import { createGlobalStyle } from "styled-components";
import { normalize } from "styled-normalize";

const GlobalStyle = createGlobalStyle`
    ${normalize};

    :root {
        font-family: Inter, system-ui, Avenir, Helvetica, Arial, sans-serif;
        font-synthesis: none;
        text-rendering: optimizeLegibility;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        -webkit-text-size-adjust: 100%;
    }

    body {
        padding: 0;
        margin: 0;
        background: #6588f7;
    }

    a {
        text-decoration: none;
        color: inherit;
    }

    ul {
        padding: 0;
        margin: 0;
        list-style-type: none;
    }
`;

export default GlobalStyle;
