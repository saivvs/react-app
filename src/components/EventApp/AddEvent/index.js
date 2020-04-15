import React from 'react';
import {observable,action} from 'mobx';
import { observer } from "mobx-react";
import eventStore from '../../stores/EventStore/index';

@observer
class AddEvent extends  React.Component{
    @observable eventName = '';
    @observable eventLoaction = '';
    
    
    @action.bound
    onAddEvent(){
        eventStore.onAddEvent(this.eventName,this.eventLoaction);
    }
    @action.bound
    OnChanageEventName(){
        this.eventName=event.target.value;
        if(event.KeyCode===13){
            this.onAddEvent();
        }
    }
    @action.bound
    onChangeEventLocation(){
        this.eventLoaction= event.target.value;
        if(event.KeyCode===13){
            this.onAddEvent();
        }
    }
    
    render(){
        return(
            <div>
                <input type='text' onKeyDown={this.onChangeEventName}/>
                <input type='text' onkeyDown={this.onChangeEventLocation}/>
                <button>AddEvent</button>
            </div>
            );
    }
}

export default AddEvent;