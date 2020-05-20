import React,{ Component } from 'react';
import {ADVANCED_CONCEPTS_PRACTICE_PATH} from '../constants/RouteConstants';

import {Route} from 'react-router-dom';

import {WithToggel} from './PracticeAdvancedConceptsRoute/PracticeAdvancedConceptsRoute.js';

const AdvancedConceptPractice = [
    <Route
    key={ADVANCED_CONCEPTS_PRACTICE_PATH}
    path={ADVANCED_CONCEPTS_PRACTICE_PATH}
    component = {WithToggel}
    />
    ];
    
export {AdvancedConceptPractice};