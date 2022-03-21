import React from "react";
import { Box } from "@material-ui/core";

import "../../assets/SCSS/components/landing/footer.scss";

import SNS from "../../assets/images/footer/sns.png";
import Discord from "../../assets/images/footer/discord.png";
import Telegram from "../../assets/images/footer/telegram.png";
import Instagram from "../../assets/images/footer/instagram.png";
import Twitter from "../../assets/images/footer/twitter.png";
import Facebook from "../../assets/images/footer/facebook.png";
import Reddit from "../../assets/images/footer/reddit.png";
import NftLogo from "../../assets/images/navbar/nftLogo.png";


const Footer = () => {

    return (
        <Box className={"footer_container"}>
            <Box className="footer_content">
                <Box className="join_container">
                    <Box className="signup_container">
                        <Box className="forgetFomo">Forget FOMO</Box>
                        <Box className="signupContext">Join our mailing list to match EGC frequency; Whats new, Feature releases, NFT drops, tips, tricks and more.</Box>
                        <Box className="signupLine">
                            <Box className="signupInputBox">
                                <input className="signupInput" placeholder="Your email address" />
                            </Box>
                            <Box className="signupBtn">Sign up</Box>
                        </Box>
                    </Box>
                    <Box className="joinFamily">
                        <Box className="joinContext">Join Family and Frens</Box>
                        <Box className="joinIcons">
                            <Box>
                                <img src={SNS} style={{ width: 65, height: 65 }} alt="Sns Icon" />
                            </Box>
                            <Box>
                                <img src={Telegram} style={{ width: 48, height: 47 }} alt="Sns Icon" />
                            </Box>
                            <Box>
                                <img src={Discord} style={{ width: 46, height: 47 }} alt="Sns Icon" />
                            </Box>
                            <Box>
                                <img src={Instagram} style={{ width: 48, height: 48 }} alt="Sns Icon" />
                            </Box>
                            <Box>
                                <img src={Twitter} style={{ width: 43, height: 42 }} alt="Sns Icon" />
                            </Box>
                            <Box>
                                <img src={Facebook} style={{ width: 38, height: 37 }} alt="Sns Icon" />
                            </Box>
                            <Box>
                                <img src={Reddit} style={{ width: 52, height: 52 }} alt="Sns Icon" />
                            </Box>
                        </Box>
                    </Box>
                </Box>
                <Box className="bottomPart">
                    <Box className="leftPart">
                        <Box className="footerNftLogo">
                            <img src={NftLogo} alt="Nft Logo" />
                        </Box>
                        <Box className="bottomContext">
                            EGC.NFT Platform. The first-ever decentralized marketplace for easing liquidity in NFT DeFi. Built on BSC, our marketplace allow NFT owners to easily borrow against their NFTs as collateral on fair interest rates without having to sell them. This means you can earn from your NFTs, instead of having them sit there gathering dust in your wallet.
                        </Box>
                    </Box>
                    <Box className="rightPart">
                        <Box>
                            <Box className="linkTitle">Resources</Box>
                            <Box className="link"><u>Help Center</u></Box>
                            <Box className="link"><u>Blog</u></Box>
                        </Box>
                        <Box style={{ paddingLeft: "38px" }}>
                            <Box className="linkTitle">Company</Box>
                            <Box className="link"><u>About</u></Box>
                            <Box className="link"><u>Contact</u></Box>
                        </Box>
                    </Box>
                </Box>
            </Box>
            <Box className="policy_container">
                <Box>&copy;EverGrow all rights reserved 2022</Box>
                <Box display={"flex"}>
                    <Box style={{ paddingRight: 57, cursor: "pointer" }}>Policy</Box>
                    <Box style={{ paddingLeft: 38, cursor: 'pointer' }}>Terms of service</Box>
                </Box>
            </Box>
        </Box>
    );
};

export default Footer;