import styled from "styled-components";


export const Container = styled.div `
    position:relative;
    height:calc(100vh - 7rem);
    display:flex;
    align-items:top;
    justify-content:center;

    &::before{
        content:"";
        position: absolute;
        top:0;
        left:0;
        right:0;
        bottom:0;
        background-image:url("/images/login-background.jpg");
        background-position: top;
        background-size:cover;
        background-repeat:no-repeat;
        z-index:-1;
        opacity:0.7;
    }

`;

export const CTA = styled.div `
    max-width:65rem;
    padding:8rem 4rem;
    width:70%;
    display:flex;
    flex-direction:column;
    align-items:center;
    margin-top:20rem;
`;

export const CTALogoOne = styled.img `
`;

export const SignUp = styled.a `
    width:90%;
    background-color:#0063e5;
    font-weight:bold;
    padding:1.7rem 0;
    color:#f9f9f9;
    border-radius: 0.4rem;
    text-align:center;
    font-size:1.8rem;
    cursor:pointer;
    transition: all 250ms ease-in-out;
    letter-spacing:1.5px;
    margin-top: 8.rem;
    margin-bottom: 1.2rem;
    &:hover{
         background:#0483ee;
    }
`;

export const Description = styled.p `
    font-size:1.8rem;
    letter-spacing:1.5px;
    text-align:center;
    line-height:1.5;
`;

export const CTALogoTwo = styled(CTALogoOne)
`
    width:90%;

`;