import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    :root {
        --background: #F0F2F5;
        --red: #E52E4D;
        --green: #33CC95;
        --blue: #5423cc;

        --blue-light: #6933FF;
        
        --text-title: #363F5F;
        --text-body: #969CB3;

        --shape: #FFFFFF;

        --input-background: #e7e9ee;
        --input-border: #d7d7d7;
    }

    html {
        @media (max-width: 1080px) {
            font-size: 93.75%; // 15px
        }

        @media (max-width: 720px) {
            font-size: 87.5%; //14px
        }
    }

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body {
        background-color: var(--background);
        -webkit-font-smoothing: antialiased;
    }

    body, button, textarea, input {
        font-family: 'Poppins', sans-serif;
        font-weight: 400;
    }

    h1,h2,h3,h4,h5,h6,strong {
        font-weight: 600;
    }

    button {
        cursor: pointer;
    }

    [disabled] {
        cursor: not-allowed;
        opacity: 0.6;
    }

    .react-modal-overlay {
        background-color: rgba(0,0,0,0.5);

        position: fixed;
        top:0;
        bottom:0;
        left:0;
        right:0;

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

        transition: filter 0.2s;

        :hover {
            filter: brightness(0.9);
        }

         /* border: none; */
         /* background: transparent */
    }
`;
