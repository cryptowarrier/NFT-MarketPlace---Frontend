import React from "react";
import { Box } from "@material-ui/core";

import MainImg from "../../assets/images/market/creatorsProfile/mainImg.png";
import ProfileImg from "../../assets/images/market/creatorsProfile/profileImg.png";
import Instagram from "../../assets/images/footer/instagram.png";
import Twitter from "../../assets/images/footer/twitter.png";
import Facebook from "../../assets/images/footer/facebook.png";
import Share from "../../assets/images/icons/share.png";
import Mail from "../../assets/images/icons/mail.png";
import DarkHeart from "../../assets/images/icons/darkHeart.png";
import Scroll from "../../assets/images/icons/scroll.png";
import Heart from "../../assets/images/icons/heart.png";
import Clock from "../../assets/images/icons/clock.png";
import Collected from "../../assets/images/icons/collected.png";
import Offers from "../../assets/images/icons/offers.png";
import Magnifier from "../../assets/images/icons/magnifier.png";
import DownArrow from "../../assets/images/icons/downArrow.png";

import "../../assets/SCSS/components/market/creatorsProfile.scss";



const CreatorsProfile = () => {

    return (
        <Box className="creatorsProfile">
            <Box className="imgBox">
                <img src={MainImg} alt="Main Img" className="mainImg" />
                <img src={ProfileImg} alt="Profile" className="profileImg" />
            </Box>
            <Box className="board">
                <Box className="snsBoxes">
                    <img src={Instagram} className="snsBox" alt="instagram"></img>
                    <img src={Twitter} className="snsBox" alt="twitter"></img>
                    <img src={Facebook} className="snsBox" alt="facebook"></img>
                </Box>
                <Box className="profileContent">
                    <Box display={"flex"} justifyContent={"space-between"}>
                        <Box className="profileTitle">RichMx</Box>
                        <Box className="actions">
                            <img src={Share} style={{ width: 31, height: 29 }} alt="share" />
                            <img src={Mail} style={{ width: 42, height: 27 }} alt="e-mail" />
                            <Box className="follow">
                                <img src={DarkHeart} style={{ width: 34, height: 30 }} alt="heart" />
                                <Box>Follow</Box>
                            </Box>
                        </Box>
                    </Box>
                    <Box className="context">
                        <img src={Scroll} style={{ width: 33, height: 33 }} alt="scroll" />
                        <Box>Creative Director and Artist for Coca-Cola, Nestle and my own firm. Last Hope Generation CEO & FOUNDER.<br/>Joined May 2021</Box>
                    </Box>
                    <Box className="activities">
                        <Box>
                            <img src={Collected} alt="collected"/>
                            <Box>Collected</Box>
                        </Box>
                        <Box>
                            <img src={Heart} alt="heart"/>
                            <Box>Follow</Box>
                        </Box>
                        <Box>
                            <img src={Clock} alt="heart"/>
                            <Box>Activity</Box>
                        </Box>
                        <Box>
                            <img src={Offers} alt="offers"/>
                            <Box>Offers</Box>
                        </Box>
                    </Box>
                    <Box className="searchSelectBox">
                        <Box>
                            <img src={Magnifier} style={{width: 30, height: 36}} alt="magnifier"/>
                            <input/>
                        </Box>
                        <Box>
                            <Box flexGrow={1}>Recently Listed</Box>
                            <img src={DownArrow} style={{width: 23, height: 30}} alt="down arrow"/>
                        </Box>
                    </Box>
                </Box>
            </Box>
            <Box className="borderBottom"></Box>
        </Box>
    );
};


export default CreatorsProfile;