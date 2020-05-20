import React,{Component} from 'react';
import {observer} from 'mobx-react';
import {ToastContainer,toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import {ProductDiscrption,ProductTag,ProductSubTag,ProductImage,ProductTitleTag,ProductPriceTag,ProductEMITag,AddCartButton,ProductTitleTagBorder,Freeshipping} from './styledComponents.js';

@observer
class Product extends Component{

    onAddCartItem=()=>{
        
        const {onClickAddToCart}=this.props;
        const {id}=this.props.eachproduct;
        onClickAddToCart(id);
        this.notify();
    }
    notify = () => {
    toast.warn("Product Add To Cart...", {
      position: toast.POSITION.BOTTOM_CENTER
    });
    }
    
    render(){
        const {currencyFormat,price,image,title,installments,isFreeShipping} = this.props.eachproduct;
        const EachInstamellentsPrice = Math.round(((price/installments)*100)/100);
        
        return(
            <ProductTag>
            <ProductSubTag>
                {isFreeShipping?<Freeshipping>Free shipping</Freeshipping>:null}
                <ProductImage src= {image} >
                </ProductImage>
                <ProductDiscrption>
                <ProductTitleTag>
                    {title}
                </ProductTitleTag>
                <ProductTitleTagBorder>
                </ProductTitleTagBorder>
                <ProductPriceTag>
                    {currencyFormat} {price}
                </ProductPriceTag>
                <ProductEMITag>
                    or {installments} x {currencyFormat} {EachInstamellentsPrice}
                </ProductEMITag>
                </ProductDiscrption>
            </ProductSubTag>
                <AddCartButton onClick={this.onAddCartItem} >
                    Add to Cart
                </AddCartButton>
                            <ToastContainer />
                </ProductTag>
            );
    }
}

export  {Product};