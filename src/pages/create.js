import React, { useRef, useState, useEffect } from "react";
import { Box } from "@material-ui/core";
import { useDispatch, useSelector } from 'react-redux';
import { createItem } from "../reducers/itemSlice";
import CategoryDialog from "../components/common/CategoryDialog";
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import { makeStyles } from '@material-ui/core/styles';
import FormControl from '@material-ui/core/FormControl';
import { addNet, switchNet } from "../constants/network";

import { uploadService } from '../service/api.service';

import "../assets/SCSS/pages/create.scss"

import { LayoutContext } from "../Provider";

import UploadImage from "../assets/images/create/upload.png";
import Properties from "../assets/images/create/properties.png";
import Unlock from "../assets/images/create/unlock.png";
import ThreeBars from "../assets/images/crator/threeBars.png";
import Cross from "../assets/images/crator/cross.png";
import Warning from "../assets/images/crator/warning.png";
import EtherLogo from "../assets/images/crator/etherLogo.png";
import DownArrow from "../assets/images/crator/downArrow.png";
import { baseUrl } from "../service/api.service";
import NFTToken from '../contracts/NFTToken.sol/NFTToken.json';
import { ethers } from 'ethers';
import { address } from '../constants/address';
import { categories } from "../constants/general";

const useStyles = makeStyles(() => ({
    formControl: {
        margin: 0,
        width: 360,
    }
}));

const newItem = {
    name: '',
    externalLink: '',
    description: '',
    unlockable: false,
    sensitive: false,
    numberOfCopy: 1,
    chain: 97,
    category: categories[0]
}
const Create = () => {
    const [imgUrl, setImgUrl] = useState(null);
    const [image, setImage] = useState(null);
    const [item, setItem] = useState(newItem);
    const [openCategoryDlg, setOpenCategoryDlg] = useState(false);

    const dispatch = useDispatch();

    const [unlockSwitch, setUnlockSwitch] = useState(false);
    const [sensitive, setSensitive] = useState(false);

    const { userInfo } = useSelector(state => state.user);

    const classes = useStyles();


    const fileInput = useRef();

    const star = <span style={{ color: "#C437E6" }}>*</span>;

    const handleUpload = (event) => {
        setImgUrl(URL.createObjectURL(event.target.files[0]));
        setImage(event.target.files[0]);
    }

    const changeItem = (e) => {
        const name = e.target.name;
        setItem({ ...item, [name]: e.target.value });
    }

    const changeUnlockable = () => {
        const currentVal = unlockSwitch;
        setUnlockSwitch(!currentVal);
        setItem({ ...item, unlockable: !currentVal });
    }

    const changeSensitive = () => {
        const currentVal = sensitive;
        setSensitive(!currentVal);
        setItem({ ...item, sensitive: !currentVal });
    }

    const requestMint = async () => {
        if (!userInfo) window.alert("connect wallet!");
        if (typeof window.ethereum !== 'undefined') {
            if(item.chain !== 3) {
                await window.ethereum.request(addNet(item.chain));
            }            
            await window.ethereum.request(switchNet(item.chain));
            const formData = new FormData();
            formData.append('file', image);
            const response = await uploadService(formData);
            const uri = `${baseUrl}art/${response}`
            const provider = new ethers.providers.Web3Provider(window.ethereum);
            const signer = provider.getSigner();
            const contract = new ethers.Contract(address[item.chain]['nft'], NFTToken.abi, signer);
            await contract.mint(uri);
            dispatch(createItem({ ...item, imageLink: uri, user: userInfo.wallet }));
        }
    }

    return (
        <Box className={"create_container"} >
            <CategoryDialog
                open={openCategoryDlg}
                onClose={() => setOpenCategoryDlg(false)}
                selectedValue={item.category}
                categoryChange={e => setItem({ ...item, category: e.target.value })}
            />
            <Box flexGrow={538}></Box>
            <Box className="inputContainer">
                <Box>CREATE NEW NFT</Box>
                <Box className="smallTitle" marginTop={1
                }>{star}Required fields</Box>
                <Box marginTop={3}>Image, Video, Audio, or 3D Model{star}<span className="smallTitle" style={{ color: "#C437E6", fontWeight: "bold" }}>Max size: X MB </span></Box>
                <Box className="fileBox" onClick={() => fileInput.current.click()} marginTop={1}>
                    {
                        !!imgUrl ? (
                            <img src={imgUrl} style={{ height: "100%" }} alt="upload" />
                        ) : (
                            <img src={UploadImage} style={{ width: "117px", height: "117px" }} alt="upload" />
                        )
                    }
                </Box>
                <input type={"file"} ref={fileInput} style={{ display: "none" }} onChange={handleUpload} />
                <Box marginTop={3}>Item name{star}</Box>
                <Box className="inputBox" marginTop={1}>
                    <input type="text" name="name" value={item.name} onChange={changeItem} />
                </Box>
                <Box marginTop={3}>External link</Box>
                <Box className="smallTitle">EGC will included a link you can share and promote your NFT. You can link your own webpage.</Box>
                <Box className="inputBox" marginTop={1}>
                    <input type="text" name="externalLink" value={item.externalLink} onChange={changeItem} />
                </Box>
                <Box marginTop={3}>Description</Box>
                <Box className="smallTitle">This will be included on your item's detail.</Box>
                <Box className="inputBox" style={{ height: 160 }} marginTop={1}>
                    <textarea value={item.description} name="description" onChange={changeItem} />
                </Box>
                <Box className="dataBox" marginTop={"30px"}>
                    <Box>
                        <img src={ThreeBars} alt="three bars" style={{ width: 32, height: 32, paddingRight: 10, paddingBottom: 10 }} />
                        <Box>
                            <Box>Select one or more categories{star}</Box>
                            <Box className="smallTitle">Art,Collectible, Domain, Music, etc.</Box>
                        </Box>
                    </Box>
                    <Box onClick={() => setOpenCategoryDlg(true)} className="crossBox">
                        <img src={Cross} alt="cross" style={{ width: 37, height: 37, padding: 8 }} />
                    </Box>
                </Box>
                <Box marginLeft={"100px"}>
                    {item.category}
                </Box>
                <Box className="dataBox" marginTop={"30px"}>
                    <Box>
                        <img src={Properties} alt="properties" style={{ width: 32, height: 32, paddingRight: 10, paddingBottom: 10 }} />
                        <Box>
                            <Box>Properties</Box>
                            <Box className="smallTitle">Textual traits will show up as rectangles.</Box>
                        </Box>
                    </Box>
                    <Box className="crossBox">
                        <img src={Cross} alt="cross" style={{ width: 37, height: 37, padding: 8 }} />
                    </Box>
                </Box>
                <Box className="dataBox" marginTop={"30px"}>
                    <Box>
                        <img src={Unlock} alt="unlock" style={{ width: 32, height: 32, paddingRight: 10, paddingBottom: 10 }} />
                        <Box>
                            <Box>Unlockable Content</Box>
                            <Box className="smallTitle">Content that only be seen by the owner.</Box>
                        </Box>
                    </Box>
                    <Box className="switchBox" onClick={changeUnlockable}>
                        <Box style={!unlockSwitch ? { left: 3 } : { left: 27 }}></Box>
                    </Box>
                </Box>
                <Box className="dataBox" marginTop={"30px"}>
                    <Box>
                        <img src={Warning} alt="warning" style={{ width: 32, height: 32, paddingRight: 10, paddingBottom: 10 }} />
                        <Box>
                            <Box>Explicit {`&`} Sensitive Content</Box>
                            <Box className="smallTitle">Set as explicit and sensitive content.</Box>
                        </Box>
                    </Box>
                    <Box className="switchBox" onClick={changeSensitive}>
                        <Box style={!sensitive ? { left: 3 } : { left: 27 }}></Box>
                    </Box>
                </Box>
                <Box marginTop={3}>Supply</Box>
                <Box className="smallTitle">Number of copies to be minted.</Box>
                <Box className="inputBox box360" marginTop={1}>
                    <input defaultValue={item.numberOfCopy} />
                </Box>
                <Box marginTop={3}>Chain</Box>
                {/* <Box className="inputBox box360" marginTop={1}>
                    <Box display={'flex'} flexGrow={1} alignItems={'center'}>
                        <img src={EtherLogo} alt="ether logo" style={{ width: 24, height: 39, padding: "8px 16px" }} />
                        Ethereum
                    </Box>
                    <img src={DownArrow} alt="Down Arrow" style={{ width: 23, height: 30, padding: "12px" }} />
                </Box> */}
                <FormControl variant="outlined" className={classes.formControl}>
                    <Select
                        value={item.chain}
                        name="chain"
                        onChange={changeItem}
                    >
                        <MenuItem value={3}>
                            Ethereum
                        </MenuItem>
                        <MenuItem value={97}>Smart Chain</MenuItem>
                    </Select>
                </FormControl>
                <Box onClick={requestMint} className="mintBtn" marginTop={"50px"}>MINT</Box>
            </Box>
            <Box flexGrow={574}></Box>
        </Box>
    );
};


export default Create;