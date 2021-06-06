import styled from "styled-components";


export const Container = styled.div `
    margin-top:3rem;
    display:grid;
    grid-gap:2.5rem;
    grid-template-columns: repeat(5,minmax(0,1fr));
    padding: 3rem 0 2.6rem;

`;
export const Wrap = styled.div `
    cursor: pointer;
    border: 0.3rem solid rgba(249,249,249,0.1);
    border-radius:1rem;
    box-shadow: rgb( 0 0 0 / 69%) 0rem 2.6rem 3rem -1rem,
                rgb( 0 0 0 / 73%) 0rem 1.6rem 1rem -1rem;
    transition: all 250ms ease-in-out ;
    img{
        width:100%;
        height:100%;
        object-fit:cover;
    }

    &:hover{
        box-shadow: rgb( 0 0 0 / 80%) 0rem 4rem 5.8rem -1.6rem,
                rgb( 0 0 0 / 72%) 0rem 3rem 2.2rem -1rem;
        transform:scale(1.05);
        border-color: rgba(249,249,249,0.8);
    }
`;