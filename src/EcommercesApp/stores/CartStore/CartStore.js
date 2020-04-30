import { observable,action,computed } from 'mobx';

import CartModel from '../Models/CartModel.js';
import stores from '../index';


class CartStore {
    @observable cartProductList
    productStore
    
    constructor(){
        this.intilise();
    }
    
    @action.bound
    intilise(){
        this.cartProductList = [];
    }
    
    @action.bound
    onClickAddToCart(id){
       const cartItem = this.cartProductList.filter((item)=>item.productId === id);
       if(cartItem.length>0){
           cartItem[0].incrementQuantity();
       }
       else{
            this.cartProductList.push( new CartModel(id));    
            this.noOfProductsInCart;
            this.totalCartAmount;
       }
    }
    
    @action.bound
    onRemoveCartItem(id){
        this.cartProductList = this.cartProductList.filter((eachproduct)=>eachproduct.productId !== id);
    }
    
    @action.bound
    clearCart(){
        this.intilise();
    }
    
    @action.bound
    getProductDetailsById(id){
        const { productList } = stores.productStore;
         const items =productList.filter((eachproduct)=>eachproduct.id===id);
         return items[0];
    }
    
    @computed
    get totalCartAmount(){
       let amount=0;
       this.cartProductList.forEach((eachproduct)=>
       amount+=this.getProductDetailsById((eachproduct.productId)).price);
       return amount;
    }
    
    @computed
    get noOfProductsInCart(){
        return this.cartProductList.length;
    }
}


export default CartStore;