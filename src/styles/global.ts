import { createGlobalStyle } from 'styled-components';

export const GlobalStyled = createGlobalStyle`
    :root {
        --red: #E52E4D;
        --green: #33CC95;
        
        --blue: #034732;
        --blue-light: #1a5845;

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

    body, input, button, textarea {
        font-family: 'Poppins', sans-serif; 
        font-weight: 400;   
    }

    h1, h2, h3, h4, h5, h6, strong {
        font-weight: 600;
    }

    button {
        cursor: pointer;
    }

    [disabled] {
        opacity: 0.6;
        cursor: not-allowed;
    }

    //estilizar globalmente as classes do Modal.
    .react-modal-overley {
       background: rgba(0, 0, 0, 0.5);
       
       position: fixed;
       top: 0;
       bottom: 0;
       right: 0;
       left: 0;

       display: flex;
       align-items: center;
       justify-content: center;
    }

    .react-modal-content {
        width: 100%;
        max-width: 576px;
        background: var(--background);
        padding: 3rem;
        position: relative;
        border-radius: 0.25rem;
    }

    .react-modal-close {
        position: absolute;
        right: 1.5rem;
        top: 1.5rem;
        border: 0;
        background: transparent;
        
        //efeito
        transition: filter 0.2s;
        &:hover {
          filter: brightness(0.5);  
        }
    }
`;