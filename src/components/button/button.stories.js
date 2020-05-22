import React,{Component} from 'react';

import {Button} from '.';

import { action} from '@storybook/addon-actions';


export default {
    component: Button,
    title: 'Button',
};

export const text = () => <Button onClick={action('clicked')}>Hello Button</Button>;