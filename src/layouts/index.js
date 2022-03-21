import React, { useState } from "react";
import PropTypes from "prop-types";
import { Box } from "@material-ui/core";

import "../assets/SCSS/layouts/layouts.scss"

import Navbar from "./navbar";
import Footer from "../components/landing/footer";

const Layout = ({ children }) => {
    const activeItem = window.localStorage.getItem("activeItem");
    const [layoutRender, setLayoutRender] = useState(0);

    return (
        <Box className={"layouts_container"}>
            <Navbar layoutRender={layoutRender} setLayoutRender={setLayoutRender}/>
            <Box zIndex={0} className="mainContent">{children}</Box>
            {(activeItem === "0" || activeItem === "4" || activeItem === "5" || activeItem === "7") && <Footer />}
            
        </Box>
    );
};

Layout.propTypes = {
    children: PropTypes.node.isRequired,
};

export default Layout;