import React from 'react'
import { action } from '@storybook/addon-actions'
import { withKnobs, text, object } from '@storybook/addon-knobs'

import {InputElement} from './';

export default {
   component: InputElement,
   title: 'Forms/InputElement'
};


export const defaultView = () => <InputElement />

export const knobs = () => (
    <InputElement
        type={text('type', 'text')}
        placeholder={text('placeholder','UserName')}
    />
);

knobs.story = {
   decorators: [withKnobs]
}