import React, { useContext } from "react";
import { Box } from "@material-ui/core";

import { LayoutContext } from "../../Provider";

import one from "../../assets/images/market/drops/1.png";
import two from "../../assets/images/market/drops/2.png";
import three from "../../assets/images/market/drops/3.png";
import four from "../../assets/images/market/drops/4.png";
import five from "../../assets/images/market/drops/5.png";
import six from "../../assets/images/market/drops/6.png";

import "../../assets/SCSS/components/market/drops.scss";
import NewestCard from "../general/newestCard";



const Drops = () => {
    const { setTitle } = useContext(LayoutContext);
    setTitle("FEATUREDROPS");

    return (
        <Box className="drops">
            <NewestCard
                imgUrl={one}
                backColor={"#362046"}
                bigTitle={"Nature is beauty"}
                smallTitle={"Digital Art Collection"}
                content={<>Different perspective,<br/>a whole new world.</>}
            />
            <NewestCard
                imgUrl={two}
                backColor={"#ED4CF1"}
                bigTitle={"EGC the Future"}
                smallTitle={"Digital Art Collection"}
                content={<>EGC Ecosystem can guide you<br/>to a successful and peaceful economy life.</>}
            />
            <NewestCard
                imgUrl={three}
                backColor={"#B50000"}
                bigTitle={"Dragon King"}
                smallTitle={"Digital Art Collection"}
                content={<>RED King Ultra-rare and Powerful.</>}
            />
            <NewestCard
                imgUrl={four}
                backColor={"#003A88"}
                bigTitle={"The Tarkus"}
                smallTitle={"Digital Art Collection"}
                content={<>Different perspective,<br/>a whole new world.</>}
            />
            <NewestCard
                imgUrl={five}
                backColor={"#FF9429"}
                bigTitle={"My Sunny Monkey"}
                smallTitle={"Digital Art Collection"}
                content={<>Different perspective,<br/>a whole new world.</>}
            />
            <NewestCard
                imgUrl={six}
                backColor={"#000"}
                bigTitle={"EGC N0018"}
                smallTitle={"Digital Art Collection"}
                content={<>Different perspective,<br/>a whole new world.</>}
            />
        </Box>
    );
};


export default Drops;