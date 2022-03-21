import React from "react";
import { Box } from "@material-ui/core";

import MainImg from "../../assets/images/market/collectinosProfile/mainImg.png";
import ProfileImg from "../../assets/images/market/collectinosProfile/profileImg.png";
import Instagram from "../../assets/images/footer/instagram.png";
import Twitter from "../../assets/images/footer/twitter.png";
import Facebook from "../../assets/images/footer/facebook.png";
import Discord from "../../assets/images/footer/discord.png";
import Explorer from "../../assets/images/footer/explorer.png";
import Share from "../../assets/images/icons/share.png";
import Mail from "../../assets/images/icons/mail.png";
import DarkHeart from "../../assets/images/icons/darkHeart.png";
import EtherLogo from "../../assets/images/coinLogos/etherLogo.png";
import Scroll from "../../assets/images/icons/scroll.png";
import Heart from "../../assets/images/icons/heart.png";
import Clock from "../../assets/images/icons/clock.png";
import Items from "../../assets/images/icons/items.png";
import Magnifier from "../../assets/images/icons/magnifier.png";
import DownArrow from "../../assets/images/icons/downArrow.png";

import "../../assets/SCSS/components/market/collectionsProfile.scss";



const CollectionsProfile = () => {

    return (
        <Box className="collectionsProfile">
            <Box className="imgBox">
                <img src={MainImg} alt="Main Img" className="mainImg" />
                <img src={ProfileImg} alt="Profile" className="profileImg" />
            </Box>
            <Box className="board">
                <Box className="snsBoxes">
                    <img src={Instagram} className="snsBox" alt="instagram"></img>
                    <img src={Twitter} className="snsBox" alt="twitter"></img>
                    <img src={Facebook} className="snsBox" alt="facebook"></img>
                    <img src={Discord} className="snsBox" alt="discord"></img>
                    <img src={Explorer} className="snsBox" alt="explorer"></img>
                </Box>
                <Box className="profileContent">
                    <Box display={"flex"} justifyContent={"space-between"}>
                        <Box className="profileTitle">KING of KINGS CLUB<br />Official</Box>
                        <Box className="actions">
                            <img src={Share} style={{ width: 31, height: 29 }} alt="share" />
                            <img src={Mail} style={{ width: 42, height: 27 }} alt="e-mail" />
                            <Box className="follow">
                                <img src={DarkHeart} style={{ width: 34, height: 30 }} alt="heart" />
                                <Box>Follow</Box>
                            </Box>
                        </Box>
                    </Box>
                    <Box className="priceBox">
                        <Box flex={1}>
                            <Box className="number">10K</Box>
                            <Box className="description">items</Box>
                        </Box>
                        <Box flex={1}>
                            <Box className="number">7.8K</Box>
                            <Box className="description">owners</Box>
                        </Box>
                        <Box flex={1} display={"flex"}>
                            <img src={EtherLogo} style={{ width: 25, height: 40, padding: "0px 10px" }} alt="Ether Logo" />
                            <Box>
                                <Box className="number">0.549</Box>
                                <Box className="description">floor price</Box>
                            </Box>
                        </Box>
                        <Box flex={1} display={"flex"}>
                            <img src={EtherLogo} style={{ width: 25, height: 40, padding: "0px 10px" }} alt="Ether Logo" />
                            <Box>
                                <Box className="number">789</Box>
                                <Box className="description">volume traded</Box>
                            </Box>
                        </Box>
                    </Box>
                    <Box className="context">
                        <img src={Scroll} style={{ width: 33, height: 33 }} alt="scroll" />
                        <Box>KING of KINGS is a collection of 10,000 unique Luxury-King-Assets generated from 200+ different traits. Holders will fund & own palces in Decentraland & Sandbox.</Box>
                    </Box>
                    <Box className="activities">
                        <Box>
                            <img src={Heart} alt="heart"/>
                            <Box>Follow</Box>
                        </Box>
                        <Box>
                            <img src={Clock} alt="heart"/>
                            <Box>Activity</Box>
                        </Box>
                        <Box>
                            <img src={Items} alt="heart"/>
                            <Box>Items</Box>
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


export default CollectionsProfile;