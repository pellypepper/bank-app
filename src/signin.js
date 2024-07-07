import { FaTimes, } from 'react-icons/fa'; // Font Awesome icon
import { MdLock, MdPerson } from 'react-icons/md';
import { Link } from 'react-router-dom';
import React, { useState } from 'react';

function Signin() {
  const [selectedOption, setSelectedOption] = useState('');

  const handleChange = (event) => {
    setSelectedOption(event.target.value);
  };

  return (
    <div className="signin-container">
      <div className="signin-wrapper">
        <div className="signin-header">
          <div className="dropdown-container">

            <select id="options" value={selectedOption} onChange={handleChange}>
              <option value="" disabled>Select your Country</option>
              <option value="Nigera">Nigeria</option>
              <option value="United Kingdom">United Kingdom</option>
              <option value="Russia">Russia</option>
              <option value="Ghana">Ghana</option>
              <option value="Togo">Togo</option>
              <option value="Sweden">Sweden</option>
              <option value="South Africa">South Africa</option>
              <option value="Jamaica">Jamaica</option>
              <option value="Japan">Japan</option>
              <option value="Mexico">Mexico</option>
              <option value="China">China</option>
              <option value="India">India</option>
            </select>

          </div>
          <span>logo</span>
        </div>

        <div className="login-wrapper">
          <div className='login-header'>
            <h5>Login</h5>
            <Link to="/" ><FaTimes size={30} style={{ color: 'white' }} /></Link>

          </div>
          <div className='login-input-wrapper'>
            <div>
              <MdPerson className='icon' size={25} style={{ color: 'grey' }} />
              <input placeholder='User ID'></input>
            </div>
            <div>
              <MdLock className='icon' size={25} style={{ color: 'grey' }} />
              <input type='password' placeholder='Password'></input>
            </div>

          </div>
          <div className='login-check-wrapper'>
            <div className='check-header'>
              <input type='checkbox'></input>
              <span>Save User ID</span>
            </div>
            <span> Forget Password</span>

          </div>
          <div className='login-btn-wrapper'>
           <Link className='link' to="/signin/Main Homepage/home"><button className='btn-box'>SIGN IN
            </button></Link> 
            <button className='link-2'>Register</button>
          </div>
          <div className='login-footer'>
            <span>Open An Account</span>
            <span>ATM Locator</span>

          </div>
          <span className='bottom'>Privacy Policy</span>
        </div>
      </div>
    </div>
  )
}


export default Signin