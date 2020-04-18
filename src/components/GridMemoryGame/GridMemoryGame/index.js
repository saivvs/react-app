import React from 'react';
//import {action} from 'mobx';
import {observer} from 'mobx-react';

import gameStore from '../../../stores/GameStore';
import themeStore from '../../../stores/ThemeStore';
import GameField from '../GameField';
import Header from '../Header';
import GameResult from '../GameResult';
import data from '../jsonFolder/index.json';

import GridMemoryGameTag from './styledComponents.js';

const marginOfEachCell = 8;

@observer
class GridMemoryGame extends React.Component{
    
    constructor(props){
        super(props);
          gameStore.setGridCells();
    }
    
    
    render(){
        const {level,onCellClick,onPlayAgainClick,currentLevelGridCells,topLevel} = gameStore;
        const {selectedTheme} = themeStore;
        const {gridWidth,gridSize} = data[level];
        
        const cellWidth = ((gridWidth - (gridSize*marginOfEachCell))/gridSize);
            return(
            <GridMemoryGameTag selectedTheme={themeStore.selectedTheme}>
                <Header themeStore={themeStore} level={level} topLevel={topLevel} width={gridWidth}/>
                {!gameStore.isGameCompleted?
                
                <GameField  selectedTheme={selectedTheme} level={level} currentLevelGridCells={currentLevelGridCells} onCellClick={onCellClick} width={gridWidth} cellWidth={cellWidth}/>
                    :
                <GameResult selectedTheme={selectedTheme} playAgain={onPlayAgainClick} width={gridWidth} topLevel={topLevel} />
                }
            </GridMemoryGameTag>
            );
        
    }
    
    
}

export default GridMemoryGame;