import React from 'react';
import {useSelector} from "react-redux";
import {Link} from "react-router-dom";
import {Container,Content,Wrap } from "./styles/Movies";
import {selectMovies} from "../../features/movie/movieSlice";

function Movies() {
    const movies = useSelector(selectMovies);
    console.log(movies);

    return (
        <Container>
            <h4>Recommended for you</h4>
            <Content>
                {
                    movies &&
                    movies.map((movie)=>(
                        <Wrap key={movie.id}>
                            <Link to={`/detail/${movie.id}`}>
                                <img src={movie.cardImg}/>
                            </Link>
                        </Wrap>
                    ))
                }
            </Content>
        </Container>
    )
}

export default Movies;
