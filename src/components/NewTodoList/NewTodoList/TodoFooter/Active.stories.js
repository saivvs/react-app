import React from 'react'
import { action } from '@storybook/addon-actions'
import { withKnobs, text } from '@storybook/addon-knobs'


import {ActiveButton} from './styledComponent';

export default {
    component: ActiveButton,
    title:'Buttons/ActiveButton'
};

export const defaultView = () => <ActiveButton>Active</ActiveButton> ;