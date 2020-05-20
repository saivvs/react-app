import React,{Component} from 'react';
import {observer} from 'mobx-react';

import {CheckOutButtonTag} from './styledComponents.js';
@observer
class CheckOutButton extends Component{
    
    onClickCheckOut=()=>{
        const{totalCartAmount,cartProductList,clearCart}=this.props;
        if(cartProductList.length<1){
            alert('Invalid Entry');
        }
        else{
        totalCartAmount;
        alert('Thank you for shopping with us  😊.Your products will be delivered in 3 days to the address mentioned in your profile.');
        clearCart();
        }
    }
    render(){
        return(
            <CheckOutButtonTag onClick={this.onClickCheckOut}>
                CHECKOUT
            </CheckOutButtonTag>
            )
    }
}

export  {CheckOutButton};