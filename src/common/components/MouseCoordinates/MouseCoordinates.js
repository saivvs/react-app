import React,{Component} from 'react';

import {MouseCoordinatesBlock} from './styledComponents.js';
class MouseCoordinates extends Component{
    constructor(props){
        super(props);
        this.handleMouseMove = this.handleMouseMove.bind(this);
        this.state = { x:0, y:0 };
    }
    
    handleMouseMove(event){
        this.setState({
            x: event.clientX,
            y: event.clientY
        });
    }
    
    render(){
        return (
        <MouseCoordinatesBlock onMouseMove={this.handleMouseMove}>
         {this.props.children(this.state.x,this.state.y)}
        </MouseCoordinatesBlock>
            );
    }
}

export {MouseCoordinates};