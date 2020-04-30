import React,{Component} from 'react';
import {observer} from 'mobx-react';

import {CheckOutButtonTag} from './styledComponents.js';
@observer
class CheckOutButton extends Component{
    
    onClickCheckOut=()=>{
        const{totalCartAmount,clearCart}=this.props;
        totalCartAmount;
        clearCart();
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