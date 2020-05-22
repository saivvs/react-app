import React from 'react'
import { action } from '@storybook/addon-actions'
import { withKnobs, text } from '@storybook/addon-knobs'


import {ClearCompletedButton} from './styledComponent';

export default {
    component: ClearCompletedButton,
    title:'Buttons/ClearCompletedButton'
};

export const defaultView = () => <ClearCompletedButton>ClearCompleted</ClearCompletedButton> ;