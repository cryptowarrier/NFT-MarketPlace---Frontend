import React, { useState } from "react";
import { Box } from "@material-ui/core";

import "../assets/SCSS/pages/profile.scss"

import Sidebar from "../components/profile/sidebar";
import ProfileEditor from "../components/profile/profileEditor";


const Profile = () => {
    const [rerender, setRerender] = useState(true);
    if(rerender){
        window.localStorage.setItem("activeItem", "7");
        setRerender(false);
    }
    return (
        <Box className={"profile_container"} >
            <Box className="profile_content">
                <Sidebar/>
                <ProfileEditor/>
            </Box>
        </Box>
    );
};


export default Profile;