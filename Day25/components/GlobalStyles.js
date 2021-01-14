import { createGlobalStyle } from 'styled-components';


const GlobalStyles = createGlobalStyle`
    @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600&display=swap');
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body {
        font-family: 'Montserrat', sans-serif;
        background: #EBEBF3;
    }

    input {
        background: transparent;
        outline: none;
        border: none;
        font-family: inherit;
    }

    .container {
        width: 1560px;
        max-width: 95%;
        margin: auto;
    }

`

export default GlobalStyles;