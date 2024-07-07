import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Homepage from './homepage';
import Signin from './signin';
import Signup from './signup';
import PreSignUp from './Presignup/presignup';
import Presaving from './Presignup/saving';
import Register from './Presignup/register';
import Home from './Main Homepage/home';
import Main from './Main Homepage/main';
import Invest from './Main Homepage/invest';
import Payment from './Main Homepage/payment';
import Crypto from './Main Homepage/crypto';
import Help from './Main Homepage/help';

function App() {
  return (
  <Homepage/>
  );
}

export default App;
