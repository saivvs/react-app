import React,{Component} from 'react';
import {observer} from 'mobx-react';


import {FilterOfPrice,Select,Option} from './styledComponents.js';

class ProductSort extends Component{
    
    onClickSort=(event)=>{
        const {onChangeSortBy} = this.props;
       onChangeSortBy(event.target.value);
        //console.log('product===',event.target.value);
    }
    render(){
        
        return(
        <FilterOfPrice>
                 Sort by price:
                    <Select onChange={this.onClickSort}>
                        <Option value='SELECT' key='select'>Select</Option>
                        <Option value='ASCENDING' key='Lowest to Highest' >Lowest to Highest</Option>
                        <Option value='DESCENDING' key='Highest to Lowest'>Highest to Lowest</Option>
                    </Select>
                </FilterOfPrice>
                );
    }
}

export {ProductSort};