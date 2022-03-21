import React, { useState, useRef } from "react";
import { Box } from "@material-ui/core";

import "../../assets/SCSS/components/carousel/carousel.scss";


const Carousel = ({ imgList, nameList, naviNames }) => {
    const [carouselIndex, setCarouselIndex] = useState(0);
    const carouselLength = imgList.length;
    const getIndex = (index) => {
        return (index % carouselLength + carouselLength) % carouselLength;
    }
    const one = useRef();
    const two = useRef();
    const main = useRef();
    const four = useRef();
    const five = useRef();
    const refList = [one, two, main, four, five];
    const setIndex = (index) => {
        refList.map((img) => {
            img.current.style.opacity = 0.2;
            return true;
        })
        setTimeout(() => {
            setCarouselIndex(index);
            refList.map((img) => {
                img.current.style.opacity = 1;
                return true;
            })
        }, 300);
    }

    return (
        <Box className={"carousel_container"} >
            <img ref={one} src={imgList[getIndex(carouselIndex - 2)]} alt="carousel" className="first" onClick={() => setIndex(getIndex(carouselIndex - 2))} />
            <img ref={five} src={imgList[getIndex(carouselIndex + 2)]} alt="carousel" className="fivth" onClick={() => setIndex(getIndex(carouselIndex + 2))} />
            <img ref={two} src={imgList[getIndex(carouselIndex - 1)]} alt="carousel" className="second" onClick={() => setIndex(getIndex(carouselIndex - 1))} />
            <img ref={four} src={imgList[getIndex(carouselIndex + 1)]} alt="carousel" className="fourth" onClick={() => setIndex(getIndex(carouselIndex + 1))} />
            <img ref={main} src={imgList[getIndex(carouselIndex)]} alt="carousel" className="main" onClick={() => setIndex(getIndex(carouselIndex))} />
            <Box className="itemName">{nameList[carouselIndex]}</Box>
            <Box className="navigatorCircles">
                {nameList.map((item, index) => <Box key={index} id={item} className={index === carouselIndex ? "active navCircle" : "navCircle"} onClick={() => setIndex(index)}/>)}
            </Box>
            <Box className="naviNames">
                {naviNames.map((item, index) => (
                    <Box key={index} className={index === carouselIndex ? "active naviName" : "naviName"} onClick={() => setIndex(index)}>{item}</Box>
                ))}
            </Box>
        </Box>
    );
};


export default Carousel;