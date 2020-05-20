import React,{ Component } from 'react';
import {E_COMMERCE_SIGN_IN_PATH} from '../constants/RouteConstants'
import{
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import SignInRoute from './SignInRoute';

// import {ProtectRoute} from '../utils/ProtectedRoutes';

const authenticationRoute = [
    
    <Route 
    key ={E_COMMERCE_SIGN_IN_PATH} 
    path={E_COMMERCE_SIGN_IN_PATH} 
      component={SignInRoute}
    />
     ];
// const authenticationRoute = [
//   ProtectRoute( E_COMMERCE_SIGN_IN_PATH , SignInRoute )
//   ];

 export {authenticationRoute};