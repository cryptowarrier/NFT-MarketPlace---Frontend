import React, { useContext } from "react";
import { Box } from "@material-ui/core";

import { LayoutContext } from "../../Provider";

import one from "../../assets/images/market/auctions/1.png";
import two from "../../assets/images/market/auctions/2.png";
import three from "../../assets/images/market/auctions/3.png";
import four from "../../assets/images/market/auctions/4.png";
import five from "../../assets/images/market/auctions/5.png";
import six from "../../assets/images/market/auctions/6.png";

import "../../assets/SCSS/components/market/auctions.scss";
import NewestCard from "../general/newestCard";



const Auctions = () => {
    const { setTitle } = useContext(LayoutContext);
    setTitle("AUCTIONS");

    return (
        <Box className="auctions">
            <NewestCard
                imgUrl={one}
                backColor={"#000"}
                bigTitle={"Acution 1"}
                smallTitle={"Collection TAG"}
                content={<>Description</>}
            />
            <NewestCard
                imgUrl={two}
                backColor={"#000"}
                bigTitle={"Acution 2"}
                smallTitle={"Collection TAG"}
                content={<>Description</>}
            />
            <NewestCard
                imgUrl={three}
                backColor={"#000"}
                bigTitle={"Auction 3"}
                smallTitle={"Collection TAG"}
                content={<>Description</>}
            />
            <NewestCard
                imgUrl={four}
                backColor={"#000"}
                bigTitle={"Auction 4"}
                smallTitle={"Collection TAG"}
                content={<>Description</>}
            />
            <NewestCard
                imgUrl={five}
                backColor={"#000"}
                bigTitle={"Auction 5"}
                smallTitle={"Collection TAG"}
                content={<>Description</>}
            />
            <NewestCard
                imgUrl={six}
                backColor={"#000"}
                bigTitle={"Auction 6"}
                smallTitle={"Collection TAG"}
                content={<>Description</>}
            />
        </Box>
    );
};


export default Auctions;