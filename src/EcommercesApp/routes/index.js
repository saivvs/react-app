import React,{Component} from 'react';
import{
  BrowserRouter as Router,
  Route,
} from "react-router-dom";

import {ProductsPage} from './ProductsPageRoute/ProductsPageRoute.js';


const routes = [
    
    <Route path='/productspage' component={ProductsPage}/>,
    
    ];
    
    
export  {routes};