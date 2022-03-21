import React, {useContext} from "react";
import { Box } from "@material-ui/core";

import { LayoutContext } from "../../Provider";
import "../../assets/SCSS/components/market/explore.scss";
import ExploreCard from "../general/exploreCard";
import { baseUrl } from "../../service/api.service";



const Explore = ({items, title}) => {
    const { setTitle } = useContext(LayoutContext);
    setTitle(title);
    return (
        <Box className="explore">
            {
                items.map((item, i) =>(
                    <ExploreCard key={i} imgSrc={item.imageLink} title={item.name} content={item.category}/>
                ) )
            }
        </Box>
    );
};


export default Explore;