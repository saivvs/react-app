import React from 'react';
import {IoIosSearch} from 'react-icons/io';


class SearchCountry extends React.Component{
    handleSubmit=(e)=>{
        if(e.keyCode === 13){
            this.props.onChangeSearchCountry(e);
        }
    }
    render(){
        return(
            <div className='search-bar'>
            <IoIosSearch />
            <input type='text' style={this.props.selectedTheme.style} placeholder='Search for Country...' className='search-input' onKeyDown={this.handleSubmit}></input>
            </div>
            );
    }
}
export{SearchCountry};