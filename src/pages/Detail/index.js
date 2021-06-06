import React,{useState,useEffect} from 'react';
import {useParams} from "react-router-dom";
import {
        Container,
        Background,
        ImageTitle,
        Controls,
        PlayButton,
        TrailerButton,
        GroupWatchButton, 
        AddButton,
        SubTitle,
        Description
} from "./styles/Detail";
import db from "../../firebase";

function DetailPage() {
    const [movie,setMovie] =useState();
    const {id} = useParams();
    useEffect(()=>{
        db.collection("movies")
        .doc(id)
        .get()
        .then((doc)=>{
            if(doc.exists){
                setMovie(doc.data());
            }else{

            }
        })
    },[id]);
    return (
        <Container>
           {movie && 
                 (
                 <>
                    <Background>
                        <img src={movie.backgroundImg}/>
                    </Background>
                    <ImageTitle>
                        <img src={movie.titleImg}/>
                    </ImageTitle>
                    <Controls>
                        <PlayButton>
                            <img src="/images/play-icon-black.png"/>
                            <span>PLAY</span>
                        </PlayButton>
                        <TrailerButton>
                            <img src="/images/play-icon-white.png"/>
                            <span>Trailer</span>
                        </TrailerButton>
                        <AddButton>
                                <span>+</span>
                        </AddButton>
                        <GroupWatchButton>
                                <img  src="/images/group-icon.png"/>
                        </GroupWatchButton>
                    </Controls>
                    <SubTitle>
                        {movie.subTitle}
                    </SubTitle>
                    <Description>
                        {movie.description}
                    </Description>
                </>
             )}
        </Container>
    )
}

export default DetailPage;
