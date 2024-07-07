import React from 'react';
import { Link } from "react-router-dom";
import { MdPerson } from 'react-icons/md';
// Assuming you have a CSS file for your component styles

function Homepage() {

  const signUp = () => {
    const signup = document.getElementById("signup");
    if (signup.classList.contains("show")) {
      signup.classList.remove("show");
    } else {
      signup.classList.add("show");
    }

   
  };
  const signUpClose = () => {
    const signup = document.getElementById("signup");
    signup.classList.remove("show");
  };
  

  return (
    <div className="home-container">
      <div className="home-wrapper">
        <h3>Welcome to your new NG'S Mobile App</h3>
        <span>An experience built from the ground up especially for you. To enjoy this experience, register as a new user using any of the sign</span>

        <nav className="home-btn-container">
          <Link to="/signin" className="home-btn btn"><button>Log in</button></Link>
          <button onClick={signUp} className="btn" >Sign up to the New NG'S Mobile App</button>
          <p>Don't have a NG'S Account?</p>
          <button onClick={signUp} className='btn'>Open an Account</button>
        </nav>
      </div>

      <div id="signup" className="signup-container">
        <div className='signup-header'>
          <p>Select a Country</p>
          <span onClick={signUpClose}>Cancel</span>
        </div>
        <div className='search-wrapper'>
        <MdPerson className='icon' size={25} style={{ color: 'grey' }} />
        <input placeholder='Search your country...' type='search'></input>
        </div>
        <div className='search-box'>
          <span className='title'>B</span>
        <div className='box'>
         <Link className='presignup' to="/presignup"><p >Benin</p></Link> 
         <Link className='presignup' to="/presignup"><p>Burkina Faso</p></Link> 
        </div>
        <span className='title'>C</span>
        <div className='box'>
        <Link className='presignup' to="/presignup"><p >Cameroon</p></Link> 
        <Link className='presignup' to="/presignup">  <p >Chad</p></Link> 
        <Link className='presignup' to="/presignup"> <p >Congo</p></Link> 
        <Link className='presignup' to="/presignup"><p > Ivory Coast</p></Link> 
        </div>
        <span className='title'>G</span>
        <div className='box'>
        <Link className='presignup' to="/presignup"> <p >Gabon</p></Link> 
        <Link className='presignup' to="/presignup"> <p >Ghana</p></Link> 
        <Link className='presignup' to="/presignup"> <p> Guinea</p></Link> 
        </div>
        <span className='title'>K</span>
        <div className='box'>
        <Link className='presignup' to="/presignup"> <p >Kenya</p></Link> 
         
        </div>

      </div>
      </div>
      
    </div>
  );
}

export default Homepage;
