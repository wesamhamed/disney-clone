import React from 'react';
import {Container,Wrap} from "./styles/Viewers";

function Viewers() {
    return (
        <Container>
            <Wrap>
                <img  src="/images/viewers-disney.png"/>
            </Wrap>
            <Wrap>
                <img  src="/images/viewers-marvel.png"/>
            </Wrap>
            <Wrap>
                <img  src="/images/viewers-national.png"/>
            </Wrap>
            <Wrap>
                <img  src="/images/viewers-pixar.png"/>
            </Wrap>
            <Wrap>
                <img  src="/images/viewers-starwars.png"/>
            </Wrap>
        </Container>
    )
}

export default Viewers;
