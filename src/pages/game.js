import React, { useContext, useState } from "react";
import { Box } from "@material-ui/core";

import "../assets/SCSS/pages/game.scss"

import { LayoutContext } from "../Provider";
import GameCard from "../components/game/gameCard";
import Colors from "../constants/colorConstants";
import Strings from "../constants/stringConstants"

import O1 from "../assets/images/game/o1.png";
import O2 from "../assets/images/game/o2.png";
import O3 from "../assets/images/game/o3.png";
import O4 from "../assets/images/game/o4.png";
import O5 from "../assets/images/game/o5.png";
import O6 from "../assets/images/game/o6.png";
import M1 from "../assets/images/game/m1.png";
import M2 from "../assets/images/game/m2.png";
import M3 from "../assets/images/game/m3.png";
import M4 from "../assets/images/game/m4.png";
import M5 from "../assets/images/game/m5.png";
import M6 from "../assets/images/game/m6.png";


const Game = () => {
    const [rerender, setRerender] = useState(true);
    if(rerender){
        window.localStorage.setItem("activeItem", "2");
        setRerender(false);
    }
    const { setTitle } = useContext(LayoutContext);
    const [categoryflag, setCategoryflag] = useState(true);
    const imgUrlOracle = [O1, O2, O3, O4, O5, O6];
    const imgUrlMulti = [M1, M2, M3, M4, M5, M6];
    const backColorsOracle = [Colors.c1, Colors.c2, Colors.c3, Colors.c4, Colors.c5, Colors.c6];
    const bigTitlesOracle = [Strings.o1, Strings.o2, Strings.o3, Strings.o4, Strings.o5, Strings.o6];
    const bigTitlesMulti = [Strings.m1, Strings.m2, Strings.m3, Strings.m4, Strings.m5, Strings.m6];

    if (categoryflag) setTitle("ORACLE");
    else setTitle("MULTIPLAYER");

    return (
        <Box className={"game_container"} >
            <Box className="categories">
                <Box className={categoryflag ? "categoryBtn active" : "categoryBtn"} onClick={() => { setCategoryflag(true) }}>Oracle</Box>
                <Box className={!categoryflag ? "categoryBtn active" : "categoryBtn"} onClick={() => { setCategoryflag(false) }}>Multiplayer</Box>
            </Box>
            <Box className="cardField">
                {
                    categoryflag ?
                        imgUrlOracle.map((itemUrl, index) => (
                            <GameCard key={index} imgUrl={itemUrl} backColor={backColorsOracle[index]} bigTitle={bigTitlesOracle[index]} smallTitle={Strings.oracleGame} content={Strings.gameContent} />
                        )) :
                        imgUrlMulti.map((itemUrl, index) => (
                            <GameCard key={index} imgUrl={itemUrl} backColor={Colors.multiplayer} bigTitle={bigTitlesMulti[index]} smallTitle={Strings.mutiplayer} content={Strings.gameContent} />
                        ))
                }
            </Box>
        </Box>
    );
};


export default Game;