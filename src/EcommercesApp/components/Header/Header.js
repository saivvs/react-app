import React,{Component} from 'react';
import {observer} from 'mobx-react';



import {HeaderTag,CountOfProducts} from './styledComponents.js';
import {ProductSort} from '../ProductSort';

@observer
class Header extends Component{
        
    render(){
        const {totalNoOfProductsDispalyed,onChangeSortBy} = this.props;
        return(
            <HeaderTag>
                <CountOfProducts>
                    {totalNoOfProductsDispalyed} Products(s) found. 
                </CountOfProducts>
                <ProductSort onChangeSortBy={onChangeSortBy}/>
            </HeaderTag>
            );
    }
}

export { Header};