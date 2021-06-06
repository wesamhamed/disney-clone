import styled from "styled-components";


export const Container = styled.div `
    min-height: calc(100vh - 7rem);
    padding: 0 calc(3.5vw + 0.5rem);
    position:relative;
`;

export const Background = styled.div `
    position:fixed;
    top:0;
    left:0;
    bottom:0;
    right:0;
    z-index:-1;
    opacity:0.8;

    img{
        width:100%;
        height:100%;
        object-fit: cover;
    }
`;

export const ImageTitle = styled.div `
    height:30vh;
    width:35vw;
    min-height:17rem;
    min-width:20rem;
    img{
        width: 100%;
        height:100%;
        object-fit:contain;
        max-width:25rem;
    }

`;

export const Controls = styled.div `
    display:flex;
    align-items:center;
`;
export const PlayButton = styled.button `
    border-radius:0.4rem;
    font-size:1.5rem;
    display:flex;
    align-items:center;
    height:5.6rem;
    background:rgb(249,249,249);
    border:none;
    padding:0 2.4rem;
    margin-right: 2.2rem;
    letter-spacing:1.8px;
    cursor:pointer;

    &:hover{
        background:rgb(198,198,198);
    }
`;
export const TrailerButton = styled(PlayButton)
`
    background:rgba(0,0,0,0.3);
    border: 1px solid rgb(249,249,249);
    color:rgb(249,249,249);
    text-transform:uppercase;
`;
export const AddButton = styled.button `
    margin-right: 1.6rem;
    width:4.4rem;
    height:4.4rem;
    border-radius:50%; 
    display:flex;
    align-items:center;
    justify-content:center;
    background:rgba(0,0,0,0.6);
    cursor:pointer;
    span{
        font-size:3rem;
        color:white;
    }
`;
export const GroupWatchButton = styled(AddButton)
`
    background:rgb(0,0,0);
`;

export const SubTitle = styled.div `
    color:rgb(249,249,249);
    font-size:1.5rem;
    min-height:2rem;
    margin-top:2.6rem;
`;

export const Description = styled.div `
    line-height:1.4;
    font-size:2rem;
    margin-top:1.6rem;
    color:rgb(249,249,249);

`;