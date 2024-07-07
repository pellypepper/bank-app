import { MdArrowBack } from 'react-icons/md';
import { Link } from 'react-router-dom';
import React, { useState } from 'react';

export default function Register() {
    const [selectedOption, setSelectedOption] = useState('');

    const handleChange = (event) => {
        setSelectedOption(event.target.value);
    };
    return (
        <div className="presignup-container register-container">
            <div className="presignup-header">
                <div className='presignup-subheader'>
                    <Link to="/presignup/saving"><MdArrowBack className='icon' size={25} style={{ color: 'grey' }} /></Link>
                    <h3>Open Your NG'S Bank Account</h3>
                    <span> Logo</span>
                </div>
            </div>

            <p className='register-text'>You will not be able to do any transaction before visiting the branch</p>

            <form className='form-wrapper'>
                <label>First Name</label>
                <input type='text' placeholder='First Name(50 character)'></input>
                <label>Last Name</label>
                <input type='text' placeholder='Last Name(50 character)'></input>
                <label>Middle Name</label>
                <input type='text' placeholder='Middle Name(50 character)'></input>
                <label>Title</label>
                <select id="options" value={selectedOption} onChange={handleChange}>
                    <option value="" disabled>Select Title</option>
                    <option value="Nigera">MR</option>
                    <option value="United Kingdom">MRS</option>
                    <option value="Russia">MS</option>
                </select>
                <label>Country</label>
                <select id="options" value={selectedOption} onChange={handleChange}>
                    <option value="" disabled>Select Country</option>
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
                <label>Address</label>
                <input type='text' placeholder='Add your address(30 character)'></input>
                <input type='text' placeholder='Add your address(30 character)'></input>
                <input type='text' placeholder='Add your address(30 character)'></input>
                <label>Date of Birth</label>
                <input type='date' placeholder='DD/MM/YY'></input>
                <label>Phone Number</label>
                <input type='number'></input>
                <label>Email Address</label>
                <input placeholder='name@email.com' type='email'></input>
                <label>Gender</label>
                <select id="options" value={selectedOption} onChange={handleChange}>
                    <option value="" disabled>Select Gender</option>
                    <option value="Nigera">Male</option>
                    <option value="United Kingdom">Female</option>
                </select>
            </form>
            <div className='btn'>
            <Link className='link' to="/signin/Main Homepage/home"><button className='btn-box'>Submit
            </button></Link> 
              
               <Link className='cancel-link' to="/presignup/saving"><span>CANCEL</span></Link> 
            </div>



        </div>
    )
}