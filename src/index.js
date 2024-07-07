import React from 'react';
import ReactDOM from 'react-dom';
import "./App.css"
import './index.css';

import Homepage from './homepage';
import Signin from './signin';

import PreSignUp from './Presignup/presignup';
import Presaving from './Presignup/saving';
import Register from './Presignup/register';
import Home from './Main Homepage/home';
import Main from './Main Homepage/main';
import Invest from './Main Homepage/invest';
import Payment from './Main Homepage/payment';
import Crypto from './Main Homepage/crypto';
import Help from './Main Homepage/help';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Homepage />
  },
  {
    path: '/signin',
    element: <Signin />
  },
  
  {
    path: '/presignup',
    element: <PreSignUp />
  },
  {
    path: '/presignup/saving',
    element: <Presaving />
  },
  {
    path: '/presignup/saving/register',
    element: <Register />
  },
  {
    path: '/signin/Main Homepage/home',
    element: <Home />,
    children: [
      { index: true,  element: <Main/>},
      {
        path: 'payment',
        element: <Payment />
      }, 
      {
        path: 'invest',
        element: <Invest />
      }, 
      {
        path: 'crypto',
        element: <Crypto />
      }, 
      {
        path: 'help',
        element: <Help />
      }, 
    ]
  }

])


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
 
    <RouterProvider router={router} />

  </React.StrictMode>
);


