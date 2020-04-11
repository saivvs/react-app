import React from 'react';
import {observable} from 'mobx';
import { observer } from "mobx-react";
import {CounterAppTag,CounterAppSubTag1,CounterAppSubTag2,IncrementButton,DecrementButton,Count,Button} from './styledComponents.js';
@observer
class CounterApp extends React.Component{
    @observable count = 0
    
    onHandleIncrementCount=()=>{
        this.count++;
    }
    
    onHandleDecrementCount=()=>{
        this.count--;
    }
    render() {
        return(
            <CounterAppTag>
                <CounterAppSubTag1>
                    Counter
                </CounterAppSubTag1>
                <CounterAppSubTag2>
                    <IncrementButton><Button onClick={this.onHandleIncrementCount}>+</Button></IncrementButton>
                    <Count>{this.count}</Count>
                    <DecrementButton onClick={this.onHandleDecrementCount}><Button>-</Button></DecrementButton>
                </CounterAppSubTag2>
            </CounterAppTag>
            );
    }
}

export default CounterApp;