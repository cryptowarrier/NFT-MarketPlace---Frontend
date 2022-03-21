import React, {useContext} from "react";
import { Box } from "@material-ui/core";

import { LayoutContext } from "../../Provider";

import one from "../../assets/images/market/collections/1.png";
import two from "../../assets/images/market/collections/2.png";
import three from "../../assets/images/market/collections/3.png";
import four from "../../assets/images/market/collections/4.png";
import five from "../../assets/images/market/collections/5.png";
import six from "../../assets/images/market/collections/6.png";
import seven from "../../assets/images/market/collections/7.png";
import eight from "../../assets/images/market/collections/8.png";
import nine from "../../assets/images/market/collections/9.png";
import ten from "../../assets/images/market/collections/10.png";
import eleven from "../../assets/images/market/collections/11.png";
import twelve from "../../assets/images/market/collections/12.png";
import Art from "../../assets/images/market/sidebar/art.png";
import Metaverse from "../../assets/images/market/sidebar/metaverse.png";
import EtherLogo from "../../assets/images/coinLogos/etherLogo.png";
import EgcLogo from "../../assets/images/coinLogos/egcLogo.png";

import "../../assets/SCSS/components/market/collections.scss";
import MarketCard from "../general/marketCard";



const Collections = ({setCollection}) => {
    const { setTitle } = useContext(LayoutContext);
    setTitle("COLLECTIONS");

    return (
        <Box className="collections">
            <MarketCard setCollection={setCollection} imgSrc={one} title={"TRIBUTE to Blue"} content={"Digital Art Collection"} context={<>Different perspective,<br/>a whole new world.</>} categoryImg={Art} coinLogo={EtherLogo} price={0.1}/>
            <MarketCard setCollection={setCollection} imgSrc={two} title={"The Red Tribute"} content={"Digital 3D Art Collection"} context={<>EGC Ecosystem can guide you<br/>to a successful and peaceful economy life.</>} categoryImg={Art} coinLogo={EtherLogo} price={0.1}/>
            <MarketCard setCollection={setCollection} imgSrc={three} title={"EGC - NINJAs"} content={"Metaverse Collectin"} context={<>RED King Ultra-rare and Powerful.</>} categoryImg={Metaverse} coinLogo={EgcLogo} price={10000000}/>
            <MarketCard setCollection={setCollection} imgSrc={four} title={"TRIBUTE to Blue"} content={"Digital Art Collection"} context={<>Different perspective,<br/>a whole new world.</>} categoryImg={Art} coinLogo={EtherLogo} price={0.1}/>
            <MarketCard setCollection={setCollection} imgSrc={five} title={"The Red Tribute"} content={"Digital 3D Art Collection"} context={<>EGC Ecosystem can guide you<br/>to a successful and peaceful economy life.</>} categoryImg={Art} coinLogo={EtherLogo} price={0.1}/>
            <MarketCard setCollection={setCollection} imgSrc={six} title={"EGC - NINJAs"} content={"Metaverse Collectin"} context={<>RED King Ultra-rare and Powerful.</>} categoryImg={Metaverse} coinLogo={EgcLogo} price={10000000}/>
            <MarketCard setCollection={setCollection} imgSrc={seven} title={"TRIBUTE to Blue"} content={"Digital Art Collection"} context={<>Different perspective,<br/>a whole new world.</>} categoryImg={Metaverse} coinLogo={EtherLogo} price={0.1}/>
            <MarketCard setCollection={setCollection} imgSrc={eight} title={"The Red Tribute"} content={"Digital 3D Art Collection"} context={<>EGC Ecosystem can guide you<br/>to a successful and peaceful economy life.</>} categoryImg={Art} coinLogo={EgcLogo} price={25000000}/>
            <MarketCard setCollection={setCollection} imgSrc={nine} title={"EGC - NINJAs"} content={"Metaverse Collectin"} context={<>RED King Ultra-rare and Powerful.</>} categoryImg={Art} coinLogo={EtherLogo} price={1.5}/>
            <MarketCard setCollection={setCollection} imgSrc={ten} title={"TRIBUTE to Blue"} content={"Digital Art Collection"} context={<>Different perspective,<br/>a whole new world.</>} categoryImg={Metaverse} coinLogo={EtherLogo} price={0.1}/>
            <MarketCard setCollection={setCollection} imgSrc={eleven} title={"The Red Tribute"} content={"Digital 3D Art Collection"} context={<>EGC Ecosystem can guide you<br/>to a successful and peaceful economy life.</>} categoryImg={Art} coinLogo={EgcLogo} price={25000000}/>
            <MarketCard setCollection={setCollection} imgSrc={twelve} title={"EGC - NINJAs"} content={"Metaverse Collectin"} context={<>RED King Ultra-rare and Powerful.</>} categoryImg={Art} coinLogo={EtherLogo} price={1.5}/>
        </Box>
    );
};


export default Collections;