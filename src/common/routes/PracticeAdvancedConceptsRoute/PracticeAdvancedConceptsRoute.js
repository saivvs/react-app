import React,{Component} from 'react';

import {AdvancedConceptPracticePage,Heading} from './styledComponents.js';
import {ViewEditToggle} from '../../components/ViewEditToggle';
import {CollapseExpand} from '../../components/CollapseExpand';
import {DeviceTypeText} from '../../components/DeviceTypeText';
import {DisplayMouseCoordinates} from '../../components/DisplayMouseCoordinates';
class AdvancedConceptPractice extends Component{
    render(){
        return(
            <AdvancedConceptPracticePage>
                <Heading>HOC's Usage</Heading>
                <ViewEditToggle />
                <CollapseExpand />
                <DeviceTypeText />
                <Heading>Render Props Usage</Heading>
                <DisplayMouseCoordinates />
            </AdvancedConceptPracticePage>
            );
    }
}

export {AdvancedConceptPractice};