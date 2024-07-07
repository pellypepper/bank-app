import NavMenu from "./navmenu"
// import Swiper core and required modules
import { Outlet, Link } from "react-router-dom";
import React, { useRef } from 'react';



// Import Swiper styles


import { FaRegCreditCard, FaSignOutAlt, FaBook, FaPlusCircle, FaInbox, FaBell, FaLightbulb, FaExchangeAlt, FaShieldAlt, FaPalette, FaPlus, FaInfoCircle, FaEllipsisV, FaTimes, } from 'react-icons/fa';


import { MdPerson, MdHelp } from 'react-icons/md';

function Home() {
    const mainHeaderRef = useRef();




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