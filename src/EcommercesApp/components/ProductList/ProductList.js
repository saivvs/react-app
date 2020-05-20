import React,{Component} from 'react';
import {observer,inject} from 'mobx-react';
import {observable,action} from 'mobx';

import {ProductsListTag} from './styledComponents.js'

import {Product} from '../Product';

@observer
class ProductsList extends Component{
    render(){
        const {productList,onClickAddToCart} = this.props;
        console.log('productList cmponent',productList);
        return(
            <ProductsListTag>
            {productList.map((eachproduct)=><Product key={eachproduct.id} onClickAddToCart={onClickAddToCart} eachproduct={eachproduct}/>)}
            </ProductsListTag>
            );
    }
}

export  {ProductsList};