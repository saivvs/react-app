import React from 'react'
import { action } from '@storybook/addon-actions'
import { withKnobs, text } from '@storybook/addon-knobs'


import {AllButton} from './styledComponent';

export default {
    component: AllButton,
    title:'Buttons/AllButton'
};

export const defaultView = () => <AllButton>All</AllButton> ;