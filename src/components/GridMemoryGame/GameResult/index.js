import React from 'react'
import {observer,action} from 'mobx';
import {observable} from 'mobx-react';
import GameResultTag from './styledComponent.js';

class GameResult extends React.Component{
    
    render(){
        return(
            <GameResultTag>
                GameResult
            </GameResultTag>
            );
    }
}

export default GameResult;
