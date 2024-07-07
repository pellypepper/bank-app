import { Link } from "react-router-dom";
import { ReactComponent as UkFlag } from '../assets/mainimage/uk-flag.svg';
import { ReactComponent as Aussie } from '../assets/mainimage/aussie.svg';

import { Swiper, SwiperSlide } from 'swiper/react';
import NavMenu from "./navmenu";
import React, { useRef, useEffect, useState } from 'react';
import PaymentBg from '../assets/mainimage/mainbg.webp';
import {  FaArrowRight,  FaExchangeAlt, FaShieldAlt, FaPlus, FaInfoCircle, FaEllipsisV, FaTimes,  } from 'react-icons/fa';
import Topmenu from "./topmenu";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGlobe } from '@fortawesome/free-solid-svg-icons';

import { faApple } from '@fortawesome/free-brands-svg-icons';
import { faArrowUp } from '@fortawesome/free-solid-svg-icons';


import 'swiper/css';
// import required modules
import { Pagination } from 'swiper/modules';



export default function Main() {
    const mainHeaderRef = useRef();
    useEffect(() => {
        changeBackground2();
    }, []);
    const changeBackground2 = () => {
        // Change background color of main-header-wrapper
        if (mainHeaderRef.current) {
            mainHeaderRef.current.style.background = `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${PaymentBg})`; // Change 'your-color' to the desired color
            // mainHeaderRef.current.style.backgroundPosition = "center";
        }
    };
    const closeSwiper = () => {
        const mainSwiper = document.getElementById("main-swiper-container")
        if (closeSwiper) {
            mainSwiper.style.visibility = "hidden"
        } else {
            mainSwiper.style.visibility = "visible"
        }
    }
    const addMoney = () => {
        const container = document.getElementById("addmoney-container")
        if (addMoney) {
            container.classList.add("open")
        } else {
            container.classList.remove("open")
        }
    }

    const closeAddmoney = () => {
        const container = document.getElementById("addmoney-container")
        if (closeAddmoney) {
            container.classList.remove("open")
        }
    }

    const exchange = () => {
        const container = document.getElementById("exchange-container")
        if (addMoney) {
            container.classList.add("open")
        } else {
            container.classList.remove("open")
        }
    }

    const closeExchange = () => {
        const container = document.getElementById("exchange-container")
        if (closeAddmoney) {
            container.classList.remove("open")
        }
    }


    const [isRotated, setIsRotated] = useState(false);

    const changeArrow = () => {
        setIsRotated(!isRotated);
    };

    const details = () => {
        const details = document.getElementById("details-container")
        if (details) {
            details.classList.add("bottom")
        } else {
            details.classList.remove("bottom")
        }


        const mainDetails = document.getElementById("main-container")
        mainDetails.addEventListener("click", function () {
            details.classList.remove("bottom")
        })
        
    }

    const moreMenu =()=> {
        const more = document.getElementById("more-container")
        if(more){
            more.classList.toggle("more-open")
        } 
    }



    return (
        <div id="main-container">
            <div className="main-container" >
                <div className="home-main-container contain" ref={mainHeaderRef}>
                    <Topmenu />

                    <div className="balance-container">
                        <Swiper pagination={true} modules={[Pagination]} className="mySwiper">
                            <SwiperSlide>  <p>Account:<span>********</span></p>
                                <h3>$<span>450.55</span></h3>
                                <button>Accounts</button>

                                <div className="main-header-btn-wrapper">
                                    <Link onClick={addMoney} className="nav-link btn-link"><span> <FaPlus className="icon" size={20} style={{ color: 'white' }} /></span><p>Add money</p></Link>
                                    <Link onClick={exchange} className="nav-link btn-link"><span> <FaExchangeAlt className="icon" size={20} style={{ color: 'white' }} /></span><p>Exchange</p></Link>
                                    <Link onClick={details} className="nav-link btn-link"><span><FaInfoCircle className="icon" size={20} style={{ color: 'white' }} /></span><p>Details</p></Link>
                                    <Link onClick={moreMenu} className="nav-link btn-link"><span> <FaEllipsisV className="icon" size={20} style={{ color: 'white' }} /></span><p>More</p></Link>
                                    <div className="more-container" id="more-container">
                                        <div className="more-wrapper">
                                            <p>Statement <span><FaPlus className="icon" size={20} style={{ color: 'white' }}/></span></p>
                                            <p>Converter <span><FaPlus className="icon" size={20} style={{ color: 'white' }}/></span></p>
                                            <p>Theme <span><FaPlus className="icon" size={20} style={{ color: 'white' }}/></span></p>
                                            <p>Add new account <span><FaPlus className="icon" size={20} style={{ color: 'white' }}/></span></p>

                                        </div>

                                    </div>


                                </div>
                            </SwiperSlide>
                            <SwiperSlide>  <p>Account:<span>********</span></p>
                                <h3>£<span>50.55</span></h3>
                                <button>Accounts</button>

                                <div className="main-header-btn-wrapper">
                                    <Link className="nav-link btn-link"><span> <FaPlus className="icon" size={20} style={{ color: 'white' }} /></span><p>Add money</p></Link>
                                    <Link className="nav-link btn-link"><span> <FaExchangeAlt className="icon" size={20} style={{ color: 'white' }} /></span><p>Exchange</p></Link>
                                    <Link className="nav-link btn-link"><span><FaInfoCircle className="icon" size={20} style={{ color: 'white' }} /></span><p>Details</p></Link>
                                    <Link className="nav-link btn-link"><span> <FaEllipsisV className="icon" size={20} style={{ color: 'white' }} /></span><p>More</p></Link>

                                </div>
                            </SwiperSlide>
                            <SwiperSlide>  <p>Account:<span>********</span></p>
                                <h3>AU$<span>1050.55</span></h3>
                                <button>Accounts</button>

                                <div className="main-header-btn-wrapper">
                                    <Link className="nav-link btn-link"><span> <FaPlus className="icon" size={20} style={{ color: 'white' }} /></span><p>Add money</p></Link>
                                    <Link className="nav-link btn-link"><span> <FaExchangeAlt className="icon" size={20} style={{ color: 'white' }} /></span><p>Exchange</p></Link>
                                    <Link className="nav-link btn-link"><span><FaInfoCircle className="icon" size={20} style={{ color: 'white' }} /></span><p>Details</p></Link>
                                    <Link className="nav-link btn-link"><span> <FaEllipsisV className="icon" size={20} style={{ color: 'white' }} /></span><p>More</p></Link>

                                </div>
                            </SwiperSlide>

                        </Swiper>



                    </div>




                </div>

                <div className="main-swiper-container " id="main-swiper-container">
                    <p> Stay connected with NG'S <span>Send money to 150+ countries, Fees apply. Explore now</span></p>
                    <div className="main-icon">
                        <FaTimes onClick={closeSwiper} size={15} style={{ color: 'white' }} />
                        <FontAwesomeIcon className="icon" icon={faGlobe} size="4x" />
                    </div>
                </div>

                <div className="main-subwrapper">
                    <div className="main-box">
                        <div className="main-box-left">
                            <FaTimes size={15} style={{ color: 'white' }} />
                            <p>Apple <span>16:35</span></p>
                        </div>

                        <h5>$9.00</h5>
                    </div>
                    <div className="main-box">
                        <div className="main-box-left">
                            <FaTimes size={15} style={{ color: 'white' }} />
                            <p>Apple <span>16:35</span></p>
                        </div>

                        <h5>$9.00</h5>
                    </div>

                    <div className="main-box">
                        <div className="main-box-left">
                            <FaTimes size={15} style={{ color: 'white' }} />
                            <p>Apple <span>16:35</span></p>
                        </div>

                        <h5>$9.00</h5>
                    </div>
                    <div className="main-box">
                        <div className="main-box-left">
                            <FaTimes size={15} style={{ color: 'white' }} />
                            <p>Apple <span>16:35</span></p>
                        </div>

                        <h5>$9.00</h5>
                    </div>

                </div>
                <NavMenu changeBackground2={changeBackground2} />




            </div>
            <div className="addmoney-container " id="addmoney-container">
                <div className="addmoney-wrapper">
                    <div className="addmoney-header">
                        <FaArrowRight onClick={closeAddmoney} className="icon" size={20} style={{ color: 'white' }} />
                        <FaShieldAlt size={20} />
                    </div>
                    <h1 className="addmoney-text">Add money</h1>
                    <div className="addmoney-box">
                        <div className="addmoney-box-1-wrapper">
                            <div className="apple-box"  >
                                <FontAwesomeIcon icon={faApple} />
                                <span>Pay</span>
                            </div>
                            <p>Apple Pay</p>
                        </div>

                        <button>Change</button>
                    </div>
                    <div className="addmoney-box addmoney-box-2" >
                        <div className="dropdown-wrapper">
                            <button>GBP</button>
                            <input placeholder="$0
                            Input minimun of 0" type="text" />
                        </div>

                    </div>

                    <button className="addmoney-submit">    <FontAwesomeIcon icon={faApple} /> <span>Pay</span></button>
                </div>
            </div>
            <div className="exchange-container  addmoney-container" id="exchange-container">
                <div className="exchange-wrapper addmoney-wrapper">
                    <div className="exchange-header addmoney-header">
                        <FaArrowRight onClick={closeExchange} className="icon" size={20} style={{ color: 'white' }} />
                        <p> Market order</p>
                    </div>
                    <h1 className="addmoney-text">Sell GBP</h1>
                    <div className="addmoney-box">
                        <div className="addmoney-box-1-wrapper">
                            <div className="exchange-mini"  >
                                <UkFlag width="50" height="40" />
                            </div>
                            <p>GBP</p>
                        </div>

                        <input placeholder="-$0" type="text" />
                    </div>
                    <FontAwesomeIcon style={{ transform: isRotated ? 'rotate(180deg)' : 'rotate(0deg)', transition: 'transform 0.3s' }} icon={faArrowUp} className="arrowup" onClick={changeArrow} />
                    <div className="addmoney-box exchange-box">
                        <div className="addmoney-box-1-wrapper">
                            <div className="exchange-mini"  >
                                <Aussie id="aussie" width="50" height="40" />
                            </div>
                            <p>AUD</p>
                        </div>

                        <input placeholder="+AU$0" type="text" />
                    </div>

                    <button className="addmoney-submit exchange-submit">   Review order</button>
                </div>
            </div>
            <div className="details-container" id="details-container">
                <div className="details-wrapper">
                    <h3>Choose Main account</h3>
                    <div className="details-box-wrapper">
                        <div className="details-box">
                            <div className="details-header">
                                <Aussie id="aussie" width="50" height="20" />
                                <p>Australian dollar</p>
                            </div>

                            <span> AU$0</span>
                        </div>
                        <div className="details-box">
                            <div className="details-header">
                                <UkFlag id="aussie" width="50" height="20" />
                                <p>British pound</p>
                            </div>

                            <span> £0</span>
                        </div>
                    </div>


                </div>

            </div>


        </div>
       
    )
}