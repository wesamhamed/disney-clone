import styled from "styled-components";
import Slider from "react-slick";


export const Carousel = styled(Slider)
`
    margin-top:2rem;

    ul li button{
        &::before{
            font-size:1rem;
            color:rgb(150,158,171);
        }
    }
    li.slick-active button::before{
        color:white;
    }
    
    .slick-list{
        overflow:visible;
    }
    button{
        z-index:1;
    }
`;

export const Wrap = styled.div `
    cursor:pointer;
    img{
        width:100%;
        height:100%;
        border-radius:0.4rem;
        box-shadow: rgb( 0 0 0 / 69%) 0px 2.6rem 3rem -1rem,
            rgb( 0 0 0 / 73%) 0 1.6rem 1rem -1rem;
        &:hover{
            border:0.4rem solid rgba(249,249,249,0.8);
        }
    }

`;