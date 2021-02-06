import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
    @import url('https://fonts.googleapis.com/css2?family=PT+Sans+Caption:wght@400;700&display=swap');
    * {
        margin: 0;
        padding: 0;
    }
    body {
        font-family: 'PT Sans Caption', sans-serif;
        background: #dfe6e9;
    }
    input {
        background: transparent;
        outline: none;
        border: none;
    }

    .container {
        width: 1300px;
        max-width: 95%;
        margin: auto;
    }

    a {
        text-decoration:none;
    }

`;

export default GlobalStyles;
