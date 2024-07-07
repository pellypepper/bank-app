
import { FaRegCreditCard, FaSignOutAlt, FaBook, FaPlusCircle, FaInbox, FaBell, FaLightbulb, FaExchangeAlt, FaShieldAlt, FaPalette, FaPlus, FaInfoCircle, FaEllipsisV, FaTimes, } from 'react-icons/fa';

import { Link } from "react-router-dom";
import { MdPerson, MdHelp } from 'react-icons/md';


export default function Topmenu() {
    const profileMenu = () => {
        let profile = document.getElementById("profile")
        if (profile.classList.contains("profile-show")) {
            profile.classList.remove("profile-show")
        } else {
            profile.classList.add("profile-show")
        }
    }
    const closeProfile = () => {
        let profile = document.getElementById("profile")
        profile.classList.remove("profile-show")
    }
    const cardMenu = () => {
        let card = document.getElementById("card")
        if (card.classList.contains("card-show")) {
            card.classList.remove("card-show")
        } else {
            card.classList.add("card-show")
        }
    }
    const closeCard = () => {
        let card = document.getElementById("card")
        card.classList.remove("card-show")
    }

    return (
        <div className="topmenu-container">
            <div className="main-header" >
                <div className="main-header-wrapper" >
                    <div onClick={profileMenu} className="header-circle"> <MdPerson className="icon" size={20} style={{ color: 'white' }} /></div>
                    <input className="header-search" type="search"></input>
                    <div onClick={cardMenu} className="header-circle"><FaRegCreditCard className="icon" size={20} style={{ color: 'white' }} /></div>
                    <div className="header-circle">logo</div>
                </div>
            </div>
            <div id="profile" className="profile-container">
                <div className="profile-wrapper">
                    <div className="profile-header">
                        <Link onClick={closeProfile} to="" ><FaTimes size={30} style={{ color: 'orange' }} /></Link>
                        <p>name</p>
                    </div>
                    <div className="profile-name">
                        <p className="profile-name-circle">PO</p>
                        <h2 >Pelumi Otegbola</h2>
                        <span>@pelumiagfh</span>

                    </div>
                    <div className="profile-first-box-wrapper">
                        <div className="profile-first-box">
                            <span> <FaBook className="icons" size={40} style={{ color: 'orange' }} /></span>
                            <h5>Standard</h5>
                            <p>Your plan</p>
                        </div>

                        <div className="profile-first-box">
                            <span> <MdPerson className="icon" size={40} style={{ color: 'white' }} /></span>
                            <h5>Standard</h5>
                            <p>Your plan</p>
                        </div>

                    </div>

                    <div className="profile-bg-container">
                        <div className="bg-header">
                            <h5>Ultra is here</h5>
                            <Link onClick={closeProfile} to="" ><FaTimes size={10} style={{ color: 'white' }} /></Link>

                        </div>
                        <p>Unparalleled access and exclusive <span>benefits await</span></p>
                        <button> Join Ultra</button>

                    </div>

                    <div className="profile-box-wrapper">
                        <div className="box"><MdHelp size={20} style={{ color: 'orange' }} /> <p>Help</p> </div>
                        <div className="box"><MdPerson size={20} style={{ color: 'orange' }} /> <p>Account</p> </div>
                        <div className="box"><FaLightbulb size={20} style={{ color: 'orange' }} /> <p>Learn</p> </div>
                        <div className="box"><FaInbox size={20} style={{ color: 'orange' }} /> <p>Inbox</p> </div>

                    </div>

                    <div className="profile-box-wrapper">
                        <div className="box"><FaShieldAlt size={20} style={{ color: 'orange' }} /> <p>Security & Privacy</p> </div>
                        <div className="box"><FaBell size={20} style={{ color: 'orange' }} /> <p>Notification Settings</p> </div>
                        <div className="box"><FaPalette size={20} style={{ color: 'orange' }} /> <p>Appearance</p> </div>
                        <div className="box"><FaPlusCircle size={20} style={{ color: 'orange' }} /> <p>New features</p> </div>

                    </div>
                    <div className="profile-box-wrapper">
                        <div className="box"><FaInfoCircle size={20} style={{ color: 'orange' }} /> <p>About us</p> </div>
                        <Link className="link" to="/"><div className="box"><FaSignOutAlt size={20} style={{ color: 'orange' }} /> <p>Log out</p> </div></Link>


                    </div>


                    <div className="profile-footer">
                        <span>Version 10.28</span>
                        <span>NG'S LTD</span>

                    </div>
                </div>

            </div>
            <div id="card" className="card-container">
                <div className="card-wrapper">
                    <div className="card-header">
                        <Link onClick={closeCard} to="" ><FaTimes size={30} style={{ color: 'orange' }} /></Link>
                        <h1>Cards</h1>
                    </div>

                    <div className="card-box-wrapper">
                        <div className="box"><MdHelp size={20} style={{ color: 'orange' }} /> <p>Disposable <span>Regenerates detais after each us</span></p> </div>
                        <div className="box"><MdPerson size={20} style={{ color: 'orange' }} /> <p>Standard <span>..5782, 02/28</span></p> </div>
                        <div className="box"><FaLightbulb size={20} style={{ color: 'orange' }} /> <p>Virtual <span>..0378, 03/29</span></p> </div>


                    </div>
                    <div className="card-box-wrapper-map card-box-wrapper">
                        <div className="map"><MdHelp size={20} style={{ color: 'orange' }} /> <p>Find ATMs nearby</p> </div>
                        <MdPerson size={20} style={{ color: 'orange' }} />

                    </div>

                    <p className="card-text">Want to recieve a terminated card?</p>

                    <p className="card-btn"> <FaPlus size={20} style={{ color: 'orange' }} /> <span>Add new</span></p>

                </div>

            </div>
        </div>
    )
}