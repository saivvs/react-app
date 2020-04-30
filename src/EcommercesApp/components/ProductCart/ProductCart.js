import React,{Component} from 'react';
import {observer,inject} from 'mobx-react';
import {observable,action} from 'mobx';


import   { FiShoppingCart }  from 'react-icons/fi';


import {CartList} from '../CartList';
import {CheckOutButton} from '../CheckOutButton';
import {SubTotal} from '../SubTotal';
import {ProductCartTag,CartLogo,ProductCartSubTag,InitalCart,Footer,CartListTag} from './styledComponents.js';

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
        const {cartProductList,getProductDetailsById,onRemoveCartItem,totalCartAmount,clearCart} = this.props.cartStore;
        
        return(
            <ProductCartTag>
            <InitalCart>
                <FiShoppingCart onClick={this.showCart}/>
            </InitalCart>
            <ProductCartSubTag shouldDisplayCart={this.shouldDisplayCart} >
                <CartLogo>
                    <FiShoppingCart onClick={this.hideCart}/>
                </CartLogo>
                <CartListTag>
                <CartList getProductDetailsById={getProductDetailsById} cartProductList={cartProductList} onRemoveCartItem={onRemoveCartItem}/>
                </CartListTag>
                <Footer>
                <SubTotal totalCartAmount={totalCartAmount}/>
                <CheckOutButton totalCartAmount={totalCartAmount} clearCart={clearCart}/>
                </Footer>
                
            </ProductCartSubTag>
            
            </ProductCartTag>
            
            );
    }
}

export {ProductCart};