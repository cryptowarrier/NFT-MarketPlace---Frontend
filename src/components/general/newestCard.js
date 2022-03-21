import React from "react";
import { Box } from "@material-ui/core";

import "../../assets/SCSS/components/general/newestCard.scss";


const NewestCard = ({ backColor, imgUrl, bigTitle, smallTitle, content }) => {

    return (
        <Box className={"newestCard_container"}>
            <img src={imgUrl} alt="Game" />
            <Box className="contentBox" style={{ backgroundColor: backColor }}>
                <Box className="bigTitle">{bigTitle}</Box>
                <Box className="smallTitle">{smallTitle}</Box>
                <Box className="content">{content}</Box>
                <Box className="centerFlex">
                    <Box className="goBtn">GO</Box>
                </Box>
            </Box>
        </Box>
    );
};


export default NewestCard;