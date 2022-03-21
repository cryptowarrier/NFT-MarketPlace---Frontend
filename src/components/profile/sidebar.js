import React from "react";
import { Box } from "@material-ui/core";

import "../../assets/SCSS/components/profile/sidebar.scss";

import UserIcon from "../../assets/images/navbar/userIcon.png";
import Notification from "../../assets/images/navbar/notification.png";
import Offers from "../../assets/images/navbar/offers.png";
import Support from "../../assets/images/navbar/support.png";




const Sidebar = () => {

    return (
        <Box className={"sidebar_container"} >
            <Box className="sidebar_item">
                <Box className="sidebar_icon">
                    <img src={UserIcon} alt="User Icon"/>
                </Box>
                <Box className="sidebar_context">
                    Profile
                </Box>
            </Box>
            <Box className="sidebar_item">
                <Box className="sidebar_icon">
                    <img src={Notification} alt="Notification Icon"/>
                </Box>
                <Box className="sidebar_context">
                    Notifications
                </Box>
            </Box>
            <Box className="sidebar_item">
                <Box className="sidebar_icon">
                    <img src={Offers} alt="Offers Icon"/>
                </Box>
                <Box className="sidebar_context">
                    Offers
                </Box>
            </Box>
            <Box className="sidebar_item">
                <Box className="sidebar_icon">
                    <img src={Support} alt="Support Icon"/>
                </Box>
                <Box className="sidebar_context">
                    Support
                </Box>
            </Box>
        </Box>
    );
};


export default Sidebar;