import React,{Component} from 'react';
import {observer,inject} from 'mobx-react';
import {observable,action} from 'mobx';


import   { FiShoppingCart }  from 'react-icons/fi';


import {CartList} from '../CartList';
import {CheckOutButton} from '../CheckOutButton';
import {SubTotal} from '../SubTotal';
import {ProductCartTag,CartLogo,ProductCartSubTag,InitalCart,Footer,CartListTag,CartHeader,CartCloseButton,CartText,CartItemsCount} from './styledComponents.js';

@inject('cartStore','productStore')
@observer
class ProductCart extends Component{
    @observable shouldDisplayCart = false
    
    @action.bound
    showCart(){
            this.shouldDisplayCart = true;
    }
    @action.bound
    hideCart(){
        this.shouldDisplayCart = false;
    }
    
    
    render(){
        const {cartProductList,getProductDetailsById,onRemoveCartItem,totalCartAmount,clearCart,noOfProductsInCart} = this.props.cartStore;
        
        return(
            <ProductCartTag>
            <InitalCart>
                <FiShoppingCart onClick={this.showCart}/>
                <CartItemsCount>
                            {noOfProductsInCart}
                        </CartItemsCount>
            </InitalCart>
            <ProductCartSubTag shouldDisplayCart={this.shouldDisplayCart} >
                <CartHeader>
                    <CartCloseButton onClick={this.hideCart}>
                        X
                    </CartCloseButton>
                    <CartLogo>
                    <FiShoppingCart />
                        <CartItemsCount>
                            {noOfProductsInCart}
                        </CartItemsCount>
                        <CartText>
                        Cart
                    </CartText>
                    </CartLogo>
                    
                </CartHeader>
                <CartListTag>
                <CartList getProductDetailsById={getProductDetailsById} cartProductList={cartProductList} onRemoveCartItem={onRemoveCartItem}/>
                </CartListTag>
                <Footer>
                <SubTotal totalCartAmount={totalCartAmount}/>
                <CheckOutButton totalCartAmount={totalCartAmount} clearCart={clearCart} cartProductList={cartProductList}/>
                </Footer>
                
            </ProductCartSubTag>
            
            </ProductCartTag>
            
            );
    }
}

export {ProductCart};