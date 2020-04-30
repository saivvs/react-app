import React,{Component} from 'react';
import {observer} from 'mobx-react';

import {CartItemTag,Image,Title,RemoveItem,CartItemSubTag,ProductStyle,ProductQuantity,ProductPrice} from './styledComponents.js';

@observer
class CartItem extends Component{
    
    onClickRemove=()=>{
        const {onRemoveCartItem,cartProductId} = this.props;
        onRemoveCartItem(cartProductId);
    }
    
    render(){
        const {getProductDetailsById,onRemoveCartItem,cartProductId} = this.props;
        const {image,title,style,price,currencyFormat} = getProductDetailsById(cartProductId);
        return (
            <CartItemTag>
            <RemoveItem onClick={this.onClickRemove}>
                    X
                </RemoveItem>
                <Image src= {image} >
                </Image>
                <CartItemSubTag>
                <Title>
                    {title}
                </Title>
                <ProductStyle>
                    {style}
                </ProductStyle>
                <ProductQuantity>
                Quantity:{}
                </ProductQuantity>
                </CartItemSubTag>
                <ProductPrice>
                    {currencyFormat}
                    {price}
                </ProductPrice>
            </CartItemTag>
            );
    }
}


export  {CartItem};