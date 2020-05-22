import React,{Component} from 'react';
import { FaLessThan,FaGreaterThan } from 'react-icons/fa'
import {PaginationButtonTag,PaginationButtonContainer,PaginationButtonNumber} from './styledComponents.js';
class PaginationButton extends Component{
    render(){
        const{currentPage,totalPage} = this.props;
        return(
            <PaginationButtonContainer>
            <PaginationButtonTag> <FaLessThan/> </PaginationButtonTag>
            <PaginationButtonNumber>{currentPage}</PaginationButtonNumber>
            <PaginationButtonNumber>{totalPage}</PaginationButtonNumber>
            <PaginationButtonTag> <FaGreaterThan/> </PaginationButtonTag>
            </PaginationButtonContainer>
            );
    }
}

export {PaginationButton};