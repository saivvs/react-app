import React,{Component} from 'react';
import {observer} from 'mobx-react';


import {CartListTag} from './styledComponents.js';
import {CartItem} from '../CartItem';


@observer
class CartList extends Component{
    
    render(){
        const {cartProductList,getProductDetailsById,onRemoveCartItem} = this.props;
        return (
            <CartListTag>
            {cartProductList.map((eachid)=><CartItem key={eachid.productId} getProductDetailsById={getProductDetailsById} cartProductId={eachid.productId} onRemoveCartItem={onRemoveCartItem} />)}
                
            </CartListTag>
            );
    }
}


export  {CartList};