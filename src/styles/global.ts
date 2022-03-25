import { createGlobalStyle } from 'styled-components';

export const GlobalStyled = createGlobalStyle`
    :root {
        --red: #E52E4D;
        --blue: #5429CC;
        
        --blue-light: #6933FF;

        --green: #33CC95;

        --text-title: #363F5F;
        --text-body: #969CB3;

        --background: #F8F2F5;
        --shape: #FFFFFF;
    }

    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    // font-size: 16px (Desktop padrão do React)
    html {
        @media (min-width: 1080px) {
            font-size: 93.75%; //15px
    }
        @media (min-width: 720px) {
            font-size: 87.5%; //14px
        }
    }

    //REM = 'rem = 16px';

    body {
        background-color: var(--background);
        -webkit-font-smoothing: antialiased;
    }

    button {
        cursor: pointer;
    }

    [disabled] {
        opacity: 0.6;
        cursor: not-allowed;
    }
`;