import React,{Component} from 'react';
import {MouseCoordinates} from '../MouseCoordinates';

import {RenderPropsBlock,Heading,MousePostion} from './styledComponents.js';
class DisplayMouseCoordinates extends Component{
    
    render(){
        return(
            <RenderPropsBlock>
                <Heading>DisplayMouseCoordinates</Heading>
                <MouseCoordinates children={(x,y)=>(<MousePostion>The mouse position is {x}, {y}</MousePostion>)} />
            </RenderPropsBlock>
            );
    }
}

export {DisplayMouseCoordinates};