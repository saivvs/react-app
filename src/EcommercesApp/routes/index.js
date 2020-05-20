import React,{Component} from 'react';
import{
  BrowserRouter as Router,
  Route,
} from "react-router-dom";

import {ProductsPage} from './ProductsPageRoute/ProductsPageRoute.js';
import {E_COMMERCE_PRODUCTS_PATH} from '../constants/RouteConstants';


const routes = [
    
    <Route key={E_COMMERCE_PRODUCTS_PATH} exact path={E_COMMERCE_PRODUCTS_PATH} component={ProductsPage}/>,
    
    ];
    
    
export {routes};