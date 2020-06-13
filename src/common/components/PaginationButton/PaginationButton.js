import React,{Component} from 'react';
import { FaLessThan,FaGreaterThan } from 'react-icons/fa';
import {PaginationButtonTag,PaginationButtonContainer,PaginationButtonNumber} from './styledComponents.js';
class PaginationButton extends Component{
    render(){
        const{currentPage,totalPages,handleDecerementButton,handleIncrementButton} = this.props;
        return(
            <PaginationButtonContainer>
            <PaginationButtonTag value='decerement' onClick={handleDecerementButton}> <FaLessThan/> </PaginationButtonTag>
            <PaginationButtonNumber>{currentPage}</PaginationButtonNumber>
            <PaginationButtonNumber>{totalPages}</PaginationButtonNumber>
            <PaginationButtonTag value='increment' onClick={handleIncrementButton}> <FaGreaterThan/> </PaginationButtonTag>
            </PaginationButtonContainer>
            );
    }
}

export {PaginationButton};