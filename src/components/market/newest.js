import React, { useContext } from "react";
import { Box } from "@material-ui/core";

import { LayoutContext } from "../../Provider";

import one from "../../assets/images/market/newest/1.png";
import two from "../../assets/images/market/newest/2.png";
import three from "../../assets/images/market/newest/3.png";
import four from "../../assets/images/market/newest/4.png";
import five from "../../assets/images/market/newest/5.png";
import six from "../../assets/images/market/newest/6.png";

import "../../assets/SCSS/components/market/newest.scss";
import NewestCard from "../general/newestCard";



const Newest = () => {
    const { setTitle } = useContext(LayoutContext);
    setTitle("NEWEST");

    return (
        <Box className="newest">
            <NewestCard
                imgUrl={one}
                backColor={"#e5b200"}
                bigTitle={"Dancing with flowers"}
                smallTitle={"Photography Collection"}
                content={<>My dress is a beautiful yellow flower,<br/>nature was the first clothings.</>}
            />
            <NewestCard
                imgUrl={two}
                backColor={"#01529B"}
                bigTitle={"My Blue clear"}
                smallTitle={"Photography Collection"}
                content={<>In my peaceful favorite place<br/>blue is the one I love.</>}
            />
            <NewestCard
                imgUrl={three}
                backColor={"#FF5949"}
                bigTitle={"Abstract Glass"}
                smallTitle={"Photography Collection"}
                content={<>Minuta di Palma is a type of Glass, the light<br/>and reflection composse beautiful colors.</>}
            />
            <NewestCard
                imgUrl={four}
                backColor={"#DFF3FD"}
                bigTitle={"Just a Wall"}
                smallTitle={"Photography Collection"}
                content={<>This is how I see things are beautiful <br/>and meaningful.</>}
            />
            <NewestCard
                imgUrl={five}
                backColor={"#AC2CF2"}
                bigTitle={"Me in Pink"}
                smallTitle={"Photography Collection"}
                content={<>Pink as a reference of who I am.</>}
            />
            <NewestCard
                imgUrl={six}
                backColor={"#463526"}
                bigTitle={"Cold on Earth"}
                smallTitle={"Photography Collection"}
                content={<>Ice is a stone until it melt, then <br/>the water flow and stone disapear.</>}
            />
        </Box>
    );
};


export default Newest;