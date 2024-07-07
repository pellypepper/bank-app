import NavMenu from "./navmenu"
// import Swiper core and required modules
import { Outlet } from "react-router-dom";
import React from 'react';



// Import Swiper styles



function Home() {
    




    return (
        <div className="home-body-wrapper">
            <div className="main-container"  >



                <Outlet />







                <NavMenu />
            </div>

        </div>
    )
}

export default Home