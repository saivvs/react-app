import React from 'react'
import { action } from '@storybook/addon-actions'
import { withKnobs, text, object } from '@storybook/addon-knobs'

import WinOrLose from './';
import EmojiGameApp from '../EmojiGameApp';


export default {
   component: WinOrLose,
   title: 'GameStates/EmojiGameWinState'
}

export const GameWinState = () => <WinOrLose selectedTheme={EmojiGameApp.themeMode.light} gameState={'YOU WIN!'} />

export const GameLoseState = () => <WinOrLose selectedTheme={EmojiGameApp.themeMode.light} gameState={'YOU LOSE'} />


export const knobs = () => (
    <WinOrLose 
     selectedTheme={object("selectedTheme", EmojiGameApp.themeMode.light)}
     gameState = {text("gameState", 'YOU WIN!')}
    />
    );
    
knobs.story = {
   decorators: [withKnobs]
}

