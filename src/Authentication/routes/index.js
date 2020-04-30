import React,{ Component } from 'react';
import{
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import SignIn from './signInRoute/signInRoute.js';


const routes = [
    
    <Route path='/signin' component={SignIn}/>
    ];
    
    
export default routes;