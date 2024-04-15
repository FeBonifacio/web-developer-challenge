import styled from "styled-components";

export const Card = styled.div`
    width: 516px;
    height: 460px;
    margin: 40px auto 56px;
    padding: 24px;
    border-radius: 3px;
    border: solid 1px var(--greyish-brown-two);
    background-color: var(--black-third);
`;

export const ItensContent = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;

    img {
        width: 90px;
        height: 90px;
        margin: 0 8px 16px 16px;
        padding: 32px;
        border-radius: 50%;
        border: solid 1px var(--greyish-brown);
        background-color: var(--black-third);
        cursor: pointer;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    span {
        padding-top: 10px;
        padding-left: 15px;
        align-items: center;
        cursor: pointer;
    }

    button {
        border: none;
        background: transparent;
        cursor: pointer;
    }
`;

export const ItensInputs = styled.div`
    padding: 10px;    
`;

export const ItensButtons = styled.div`
    display: flex;
    align-items: center;
    justify-content: end;
    height: 24px;
`;