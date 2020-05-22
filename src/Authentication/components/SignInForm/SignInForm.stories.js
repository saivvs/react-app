import React,{Component} from 'react';

import { action } from '@storybook/addon-actions'
import { withKnobs, text, color } from '@storybook/addon-knobs'


import {SignInButton} from './styledComponents';

export default {
    component:SignInButton,
    title:'Buttons/SignInButton'
};


export const defaultView = () => <SignInButton>Sign In</SignInButton>

export const knobs = () =>{
    return (<SignInButton
    name={text('name','Sign In')}
    color={color('color', 'black')}
    />)
}

knobs.story = {
   decorators: [withKnobs]
}