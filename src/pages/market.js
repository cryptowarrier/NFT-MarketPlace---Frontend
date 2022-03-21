import React, { useEffect, useRef, useState } from "react";
import { MdArrowDropDown, MdArrowRight } from "react-icons/md";
import { Box } from "@material-ui/core";
import { CgMenuGridO } from "react-icons/cg";

import "../assets/SCSS/pages/market.scss"

import DownArrow from "../assets/images/icons/downArrow.png";
import Glasses from "../assets/images/icons/glasses.png";

import CategoryBtn from "../components/general/categoryBtn";
import Explore from "../components/market/explore";
import Creators from "../components/market/creators";
import Collections from "../components/market/collections";
import Newest from "../components/market/newest";
import Trending from "../components/market/trending";
import Auctions from "../components/market/auctions";
import Drops from "../components/market/drops";
import Activity from "../components/market/activity";
import CollectionsProfile from "../components/market/collectionsProfile";
import CreatorsProfile from "../components/market/creatorsProfile";
import MobileSidebar from "../components/market/mobileSidebar";
import { useOutsideClick } from "../hooks/useOutsideClick";
import { getItems } from "../reducers/itemSlice";
import { useDispatch, useSelector } from "react-redux";
import { categories, categoryImages, marketPages } from "../constants/general";
import { useHistory } from "react-router-dom";





const Market = () => {
    const [rerender, setRerender] = useState(true);
    const [sidebarState, setSidebarState] = useState(false);
    const [pageState, setPageState] = useState(marketPages[0]);
    const [categoryState, setCategoryState] = useState(categories);
    const [openCategoryMenu, setOpenCategoryMenu] = useState(false);
    const [collection, setCollection] = useState(undefined);
    const { items } = useSelector(state => state.item);
    const dispatch = useDispatch();
    const history = useHistory();
    

    useEffect(() => {
        dispatch(getItems());
    }, []);

    // filter items by category
    useEffect(() => {
        const stringData = categoryState.map(val => `${val}`).join(',');
        history.push(`/market?category=${stringData}&page=${pageState}`);
        dispatch(getItems({category: stringData}));
    }, [categoryState, pageState])

    if (rerender) {
        window.localStorage.setItem("activeItem", "1");
        setRerender(false);
    }


    const mobileSidebar = useRef();
    const sideBarMenu = useRef();

    const handleCategoryState = (val) => {
        if (categoryState.includes(val)) {
            setCategoryState(categoryState => categoryState.filter(e => e !== val));
        } else {
            setCategoryState([...categoryState, val]);
        }
    }

    const handlePageState = (index) => {
        setPageState(marketPages[index]);
    }
    if (mobileSidebar.current) {
        if (sidebarState) {
            mobileSidebar.current.style.maxWidth = "500px";
            mobileSidebar.current.style.padding = "7px 15px 7px 35px";
        }
        else {
            mobileSidebar.current.style.maxWidth = "0px";
            mobileSidebar.current.style.padding = "0px";
        }
    }

    useOutsideClick([mobileSidebar, sideBarMenu], () => {
        setSidebarState(false);
    })

    return (
        <Box className={"market_container"} >
            <Box className="sideBar">
                <Box className="pageButtons">
                    <Box className="columnFlexCenter ccnBtns">
                        <CategoryBtn backColor={"#F4E7D5"} color={"#333"} content={"Creators"} isActive={pageState === marketPages[0]} onClick={() => handlePageState(0)} />
                        <CategoryBtn backColor={"#F4E7D5"} color={"#333"} content={"Collections"} isActive={pageState === marketPages[1]} onClick={() => handlePageState(1)} />
                        <CategoryBtn backColor={"#F4E7D5"} color={"#333"} content={"Newest"} isActive={pageState === marketPages[2]} onClick={() => handlePageState(2)} />
                    </Box>
                    <Box className="columnFlexCenter tadaBtns" >
                        <CategoryBtn backColor={"#FFF9F1"} color={"#333"} content={"TRENDING"} isActive={pageState === marketPages[3]} onClick={() => handlePageState(3)} />
                        <CategoryBtn backColor={"#FFF9F1"} color={"#333"} content={"AUCTIONS"} isActive={pageState === marketPages[4]} onClick={() => handlePageState(4)} />
                        <CategoryBtn backColor={"#FFF9F1"} color={"#333"} content={"DROPS"} isActive={pageState === marketPages[5]} onClick={() => handlePageState(5)} />
                        <CategoryBtn backColor={"#FFF9F1"} color={"#333"} content={"ACTIVITY"} isActive={pageState === marketPages[6]} onClick={() => handlePageState(6)} />
                    </Box>
                </Box>
                {pageState !== marketPages[6] &&
                    <Box className="categoryBtns">
                        <Box onClick={() => setOpenCategoryMenu(!openCategoryMenu)} className="listBtn">
                            <Box fontSize={70} color={"#FFF9F1"}>
                                {
                                    openCategoryMenu ? (
                                        <MdArrowDropDown />
                                    ) : (
                                        <MdArrowRight />
                                    )
                                }

                            </Box>
                            <Box width={175} display={"flex"} justifyContent={"center"} alignItems={"center"}>Categories</Box>
                        </Box>
                        {
                            // category buttons
                            openCategoryMenu &&
                            categories.map((category, i) => (
                                <Box key={i} className="categoryItem">
                                    <Box className="categoryImg">
                                        <img src={categoryImages[category.toLocaleLowerCase()]} style={{ width: "38px", height: "27px", padding: "0px 10px" }} alt={category} />
                                    </Box>
                                    <CategoryBtn backColor={"#FFF9F1"} color={"#333"} content={category} isActive={categoryState.includes(category)} onClick={() => handleCategoryState(category)} />
                                </Box>
                            ))
                        }
                    </Box>
                }
            </Box>
            <Box className="contentPanel">
                <Explore items={items} />
            </Box>
            <Box ref={sideBarMenu} className="sideMenuIcon" onClick={() => setSidebarState(!sidebarState)}>
                <CgMenuGridO />
            </Box>
            <MobileSidebar mobileSidebar={mobileSidebar} />
        </Box>
    );
};


export default Market;