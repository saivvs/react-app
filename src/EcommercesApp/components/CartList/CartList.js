import React,{Component} from 'react';
import {observer} from 'mobx-react';


import {CartListTag,AddProduct} from './styledComponents.js';
import {CartItem} from '../CartItem';


@observer
class CartList extends Component{
    
    render(){
        const {cartProductList,getProductDetailsById,onRemoveCartItem} = this.props;
        return (
            <CartListTag>
            {cartProductList.length === 0?<AddProduct>Add some products in cart</AddProduct>:
            cartProductList.map((eachid)=><CartItem key={eachid.productId} getProductDetailsById={getProductDetailsById} cartProductId={eachid.productId} quantity={eachid.quantity} onRemoveCartItem={onRemoveCartItem} />)
            }          
            </CartListTag>
            );
    }
}


export  {CartList};