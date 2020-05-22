import React,{Component} from 'react';
import { withKons,text} from '@storybook/addon-knobs';

import {PaginationButton} from '.';
export default {
    component:PaginationButton,
    title:'Buttons/PaginationButton'
}

export const defaultView = () => <PaginationButton totalPage={9} currentPage={1}/>