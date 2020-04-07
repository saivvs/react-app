import React from 'react';
import {IoIosMoon} from 'react-icons/io';
class Header extends React.Component{
    state={
        dispalyText:'Where in the World?',
        themeText:' Light Mode',
    }
    handleThemeText = () =>{
this.props.onChangeTheme();
        this.setState({
            themeText:this.state.themeText==='Light Mode'?' Dark Mode':'Light Mode',
        });
        
    }
    
   render(){
    //   console.log('After each time change th eregion');
       return(
           <div className='dashboard-header' style={this.props.selectedTheme.style}>
               <button className='display-text-button' style={this.props.selectedTheme.style}>{this.state.dispalyText}</button>
               <button className ='theme-selection-button'onClick={this.handleThemeText} style={this.props.selectedTheme.style}><IoIosMoon />{this.state.themeText}</button>
           </div>
           );
   } 
}
export{Header};