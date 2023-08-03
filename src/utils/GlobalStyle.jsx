import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const GlobalStyle = createGlobalStyle`
    ${reset};

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
