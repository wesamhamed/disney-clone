import React from 'react';
import {Container,CTA,CTALogoOne,SignUp,Description,CTALogoTwo} from "./styles/Login";

function LoginPage() {
    return (
        <Container>
                <CTA>
                    <CTALogoOne src="/images/cta-logo-one.svg" />
                    <SignUp>GET ALL THERE</SignUp>
                    <Description>
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Praesentium accusantium quo atque nulla? Dolor atque sed odio, et fuga deserunt!
                    </Description>
                    <CTALogoTwo src="/images/cta-logo-two.png"/>
                </CTA>
        </Container>
    )
}

export default LoginPage;
