import React from "react";
import { Box } from "@material-ui/core";

import "../../assets/SCSS/components/general/categoryBtn.scss";



const CategoryBtn = ({backColor, color, isActive, content, onClick}) => {

    return (
        <Box className={"categoryButton"} style={isActive?{backgroundColor: "black", color:"white"} :{backgroundColor: backColor, color: color}} onClick={onClick}>
            {content}
        </Box>
    );
};


export default CategoryBtn;