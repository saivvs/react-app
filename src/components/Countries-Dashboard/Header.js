import React from 'react';
import {IoIosMoon} from 'react-icons/io';
import {observer} from 'mobx-react'

type selectedThemeProps={
    selectedTheme:any
}
@observer
class Header extends React.Component<selectedThemeProps>{
    state={
        dispalyText:'Where in the World?',
        themeText:' Light Mode',
    }
    handleThemeText = () =>{

//this.props.onChangeTheme();
        this.setState({
            themeText:this.state.themeText==='Light Mode'?' Dark Mode':'Light Mode',
        });
        
    }
    
   render(){
    //   console.log('After each time change th eregion');
    
    const { selectedTheme } = this.props;
    const {style}=selectedTheme
    
    
    console.log(style);
       return(
           <div className='dashboard-header' style={style}>
               <button className='display-text-button' style={style}>{this.state.dispalyText}</button>
               <button className ='theme-selection-button'onClick={this.handleThemeText} style={style}><IoIosMoon />{this.state.themeText}</button>
           </div>
           );
   } 
}
export{Header};