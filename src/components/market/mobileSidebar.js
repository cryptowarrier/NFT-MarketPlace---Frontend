import React, {useState} from "react";
import { Box } from "@material-ui/core";
import {MdArrowDropDown} from "react-icons/md";


import "../../assets/SCSS/components/market/mobileSidebar.scss";

import Art from "../../assets/images/market/sidebar/art.png";
import Collectibles from "../../assets/images/market/sidebar/collectibles.png";
import Domains from "../../assets/images/market/sidebar/domains.png";
import Music from "../../assets/images/market/sidebar/music.png";
import Photo from "../../assets/images/market/sidebar/photo.png";
import Sports from "../../assets/images/market/sidebar/sports.png";
import Cards from "../../assets/images/market/sidebar/cards.png";
import Utility from "../../assets/images/market/sidebar/utility.png";
import Metaverse from "../../assets/images/market/sidebar/metaverse.png";
import FilmAnimation from "../../assets/images/market/sidebar/filmAnimation.png";
import Games from "../../assets/images/market/sidebar/games.png";
import DownArrow from "../../assets/images/icons/downArrow.png";
import Glasses from "../../assets/images/icons/glasses.png";


import CategoryBtn from "../general/categoryBtn";



const MobileSidebar = ({ mobileSidebar }) => {

    const [pageState, setPageState] = useState(0);
    const [categoryState, setCategoryState] = useState([true, true, false, true, true, true, true, true, true, true, true]);
    const [collection, setCollection] = useState(undefined);

    const handleCategoryState = (index) => {
        const newState = [];
        categoryState.map((item, mapIndex) => {
            newState.push(mapIndex === index ? !item : item);
            return newState;
        })
        setCategoryState(newState);
    }

    const handlePageState = (pageIndex) => {
        switch (pageIndex) {
            case 1:
                setCategoryState([true, false, false, true, true, true, true, false, true, false, true]);
                setCollection(undefined);
                break;
            case 2:
                setCategoryState([false, true, false, false, false, true, true, true, true, false, true]);
                setCollection(undefined);
                break;
            case 3:
                setCategoryState([false, false, false, false, true, false, false, false, false, true, false]);
                break;
            case 4:
                setCategoryState([false, true, false, false, false, false, true, false, false, false, false]);
                break;
            case 5:
                setCategoryState([true, false, false, false, true, true, true, false, true, false, true]);
                break;
            case 6:
                setCategoryState([false, false, false, false, true, false, false, true, true, true, false]);
                break;
            default:
                setCategoryState([true, true, false, true, true, true, true, true, true, true, true]);
                break;
        }
        setPageState(pageIndex);
    }

    return (
        <Box className="mobileSidebar" ref={mobileSidebar}>
            <Box className="pageButtons">
                <Box className="columnFlexCenter ccnBtns">
                    <CategoryBtn backColor={"#F4E7D5"} color={"#333"} content={"Creators"} isActive={pageState === 1} onClick={() => handlePageState(1)} />
                    <CategoryBtn backColor={"#F4E7D5"} color={"#333"} content={"Collections"} isActive={pageState === 2} onClick={() => handlePageState(2)} />
                    <CategoryBtn backColor={"#F4E7D5"} color={"#333"} content={"Newest"} isActive={pageState === 3} onClick={() => handlePageState(3)} />
                </Box>
                <Box className="columnFlexCenter tadaBtns" >
                    <CategoryBtn backColor={"#FFF9F1"} color={"#333"} content={"TRENDING"} isActive={pageState === 4} onClick={() => handlePageState(4)} />
                    <CategoryBtn backColor={"#FFF9F1"} color={"#333"} content={"AUCTIONS"} isActive={pageState === 5} onClick={() => handlePageState(5)} />
                    <CategoryBtn backColor={"#FFF9F1"} color={"#333"} content={"DROPS"} isActive={pageState === 6} onClick={() => handlePageState(6)} />
                    <CategoryBtn backColor={"#FFF9F1"} color={"#333"} content={"ACTIVITY"} isActive={pageState === 7} onClick={() => handlePageState(7)} />
                </Box>
            </Box>
            {pageState !== 7 &&
                <Box className="categoryBtns">
                    <Box className="listBtn">
                        <Box fontSize={70} color={"#FFF9F1"}><MdArrowDropDown /></Box>
                        <Box width={175} display={"flex"} justifyContent={"center"} alignItems={"center"}>Categories</Box>
                    </Box>
                    <Box className="categoryItem">
                        <Box className="categoryImg">
                            <img src={Art} style={{ width: "38px", height: "27px", padding: "0px 10px" }} alt="Art" />
                        </Box>
                        <CategoryBtn backColor={"#FFF9F1"} color={"#333"} content={"Art"} isActive={categoryState[0]} onClick={() => handleCategoryState(0)} />
                    </Box>
                    <Box className="categoryItem">
                        <Box className="categoryImg">
                            <img src={Collectibles} style={{ width: "34px", height: "31px", padding: "0px 10px" }} alt="Collectibles" />
                        </Box>
                        <CategoryBtn backColor={"#FFF9F1"} color={"#333"} content={"Collectibles"} isActive={categoryState[1]} onClick={() => handleCategoryState(1)} />
                    </Box>
                    <Box className="categoryItem">
                        <Box className="categoryImg">
                            <img src={Domains} style={{ width: "43px", height: "31px", padding: "0px 10px" }} alt="Domains" />
                        </Box>
                        <CategoryBtn backColor={"#FFF9F1"} color={"#333"} content={"Domains"} isActive={categoryState[2]} onClick={() => handleCategoryState(2)} />
                    </Box>
                    <Box className="categoryItem">
                        <Box className="categoryImg">
                            <img src={Music} style={{ width: "28px", height: "31px", padding: "0px 10px" }} alt="Music" />
                        </Box>
                        <CategoryBtn backColor={"#FFF9F1"} color={"#333"} content={"Music"} isActive={categoryState[3]} onClick={() => handleCategoryState(3)} />
                    </Box>
                    <Box className="categoryItem">
                        <Box className="categoryImg">
                            <img src={Photo} style={{ width: "31px", height: "31px", padding: "0px 10px" }} alt="CategoryPhoto" />
                        </Box>
                        <CategoryBtn backColor={"#FFF9F1"} color={"#333"} content={"Photo"} isActive={categoryState[4]} onClick={() => handleCategoryState(4)} />
                    </Box>
                    <Box className="categoryItem">
                        <Box className="categoryImg">
                            <img src={Sports} style={{ width: "45px", height: "28px", padding: "0px 10px" }} alt="Sports" />
                        </Box>
                        <CategoryBtn backColor={"#FFF9F1"} color={"#333"} content={"Sports"} isActive={categoryState[5]} onClick={() => handleCategoryState(5)} />
                    </Box>
                    <Box className="categoryItem">
                        <Box className="categoryImg">
                            <img src={Cards} style={{ width: "22px", height: "31px", padding: "0px 10px" }} alt="Cards" />
                        </Box>
                        <CategoryBtn backColor={"#FFF9F1"} color={"#333"} content={"Cards"} isActive={categoryState[6]} onClick={() => handleCategoryState(6)} />
                    </Box>
                    <Box className="categoryItem">
                        <Box className="categoryImg">
                            <img src={Utility} style={{ width: "31px", height: "31px", padding: "0px 10px" }} alt="Utility" />
                        </Box>
                        <CategoryBtn backColor={"#FFF9F1"} color={"#333"} content={"Utility"} isActive={categoryState[7]} onClick={() => handleCategoryState(7)} />
                    </Box>
                    <Box className="categoryItem">
                        <Box className="categoryImg">
                            <img src={Metaverse} style={{ width: "28px", height: "31px", padding: "0px 10px" }} alt="Metaverse" />
                        </Box>
                        <CategoryBtn backColor={"#FFF9F1"} color={"#333"} content={"Metaverse"} isActive={categoryState[8]} onClick={() => handleCategoryState(8)} />
                    </Box>
                    <Box className="categoryItem">
                        <Box className="categoryImg">
                            <img src={FilmAnimation} style={{ width: "36px", height: "30px", padding: "0px 10px" }} alt="FilmAnimation" />
                        </Box>
                        <CategoryBtn backColor={"#FFF9F1"} color={"#333"} content={"FilmAnimation"} isActive={categoryState[9]} onClick={() => handleCategoryState(9)} />
                    </Box>
                    <Box className="categoryItem">
                        <Box className="categoryImg">
                            <img src={Games} style={{ width: "45px", height: "29px", padding: "0px 10px" }} alt="Games" />
                        </Box>
                        <CategoryBtn backColor={"#FFF9F1"} color={"#333"} content={"Games"} isActive={categoryState[10]} onClick={() => handleCategoryState(10)} />
                    </Box>
                </Box>
            }
            {
                pageState === 2 && collection &&
                <Box className="selectBoxes">
                    <Box>
                        <Box>Status</Box>
                        <img src={DownArrow} alt="down arrow" />
                    </Box>
                    <Box>
                        <Box>Price</Box>
                        <img src={DownArrow} alt="down arrow" />
                    </Box>
                    <Box>
                        <Box>Chains</Box>
                        <img src={DownArrow} alt="down arrow" />
                    </Box>
                    <Box>
                        <Box><img src={Glasses} alt="glasses" />Background</Box>
                        <img src={DownArrow} alt="down arrow" />
                    </Box>
                    <Box>
                        <Box><img src={Glasses} alt="glasses" />Primary Color</Box>
                        <img src={DownArrow} alt="down arrow" />
                    </Box>
                    <Box>
                        <Box><img src={Glasses} alt="glasses" />Jewel</Box>
                        <img src={DownArrow} alt="down arrow" />
                    </Box>
                    <Box>
                        <Box><img src={Glasses} alt="glasses" />Sword</Box>
                        <img src={DownArrow} alt="down arrow" />
                    </Box>
                    <Box>
                        <Box><img src={Glasses} alt="glasses" />Shield</Box>
                        <img src={DownArrow} alt="down arrow" />
                    </Box>
                    <Box>
                        <Box><img src={Glasses} alt="glasses" />Crown</Box>
                        <img src={DownArrow} alt="down arrow" />
                    </Box>
                    <Box>
                        <Box><img src={Glasses} alt="glasses" />Magic Item</Box>
                        <img src={DownArrow} alt="down arrow" />
                    </Box>
                    <Box>
                        <Box><img src={Glasses} alt="glasses" />Power</Box>
                        <img src={DownArrow} alt="down arrow" />
                    </Box>
                </Box>
            }
        </Box>
    );
};


export default MobileSidebar;