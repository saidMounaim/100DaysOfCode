import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body {
        background-color: #EBF2F3;
        font-family: 'Overpass', sans-serif;
        display: flex;
        flex-direction: column;
    }

    input {
        color: inherit;
        font-family: inherit;
        background: transparent;
        border: none;
        outline: none;
    }

    .container {
        width: 520px;
        margin: auto;
        max-width: 95%;
    }

`;

export default GlobalStyles;
