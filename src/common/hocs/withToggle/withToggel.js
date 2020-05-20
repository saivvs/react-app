import React,{Component} from 'react';
import {observer} from 'mobx-react';
import {observable} from 'mobx';
function withToggle(WrappedComponent){
    @observer
     class ToggleStatusHandle extends Component{
    
    @observable toggleStatus = false
    // constructor(){
    //     this.toggleStatus = false;    
    // }
    
    onHandleToggleStatus=()=>{
        this.toggleStatus = this.toggleStatus?false:true;
    }
    
    render(){
        return <WrappedComponent {...this.props} toggleStatus={this.toggleStatus} onHandleToggleStatus={this.onHandleToggleStatus}/>;
    }
}
return ToggleStatusHandle;
}


export {withToggle};