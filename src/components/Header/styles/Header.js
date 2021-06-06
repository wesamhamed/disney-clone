import styled from 'styled-components';

export const Nav = styled.div `
    height:7rem;
    background:#090b13;
    display:flex;
    align-items:center;
    padding:0 3.6rem;
    overflow-x:hidden;
`;

export const Logo = styled.img `
    width:8rem;
`;

export const NavMenu = styled.div `
    display:flex;
    flex:1;
    margin-left:2.5rem;
    align-items:center;

    a {
        display:flex;
        align-items:center;
        padding:0 1.2rem;
        cursor:pointer;

        img{ 
            height:2rem;
        }
        span{ 
            font-size:1.3rem;
            letter-spacing:1.43px;
            position:relative;

            &:after{
                content:"";
                height:2px;
                background: white;
                position:absolute;
                left:0;
                right:0;
                bottom:-6px;
                opacity:0;
                transform-origin:left center;
                transform:scaleX(0);
                transition:all 0.3s ease-in-out;
            }

            &:hover{
                &:after{
                    opacity:1;
                    transform:scaleX(1);
                }
            }
        }
    }
`;

export const UserImg = styled.img `
    height:4.8rem;
    width:4.8rem;
    border-radius:50%;
    cursor:pointer;
`;

export const Login = styled.div `
    border:0.1rem solid #f9f9f9;
    padding:0.8rem 1.6rem;
    border-radius:0.4rem;
    letter-spacing:1.5px;
    text-transform:uppercase;
    background-color:rgba(0,0,0,0.6);
    transition:all 0.2s ease-in-out;
    cursor:pointer;

    &:hover{
        background-color:#f9f9f9;
        color:#000;
        border-color:transparent;
    }

`;

export const LoginContainer = styled.div `
    flex:1;
    display:flex;
    justify-content: flex-end;
    align-items: center;
`