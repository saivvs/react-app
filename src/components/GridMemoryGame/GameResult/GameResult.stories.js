import React from 'react'
import { action } from '@storybook/addon-actions'
import { withKnobs, text } from '@storybook/addon-knobs'

import GameResult from './';


export default {
    component: GameResult,
    title:'GameStates/GridGameWinningState'
};

export const defaultView = () => <GameResult/>