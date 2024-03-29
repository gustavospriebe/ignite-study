import styled from "styled-components";
import { darken, transparentize } from "polished";

export const Container = styled.form`
    h2 {
        color: var(--text-title);
        font-size: 1.5rem;
        margin-bottom: 2rem;
    }

    input {
        width: 100%;
        padding: 0 1.5rem;
        height: 4rem;
        border-radius: 0.25rem;
        background: var(--input-background);
        border: 1px solid var(--input-border);

        font-weight: 400;
        font-size: 1rem;

        &::placeholder {
            color: var(--text-body);
        }

        & + input {
            margin-top: 1rem;
        }
    }

    button[type="submit"] {
        width: 100%;
        padding: 0 1.5rem;
        height: 4rem;
        background: var(--green);
        color: #fff;
        border-radius: 0.25rem;
        border: 0;
        font-size: 1rem;
        margin-top: 1.5rem;
        font-weight: 600;

        transition: filter 0.2s;

        :hover {
            filter: brightness(0.9);
        }
    }
`;

export const TransactionTypeContainer = styled.div`
    display: flex;
    justify-content: center;
    margin: 1rem 0;
    gap: 0.5rem;
`;

interface TypeButtonProps {
    isActive: boolean;
    activeColor: "red" | "green";
}

const colors = {
    green: "#33CC95",
    red: "#E52E4D",
};

export const TypeButton = styled.button<TypeButtonProps>`
    height: 4rem;
    width: 100%;

    display: flex;
    align-items: center;
    justify-content: center;

    gap: 0.5rem;
    background: ${(props) =>
        props.isActive
            ? transparentize(0.9, colors[props.activeColor])
            : "transparent"};
    border: 1px solid #d7d7d7;
    border-radius: 0.25rem;

    transition: border-color 0.2s;

    :hover {
        border-color: ${darken(0.1, "#d7d7d7")};
    }

    img {
        width: 20px;
        height: 20px;
    }

    span {
        font-size: 1rem;
        color: var(--text-title);
    }
`;
