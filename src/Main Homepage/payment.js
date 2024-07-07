import NavMenu from "./navmenu";
import { FaRegCreditCard, FaArrowLeft, FaArrowRight, FaSignOutAlt, FaBook, FaPlusCircle, FaInbox, FaBell, FaLightbulb, FaExchangeAlt, FaShieldAlt, FaPalette, FaPlus, FaInfoCircle, FaEllipsisV, FaTimes, FaChartLine } from 'react-icons/fa';

import React, { useRef, useEffect } from 'react';
import Topmenu  from "./topmenu";
export default function Payment (){
    const mainHeaderRef = useRef();
    useEffect(() => {
        changeBackground3();
    }, []);
    const changeBackground3 = () => {
        // Change background color of main-header-wrapper
        if (mainHeaderRef.current) {
            mainHeaderRef.current.style.backgroundColor = "black";// Change 'your-color' to the desired color
            // mainHeaderRef.current.style.backgroundPosition = "center";
        }
    };
    return(
<div className="main-container">
<div className="contain" ref={mainHeaderRef} >
               <Topmenu/>
          <div className="payment-container">
          <div className='crypto-box'>
                <div className='crypto-minibox'>
                    <FaPlus className="icon" size={30} style={{ color: 'white' }} />
                    <p>Add your contact <span>Send money to friends on NG'S instantly on us</span></p>
                </div>
                <button>Enable contact permission</button>

            </div>
            <div className="payment-history">
                <div className="history">
                <p>PO</p>
                <span>Pelumi Otegbola</span>
                <b>May 25</b>
                </div>
                <div className="history">
                <p className="historybg">WJ</p>
                <span>William Jack</span>
                <b>May 23</b>
                </div>
                <div className="history">
                <p className="historyb">SA</p>
                <span>Segun Ayomide</span>
                <b>May 19</b>
                </div>
                <div className="history">
                <p className="historyg">OT</p>
                <span> Omotola  Otegbola</span>
                <b>May 15</b>
                </div>

            </div>

          </div>
   
       </div>
                <NavMenu changeBackground3={changeBackground3} />
</div>
    )
}