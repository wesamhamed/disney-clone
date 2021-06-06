import React,{useEffect} from 'react';
import {Container} from "./styles/Home";
import {ImageSlider,Viewers,Movies} from "../../components";
import db from "../../firebase";
import {useDispatch} from "react-redux";
import {setMovies} from "../../features/movie/movieSlice"; 


export default function HomePage() {
    const dispatch = useDispatch();

    useEffect(()=>{
        db.collection("movies").onSnapshot((snapshot)=>{
            let tempMovies = snapshot.docs.map((doc)=>{
                return {id:doc.id,...doc.data()}
            });
            dispatch(setMovies(tempMovies))
        });
    },[]);
    return (
        <Container>
            <ImageSlider/>
            <Viewers/>
            <Movies/>
        </Container>
    )
}
