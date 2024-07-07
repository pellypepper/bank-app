import { NavLink } from "react-router-dom";
import { MdPayment,MdHome, MdHelp} from 'react-icons/md';

import { FaBitcoin,FaChartLine } from 'react-icons/fa'; // Import the cryptocurrency icons from react-icons

export default function NavMenu ({ changeBackground3,changeBackground,changeBackground1,changeBackground2, changeBackground4 }) {
    const handleClick = () => {
        // Call the changeBackground function passed from the Home component
        if (changeBackground) {
            changeBackground();
        }
    };
    const handleClick1 = () => {
        // Call the changeBackground function passed from the Home component
        if (changeBackground1) {
            changeBackground1();
        }
    };
    const handleClick2 = () => {
        // Call the changeBackground function passed from the Home component
        if (changeBackground2) {
            changeBackground2();
        }
    };
    const paymentClick = () => {
        // Call the changeBackground function passed from the Home component
        if (changeBackground3) {
            changeBackground3();
        }
    }
    const handleClick3 = () => {
        // Call the changeBackground function passed from the Home component
        if (changeBackground4) {
            changeBackground4();
        }
    }

    return (
         <nav className="nav-menu-container">
            <NavLink to="/signin/Main Homepage/home" onClick={handleClick2} className="nav-link"><span> <MdHome className="home-icon" size={20} style={{ color: 'grey' }} /></span><p>Home</p></NavLink>
            <NavLink to="/signin/Main Homepage/home/invest" onClick={handleClick1} className="nav-link"><span> <FaChartLine className="invest-icon" size={20} style={{ color: 'grey' }} /></span><p>Invest</p></NavLink>
            <NavLink to="/signin/Main Homepage/home/payment" onClick={paymentClick}  className="nav-link"><span><MdPayment className="icon" size={20} style={{ color: 'grey' }} /></span><p>Payment</p></NavLink>
            <NavLink id="crypto" to="/signin/Main Homepage/home/crypto" onClick={handleClick} className="nav-link"><span> <FaBitcoin className="crypto-icon" size={20} style={{ color: 'grey' }} /></span><p>Crypto</p></NavLink>
            <NavLink to="/signin/Main Homepage/home/help" onClick={handleClick3}  className="nav-link"><span><MdHelp className="help-icon" size={20} style={{ color: 'grey' }} /></span><p>Lifestyle</p></NavLink>

         </nav>
    )
}