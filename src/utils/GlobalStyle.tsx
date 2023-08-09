import { createGlobalStyle } from "styled-components";
import { normalize } from "styled-normalize";

const GlobalStyle = createGlobalStyle`
    ${normalize};

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
