import styled from "styled-components";


export const Container = styled.main `
    min-height:calc(100vh - 7rem);
    padding:0 calc(3.5rem + 5px);
    position:relative;
    overflow-x:hidden;

    &:before{
        content:"";
        background: url("/images/home-background.png") center center / cover no-repeat fixed;
        position:absolute;
        left:0;
        right:0;
        bottom:0;
        top:0;
        z-index: -1;
    }
`;