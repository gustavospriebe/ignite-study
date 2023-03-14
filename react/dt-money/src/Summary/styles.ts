import styled from "styled-components";

export const Container = styled.div`
    width: 100%;

    display: flex;
    justify-content: space-around;
    margin-top: -10rem;

    div {
        background-color: var(--shape);
        padding: 1.5rem 2rem;
        border-radius: 0.25rem;
        color: var(--text-title);
        width: 100%;

        margin: 0 1rem;

        header {
            display: flex;
            justify-content: space-between;
            align-items: center;
        }

        strong {
            display: block;
            margin-top: 1rem;
            font-size: 2rem;
            font-weight: 500;
            line-height: 3rem;
        }

        &.highlighted {
            background-color: var(--green);
            color: #FFF;
        }
    }
`;
