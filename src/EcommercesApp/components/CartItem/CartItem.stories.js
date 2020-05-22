import React,{Component} from 'react';

import { action } from '@storybook/addon-actions'
import { withKnobs, text, object } from '@storybook/addon-knobs'

import {CartItem} from '.';

const ProductId = 1;
const quantity = 1;
const getProductDetailsById=()=>{
    return{
    currencyFormat : 'USD',
    style : 'Black with custom print',
    price : 1000,
    image : 'https://react-shopping-cart-67954.firebaseapp.com/static/media/12064273040195392_1.2995d79a.jpg',
   title : 'Cat Tee Black T-Shirt',

}
}
// const quantity = 1;
// const price = 1000;
// const image = 'https://react-shopping-cart-67954.firebaseapp.com/static/media/12064273040195392_1.2995d79a.jpg'
//cnst title = 'Cat Tee Black T-Shirt';






export default {
    component:CartItem,
    title:'Cards/CartItem'
}

export const deafultView = () => <CartItem cartProductId={ProductId}  quantity={quantity} getProductDetailsById={getProductDetailsById}/>