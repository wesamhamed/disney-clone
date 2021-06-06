import styled from "styled-components";

export const Container = styled.div `


`;

export const Content = styled.div `
    display: grid;
    grid-gap:2.5rem;
    grid-template-columns:repeat(4,minmax(0,1fr));
`;

export const Wrap = styled.div `
    border-radius:1rem;
    overflow:hidden;
    border:0.3rem solid rgba(249,249,254,0.1);
    box-shadow: rgb( 0 0 0 / 69%) 0 2.6rem 3rem -1rem,
                rgb( 0 0 0 / 73%) 0 1.6rem 1rem -1rem;
    transition: all 250ms ease-in-out;
    cursor:pointer;
    img{
        width: 100%;
        height: 100%;
        object-fit:cover;
    }

    &:hover{
        transform:scale(1.05);
        box-shadow: rgb( 0 0 0 / 80%) 0 4rem 5.8rem -1.6rem,
                rgb( 0 0 0 / 72%) 0 3rem 2.2rem -1rem;
        border-color:rgba(249,249,249,0.8);

    }

`;