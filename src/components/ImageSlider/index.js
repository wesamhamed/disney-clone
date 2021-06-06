import React from 'react'
import {Carousel,Wrap} from "./styles/ImageSlider";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function ImageSlider() {
    let settings ={
        dots:true,
        infinite:true,
        speed:500,
        slidesToShow:1,
        slidesToScroll:1,
        autoPlay:true
    };
    return (
        <Carousel {...settings}>
            <Wrap>
                <img src="/images/slider-badag.jpg"/>
            </Wrap>
            <Wrap>
                <img src="/images/slider-badging.jpg"/>
            </Wrap>
            <Wrap>
                <img src="/images/slider-scale.jpg"/>
            </Wrap>
            <Wrap>
                <img src="/images/slider-scales.jpg"/>
            </Wrap>
        </Carousel>
    )
}

export default ImageSlider;
