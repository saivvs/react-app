import React from 'react';
import {WinOrLoseTag,Score,GameState,PlayAgainButton} from '../EmojisGameApp/styledComponent.js';
class WinOrLose extends React.Component{
    render(){
        const{score,gameState,onChangeTheme,onPlayAgainClick}=this.props;
        return(
        <WinOrLoseTag>
            <Score>{score}</Score>
            <GameState>{gameState}</GameState>
            <PlayAgainButton onClick={onPlayAgainClick}>Play Again</PlayAgainButton>
        </WinOrLoseTag>
    )}
}

export default WinOrLose;