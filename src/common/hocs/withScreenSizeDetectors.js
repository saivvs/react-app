import React,{Component} from 'react';
//import {observer} from 'mobx-react';
//import {observable} from 'mobx';
function withScreenSizeDetector(WrappedComponent){
  return class extends Component{
      constructor(props){
          super(props);
          this.state={
              screeWidth:window.innerWidth,
          };
      }
      
      
      componentDidMount=()=>{
          window.addEventListener('resize',this.onChangeScreenSize)
      }
      
      onChangeScreenSize=()=>{
          this.setState=({
             screeWidth: window.innerWidth
          });
          this.deviceType();
      }
      
      deviceType=()=>{
          if(this.state.screeWidth < 576){
              return 'Mobile'
          }
          else if(this.state.screeWidth >=576 && this.state.screenWidth < 992){
              return 'Tablet'
          }
          else if(this.state.screenWidth >= 992){
              return 'Desktop'
          }
      }
      render(){
          return(
              <WrappedComponent deviceType={this.deviceType}/>
              );
      }
  };  
}

export {withScreenSizeDetector};