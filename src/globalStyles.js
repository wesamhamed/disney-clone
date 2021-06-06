import { createGlobalStyle } from 'styled-components';
const GlobalStyle = createGlobalStyle `
    *, 
    *:before,
    *:after {
        box-sizing: border-box;
    }
    html{ 
        font-size:62.5%;//10px
    }
    body{
        margin:0;
        color:white;
        background-color:#040714;
        font-size:1.6rem;
    }
`;

export default GlobalStyle;