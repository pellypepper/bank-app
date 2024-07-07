import { FaRegCreditCard, FaArrowLeft, FaArrowRight, FaSignOutAlt, FaBook, FaPlusCircle, FaInbox, FaBell, FaLightbulb, FaExchangeAlt, FaShieldAlt, FaPalette, FaPlus, FaInfoCircle, FaEllipsisV, FaTimes, FaChartLine } from 'react-icons/fa';
import NavMenu from "./navmenu";
import React, { useRef, useEffect } from 'react';
import Topmenu from "./topmenu";

export default function Invest() {
    const mainHeaderRef = useRef();

    useEffect(() => {
        changeBackground1();
    }, []);
    const changeBackground1 = () => {
        // Change background color of main-header-wrapper
        if (mainHeaderRef.current) {
            mainHeaderRef.current.style.background = `linear-gradient(#231942, #5e548e)`; // Change 'your-color' to the desired color
            // mainHeaderRef.current.style.backgroundPosition = "center";
        }
    };

    return (
        <div className='main-container'>
            <div className='invest-container contain' ref={mainHeaderRef}>
                <Topmenu />
                <div className="balance-container">


                    <h3>Start trading<span>Explore stocks and commodities today. Capital at risk</span></h3>

                </div>
             
              



            </div>
            < div className="crypto-btn">
                <div className="btn btncolor1">Portfolio</div>
                <div className="btn btncolor">Discover</div>
            </div>

            <NavMenu changeBackground1={changeBackground1} />

        </div>
    )
}