import {  MdArrowBack } from 'react-icons/md';
import { Link } from 'react-router-dom';
 
 function Presaving(){
    return(
        <div className="presignup-container">
        <div className="presignup-header">
        <div className='presignup-subheader'>
        <Link to="/presignup"><MdArrowBack className='icon' size={25} style={{ color: 'grey' }} /></Link>
            <h3>Online Saving Account</h3>
            <span> Logo</span>
        </div>
        </div>
         
    <div className='presignup-footer saving-footer' >
         
            </div> 

        <div className='saving-bottom'>
            <Link to="/presignup/saving/register" className='btn'><button>I'm interested</button></Link>
            <Link className='cancel-link' to="/presignup"><span>CANCEL</span></Link>
        </div>

      
    </div>
    )
}

export default Presaving