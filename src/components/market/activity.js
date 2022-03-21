import React, { useContext } from "react";
import { Box } from "@material-ui/core";

import { LayoutContext } from "../../Provider";

import DownArrow from "../../assets/images/crator/downArrow.png";

import "../../assets/SCSS/components/market/activity.scss";



const Activity = () => {
    const { setTitle } = useContext(LayoutContext);
    setTitle("ACTIVITY");

    return (
        <Box className="activity">
            <Box paddingBottom={2} className="title">The Top NFTs on EGC.NFT, Ranked by volume, floor price and usability</Box>
            <Box className="selectBoxes">
                <Box className="selectBox">
                    <Box>Last Week</Box>
                    <img src={DownArrow} alt="down arrow" style={{width: 23, height: 30}}/>
                </Box>
                <Box className="selectBox">
                    <Box>All Categories</Box>
                    <img src={DownArrow} alt="down arrow" style={{width: 23, height: 30}}/>
                </Box>
                <Box className="selectBox">
                    <Box>All Chains</Box>
                    <img src={DownArrow} alt="down arrow" style={{width: 23, height: 30}}/>
                </Box>
            </Box>
            <Box className="headRow" marginTop={12.5}>
                <Box flexGrow={175}>Collection</Box>
                <Box flexGrow={125}>Volume</Box>
                <Box flexGrow={56}>24h%</Box>
                <Box flexGrow={71}>7d%</Box>
                <Box flexGrow={40}>Floor Price</Box>
                <Box flexGrow={40}>Owners</Box>
                <Box>Items</Box>
            </Box>
        </Box>
    );
};


export default Activity;