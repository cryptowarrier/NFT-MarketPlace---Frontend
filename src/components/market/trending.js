import React, { useContext } from "react";
import { Box } from "@material-ui/core";

import { LayoutContext } from "../../Provider";

import one from "../../assets/images/market/trending/1.png";
import two from "../../assets/images/market/trending/2.png";
import three from "../../assets/images/market/trending/3.png";
import four from "../../assets/images/market/trending/4.png";
import five from "../../assets/images/market/trending/5.png";
import six from "../../assets/images/market/trending/6.png";

import "../../assets/SCSS/components/market/trending.scss";
import NewestCard from "../general/newestCard";



const Trending = () => {
    const { setTitle } = useContext(LayoutContext);
    setTitle("TRENDING");

    return (
        <Box className="trending">
            <NewestCard
                imgUrl={one}
                backColor={"#000"}
                bigTitle={"Allien_00204"}
                smallTitle={"Monsters Collection"}
                content={<>Owning one of the Monsters gives you exclusive acces to NFT future and exlusive drops.</>}
            />
            <NewestCard
                imgUrl={two}
                backColor={"#01172C"}
                bigTitle={"Monkey_01176"}
                smallTitle={"Monsters Collection"}
                content={<>Owning one of the Monsters gives you exclusive acces to NFT future and exlusive drops.</>}
            />
            <NewestCard
                imgUrl={three}
                backColor={"#000"}
                bigTitle={"Gorilla_78770"}
                smallTitle={"Monsters Collection"}
                content={<>Owning one of the Monsters gives you exclusive acces to NFT future and exlusive drops.</>}
            />
            <NewestCard
                imgUrl={four}
                backColor={"#000"}
                bigTitle={"Monkey_01675"}
                smallTitle={"Monsters Collection"}
                content={<>Owning one of the Monsters gives you exclusive acces to NFT future and exlusive drops.</>}
            />
            <NewestCard
                imgUrl={five}
                backColor={"#000"}
                bigTitle={"Gorilla_00002"}
                smallTitle={"Monsters Collection"}
                content={<>Owning one of the Monsters gives you exclusive acces to NFT future and exlusive drops.</>}
            />
            <NewestCard
                imgUrl={six}
                backColor={"#000"}
                bigTitle={"Rhino_131313"}
                smallTitle={"Monsters Collection"}
                content={<>Owning one of the Monsters gives you exclusive acces to NFT future and exlusive drops.</>}
            />
        </Box>
    );
};


export default Trending;