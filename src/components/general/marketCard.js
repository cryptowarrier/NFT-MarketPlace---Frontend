import React from "react";
import { Box } from "@material-ui/core";

import "../../assets/SCSS/components/general/marketCard.scss";



const MarketCard = ({imgSrc, title, content, context, price, categoryImg, coinLogo, setCollection}) => {
    const numberWithCommas = (x) => {
        return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    } 

    return (
        <Box className="marketCard">
            <Box style={{width: "100%", height:"423px", borderRadius: "30px 30px 0px 0px", position: "relative"}}>
                <img src={imgSrc} style={{width: "100%", height:"423px", borderRadius: "30px 30px 0px 0px"}} alt="explore img"/>
                <Box className="goBtn" onClick={() => setCollection(title)}>GO</Box>
            </Box>
            <Box padding={"6px 0px"} height={"155px"} overflow={"auto"}>
                <Box className="title">{title}</Box>
                <Box className="content">{content}</Box>
                <Box className="context">{context}</Box>
            </Box>
            <Box className="priceBox">
                <Box className="logoBox">
                    <img src={categoryImg} alt="category" className="categoryImg"/>
                    <Box padding={"10px 20px"}>Price</Box>
                    <img src={coinLogo} alt="coinLogo" className="coinLogo"/>
                </Box>
                <Box padding={"10px 0px"}>{numberWithCommas(price)}</Box>
            </Box>
        </Box>
    );
};


export default MarketCard;