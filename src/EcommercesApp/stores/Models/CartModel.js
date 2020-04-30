import React,{ Component } from 'react';
import {observable} from 'mobx';


class CartModel extends Component {
    @observable  cartItemId
    @observable productId
    @observable quantity
    
    constructor(props){
        super(props);
        this.initilise(props);
    }
    
    
    initilise=(id)=>{
        //console.log('cartid==',id);
        this.cartItemId = id;
        this.productId = id;
        this.quantity = 1;
        
    }
    
    incrementQuantity=()=>{
        this.quantity++;
    }
}

export default CartModel;