import React, { useContext, useState } from "react";
import { Box } from "@material-ui/core";

import "../assets/SCSS/pages/crator.scss"

import { LayoutContext } from "../Provider";

import CratorLogo from "../assets/images/crator/cratorLogo.png";
import DownArrow from "../assets/images/crator/downArrow.png";
import ThreeBars from "../assets/images/crator/threeBars.png";
import Cross from "../assets/images/crator/cross.png";
import Warning from "../assets/images/crator/warning.png";
import EtherLogo from "../assets/images/crator/etherLogo.png";


const Crator = () => {
    const [rerender, setRerender] = useState(true);
    if(rerender){
        window.localStorage.setItem("activeItem", "3");
        setRerender(false);
    }
    const { setTitle } = useContext(LayoutContext);
    const [switchVal, setSwitchVal] = useState(false);
    setTitle("MINT ITEM");
    const star = <span style={{ color: "#3072E3" }}>*</span>;

    return (
        <Box className={"crator_container"} >
            <Box>
                <img src={CratorLogo} className="cratorLogo" alt="Crator Logo"/>
            </Box>
            <Box className="inputContainer">
                <Box className="smallTitle">{star}Required Fields</Box>
                <Box marginTop={"30px"} marginBottom={"10px"}>CRATOR User name{star}</Box>
                <Box className="inputBox">
                    <input />
                </Box>
                <Box marginTop={"30px"} marginBottom={"10px"}>Select your CRATOR File{star}</Box>
                <Box className="inputBox"  style={{width: 360}}>
                    <input />
                    <img src={DownArrow} alt="Down Arrow" style={{width: 23, height: 30, padding: "12px"}}/>
                </Box>
                <Box marginTop={"30px"}>Description</Box>
                <Box className="smallTitle" marginBottom={"10px"}>This will be included on your item's detail.</Box>
                <Box className="inputBox"  style={{height: 160}}>
                    <textarea/>
                </Box>
                <Box className="dataBox" marginTop={"30px"}>
                    <Box>
                        <img src={ThreeBars} alt="three bars" style={{width: 32, height: 32, paddingRight: 10, paddingBottom: 10}}/>
                        <Box>
                            <Box>Select one or more categories{star}</Box>
                            <Box className="smallTitle">Art,Collectible, Domain, Music, etc.</Box>
                        </Box>
                    </Box>
                    <Box className="crossBox">
                        <img src={Cross} alt="cross" style={{width:37, height: 37, padding: 8}}/>
                    </Box>
                </Box>
                <Box className="dataBox" marginTop={"30px"}>
                    <Box>
                        <img src={Warning} alt="warning" style={{width: 32, height: 32, paddingRight: 10, paddingBottom: 10}}/>
                        <Box>
                            <Box>Explicit {`&`} Sensitive Content</Box>
                            <Box className="smallTitle">Set as explicit and sensitive content.</Box>
                        </Box>
                    </Box>
                    <Box className="switchBox" onClick={() => {setSwitchVal(!switchVal)}}>
                        <Box style={!switchVal ? {left: 3} : {left: 27}}></Box>
                    </Box>
                </Box>
                <Box marginTop={"30px"}>Supply</Box>
                <Box className="smallTitle" marginBottom={"10px"}>Number of copies to be minted.</Box>
                <Box className="inputBox" width={360}>
                    <input />
                </Box>
                <Box marginTop={"30px"} marginBottom={"10px"}>Chain</Box>
                <Box className="inputBox" width={360}>
                    <Box display={'flex'} flexGrow={1} alignItems={'center'}>
                        <img src={EtherLogo} alt="ether logo" style={{width: 24, height: 39, padding: "8px 16px"}}/>
                        Ethereum
                    </Box>
                    <img src={DownArrow} alt="Down Arrow" style={{width: 23, height: 30, padding: "12px"}}/>
                </Box>
                <Box className="mintBtn" marginTop={"50px"}>MINT</Box>
            </Box>
        </Box>
    );
};


export default Crator;