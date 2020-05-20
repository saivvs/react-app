import React,{Component} from 'react';

import {AdvancedConceptPracticePage,Heading} from './styledComponents.js';
import {ViewEditToggle} from '../../components/ViewEditToggle';
import {CollapseExpand} from '../../components/CollapseExpand';
class AdvancedConceptPractice extends Component{
    render(){
        return(
            <AdvancedConceptPracticePage>
                <Heading>HOC's Usage</Heading>
                <ViewEditToggle />
                <CollapseExpand />
            </AdvancedConceptPracticePage>
            );
    }
}

export {AdvancedConceptPractice};