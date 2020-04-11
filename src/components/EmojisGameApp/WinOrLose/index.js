import React from 'react';
import {WinOrLoseTag,Score,GameState,PlayAgainButton} from './styledComponent.js';
class WinOrLose extends React.Component{
    
    
    render(){
        const{score,gameState,selectedTheme,onPlayAgainClick}=this.props;
        let gameStateTextColor = null;
    if(gameState==='YOU WIN!'){
        gameStateTextColor = 'green';
    }
    else{
        gameStateTextColor='red';
    }
        return(
        <WinOrLoseTag selectedTheme={selectedTheme}>
            <Score selectedTheme={selectedTheme}>{score}</Score>
            <GameState gameStateTextColor={gameStateTextColor}>{gameState}</GameState>
            <PlayAgainButton onClick={onPlayAgainClick}>Play Again</PlayAgainButton>
        </WinOrLoseTag>
    )}
}

export default WinOrLose;