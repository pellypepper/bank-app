import {  MdArrowBack } from 'react-icons/md';
import { Link } from 'react-router-dom';



function PreSignUp (){
    return(
        <div className="presignup-container">
            <div className="presignup-header">
            <div className='presignup-subheader'>
            <Link to="/"><MdArrowBack className='icon' size={25} style={{ color: 'grey' }} /></Link>
                <h3>Open Your NG'S Bank Account</h3>
                <span> Logo</span>
            </div>
            </div>

            <div className='presignup-wrapper'>
                <p>Enjoy great benefits with unrestricted secure access to your account, anytime , anywhere on your computer, tablet, smartphones, or any mobile device</p>
            </div>
            <Link to="/presignup/saving" className='presignup-footer'>  <div >
          <h5>Online Savings Account</h5>
                <span>Learn More</span>
            </div> </Link>
        </div>
    )
}

export default PreSignUp