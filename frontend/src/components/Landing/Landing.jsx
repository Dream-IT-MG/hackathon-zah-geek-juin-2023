import React, {useEffect, useState} from "react";
// import {TopNavbar} from "../../components/Nav/TopNavbar";
import {History} from "./Contents/History";
import {Blog} from "./Contents/Blog";
import {Home} from "./Contents/Home";
import {Footer} from "../../components/Sections/Footer"
import {useNavigate} from "react-router-dom";
import {getUserInfos} from "../../services/Auth";
import {goToDashboard} from "assets/utils/helpers/platform";

export const Landing = () => {
    const navigate = useNavigate();
    const [isConnected, setIsConnected] = useState(false);
    const userData = getUserInfos();

    useEffect(() => {
        if (userData) {
            setIsConnected(true);
        }
    }, [userData]);

    return isConnected ? (
        goToDashboard(navigate)
    ) : (
        <>
            {/* <TopNavbar /> */}
            <Home/>
            <History/>
            <Blog/>
            <Footer/>
        </>
    )
}