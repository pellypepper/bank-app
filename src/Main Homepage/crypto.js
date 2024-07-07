import { FaRegCreditCard, FaArrowLeft, FaArrowRight, FaSignOutAlt, FaBook, FaPlusCircle, FaInbox, FaBell, FaLightbulb, FaExchangeAlt, FaShieldAlt, FaPalette, FaPlus, FaInfoCircle, FaEllipsisV, FaTimes, FaChartLine } from 'react-icons/fa';
import NavMenu from "./navmenu";
import React, { useRef, useEffect } from 'react';
import Topmenu from "./topmenu";
import { Link } from "react-router-dom";

export default function Crypto() {
    const mainHeaderRef = useRef();

    useEffect(() => {
        changeBackground();
    }, []);

    const changeBackground = () => {
        if (mainHeaderRef.current) {
            mainHeaderRef.current.style.background = `linear-gradient(#03045e, #0077b6)`;
        }
    };

    return (
        <div className='main-container crypto'>
            <div className="crypto-container contain" ref={mainHeaderRef}>
                <Topmenu />
                <p className='crypto-p'>Dont invest unlesss you're prepared to lose all the money you invest. This is a a High-risk investment and you should not expect to be protected if something goes wrong. Take 2 mins to learn more</p>

                <div className="balance-container">


                    <h3>$<span>0</span></h3>

                </div>

                <div className="main-header-btn-wrapper">
                    <Link className="nav-link btn-link"><span> <FaChartLine className="icon" size={20} style={{ color: 'white' }} /></span><p>Trade</p></Link>
                    <Link className="nav-link btn-link"><span> <FaArrowLeft className="icon" size={20} style={{ color: 'white' }} /></span><p>Recieve</p></Link>
                    <Link className="nav-link btn-link"><span> <FaArrowRight className="icon" size={20} style={{ color: 'white' }} /></span><p>Send</p></Link>
                    <Link className="nav-link btn-link"><span> <FaEllipsisV className="icon" size={20} style={{ color: 'white' }} /></span><p>More</p></Link>

                </div>
            </div>
            <div className="crypto-btn">
                <div className="btn btncolor1">Portfolio</div>
                <div className="btn btncolor">Discover</div>
            </div>
            <div className="crypto-text">
                <h5>Newly added</h5> <span>See all</span>
            </div>
            <div className='crypto-box'>
                <div className='crypto-minibox'>
                    <FaPlus className="icon" size={50} style={{ color: '#0077b6' }} />
                    <p>Action required <span>We have to ask you a few questions before you can continue trading</span></p>
                </div>
                <button>Get Started</button>

            </div>
            <div className='crypto-box'>
                <div className='crypto-minibox'>
                    <FaPlus className="icon" size={50} style={{ color: '#0077b6' }} />
                    <p>More crypto, less fees <span>Trade with crypto fees now aa low as 0% T&C s apply</span></p>
                </div>
                <button>Explore Crypto</button>

            </div>

            <div className='crypto-footer'>
              <p>Rates</p>
              <div className='crypto-footer-wrapper'>
              <div className="crypto-btn">
                <div className="btn btncolor1">Watchlist</div>
                <div className="btn btncolor">Alerts</div>
            </div>
              </div>

            </div>
            <NavMenu changeBackground={changeBackground} />
        </div>
    );
}
