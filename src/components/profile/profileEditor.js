import React, { useContext, useEffect, useRef, useState } from "react";
import { Box } from "@material-ui/core";
import { uploadService } from "../../service/api.service";

import "../../assets/SCSS/components/profile/profileEditor.scss";

import Twitter from "../../assets/images/footer/twitter.png";
import Instagram from "../../assets/images/footer/instagram.png";
import Discord from "../../assets/images/footer/discord.png";
import Facebook from "../../assets/images/footer/facebook.png";
import Explorer from "../../assets/images/footer/explorer.png";
import Uploader from "../../assets/images/profile/uploader.png";
import Eye from "../../assets/images/profile/eye.png";

import { LayoutContext } from "../../Provider";
import { useDispatch, useSelector } from "react-redux";
import { baseUrl } from "../../service/api.service";
import { getUserByWallet, saveProfile } from "../../reducers/userSlice";
import { newUser } from "../../constants/general";


const ProfileEditor = () => {
    const [user, setUser] = useState(newUser);
    const [avatar, setAvatar] = useState(null);
    const [avatarUrl, setAvatarUrl] = useState(null);
    const [banner, setBanner] = useState(null);
    const [bannerUrl, setBannerUrl] = useState(null);
    const { setTitle } = useContext(LayoutContext);
    const star = <span style={{ color: "#C437E6" }}>*</span>;

    const { userInfo, profile } = useSelector(state => state.user);
    const avatarRef = useRef();
    const bannerRef = useRef();
    const dispatch = useDispatch();

    useEffect(() => {
        setTitle("PROFILE");
    }, []);

    useEffect(() => {
        setUser({ ...user, wallet: userInfo.wallet });
        if (!!userInfo) {
            dispatch(getUserByWallet(userInfo.wallet));
        }
    }, [userInfo.wallet]);

    useEffect(() => {
        setUser(!!profile ? profile : newUser);
    }, [profile]);
    // change user
    const changeUser = (e) => {
        const name = e.target.name;
        setUser({ ...user, [name]: e.target.value });
    }

    // handle avatar upload
    const handleAvatar = (e) => {
        setAvatarUrl(URL.createObjectURL(e.target.files[0]));
        setAvatar(e.target.files[0]);
    }
    // handle banner upload
    const handleBanner = (e) => {
        setBannerUrl(URL.createObjectURL(e.target.files[0]));
        setBanner(e.target.files[0]);
    }

    // save user
    const saveUser = async () => {
        let avatarLink = '';
        let bannerLink = '';
        if (!!avatar) {
            const formData1 = new FormData();
            formData1.append('file', avatar);
            const response = await uploadService(formData1);
            avatarLink = `${baseUrl}art/${response}`;
        }
        if (!!banner) {
            const formData2 = new FormData();
            formData2.append('file', banner);
            const response = await uploadService(formData2);
            bannerLink = `${baseUrl}art/${response}`;
        }
        dispatch(saveProfile({ ...user, avatar: avatarLink, banner: bannerLink }));
    }

    return (
        <Box className={"profileEditor_container"} >
            {/* <Box className="Title">PROFILE</Box> */}
            <Box className="line"></Box>
            <Box className="mainBox">
                <Box className="inputBoxes">
                    <Box>SETTINGS</Box>
                    <Box fontSize={20} lineHeight={"22px"} padding={"8px 0px"}>{star}Required Fields</Box>
                    <Box paddingBottom={"10px"}>Username{star}</Box>
                    <Box className="inputBox">
                        <input type="text" name="username" value={user.username} onChange={changeUser} />
                    </Box>
                    <Box className="inputLabel">Bio{star}</Box>
                    <Box className="inputBox" style={{ height: "194px" }}>
                        <textarea type="text" name="bio" value={user.bio} onChange={changeUser} />
                    </Box>
                    <Box className="inputLabel">Email Address{star}</Box>
                    <Box className="inputBox">
                        <input type="text" name="email" value={user.email} onChange={changeUser} />
                    </Box>
                    <Box className="inputLabel">Links</Box>
                    <Box className="inputBox sns">
                        <img src={Twitter} alt="Twitter" style={{ width: 43, height: 43 }} />
                        <input type="text" name="twitter" value={user.twitter} onChange={changeUser} />
                    </Box>
                    <Box className="inputBox sns">
                        <img src={Instagram} alt="Instagram" style={{ width: 48, height: 48 }} />
                        <input type="text" name="instagram" value={user.instagram} onChange={changeUser} />
                    </Box>
                    <Box className="inputBox sns">
                        <img src={Discord} alt="Discord" style={{ width: 45, height: 45 }} />
                        <input type="text" name="discord" value={user.discord} onChange={changeUser} />
                    </Box>
                    <Box className="inputBox sns">
                        <img src={Facebook} alt="Facebook" style={{ width: 38, height: 38 }} />
                        <input type="text" name="facebook" value={user.facebook} onChange={changeUser} />
                    </Box>
                    <Box className="inputBox sns">
                        <img src={Explorer} alt="Explorer" style={{ width: 39, height: 39 }} />
                        <input type="text" name="website" value={user.website} onChange={changeUser} />
                    </Box>
                    <Box className="inputLabel">Wallet</Box>
                    <Box className="inputBox"><input type="text" value={user.wallet} readOnly /></Box>
                    <Box onClick={saveUser} className="saveBtn">Save</Box>
                </Box>
                <Box className="fileBoxes">
                    <Box className="inputLabel" style={{ paddingTop: 70 }}>Profile Image</Box>
                    <Box onClick={() => avatarRef.current.click()} className="imageUploader">
                        {
                            !!avatarUrl ? (
                                <img src={avatarUrl} alt="uploader" style={{ width: 240, height: 240, borderRadius: "50%" }} />
                            ) : (
                                <>
                                    {
                                        !!user.avatar ? (
                                            <img src={user.avatar} alt="uploader" style={{ width: 240, height: 240, borderRadius: "50%" }} />
                                        ) : (
                                            <img src={Uploader} alt="uploader" style={{ width: 70, height: 70 }} />
                                        )
                                    }
                                </>
                            )

                        }
                    </Box>
                    <input type="file" ref={avatarRef} style={{ display: "none" }} onChange={handleAvatar} />
                    <Box className="inputLabel">Profile Banner</Box>
                    <Box onClick={() => bannerRef.current.click()} className="bannerUploader">
                        {
                            !!bannerUrl ? (
                                <img src={bannerUrl} alt="uploader" style={{ height: 190 }} />
                            ) : (
                                <>
                                    {
                                        !!user.banner ? (
                                            <img src={user.banner} alt="uploader" style={{ height: 190 }} />
                                        ) : (
                                            <img src={Uploader} alt="uploader" style={{ width: 70, height: 70 }} />
                                        )
                                    }
                                </>
                            )

                        }
                    </Box>
                    <input type="file" ref={bannerRef} style={{ display: "none" }} onChange={handleBanner} />
                    <Box className="previewProfile">
                        <Box>Preview Profile</Box>
                        <img src={Eye} alt="Preview" style={{ width: 37, height: 37 }} />
                    </Box>
                </Box>
            </Box>
        </Box>
    );
};


export default ProfileEditor;