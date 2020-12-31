import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`

    * {
        margin: 0;
        padding:0;
        box-sizing: border-box;
    }

    body {
        font-family: 'Quattrocento Sans', sans-serif;
        background-color: #F2F4F9;
    }

    a {
        text-decoration: none;
    }

    input,
    button {
        background-color: transparent;
        border: none;
        outline: none;
    }

    @media screen and (max-width: 1440px) {
        .grid-movies {
            grid-template-columns: repeat(3, 1fr) !important;
        }
    }

    @media screen and (max-width: 1024px) {
        .grid-movies {
            grid-template-columns: repeat(2, 1fr) !important;
        }
    }


    @media screen and (max-width: 768px) {
        .grid-movies {
            grid-template-columns: repeat(1, 1fr) !important;
        }
    }

`

export default GlobalStyles;