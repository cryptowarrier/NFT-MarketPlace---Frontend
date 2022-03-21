import React from "react";
import { Box } from "@material-ui/core";

import "../../assets/SCSS/components/general/exploreCard.scss";



const ExploreCard = ({imgSrc, title, content}) => {

    return (
        <Box className="exploreCard">
            <Box style={{width: "100%", height:"423px", borderRadius: "30px 30px 0px 0px", position: "relative"}}>
                <img src={imgSrc} style={{width: "100%", height:"423px", borderRadius: "30px 30px 0px 0px"}} alt="explore img"/>
                <Box className="goBtn">GO</Box>
            </Box>
            <Box padding={"6px 0px"}>
                <Box className="title">{title}</Box>
                <Box className="content">{content}</Box>
            </Box>
        </Box>
    );
};


export default ExploreCard;