import React from 'react'
//import {observer,action} from 'mobx';
import {observer} from 'mobx-react';
import {GameResultTag,LevelTag,ApprecationTag,PlayAgainButton} from './styledComponents.js';

@observer
class GameResult extends React.Component{
    
    render(){
        const{playAgain,width,topLevel}=this.props;
        
        return(
            <GameResultTag width={width}>
                <LevelTag>
                    {topLevel}
                </LevelTag>
                <ApprecationTag>
                    Congratulations! You complted all the levels
                </ApprecationTag>
                <PlayAgainButton onClick={playAgain}>
                    PlayAgain
                </PlayAgainButton>
            </GameResultTag>
            );
    }
}

export default GameResult;
