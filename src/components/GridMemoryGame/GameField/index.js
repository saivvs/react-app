import React from 'react'
import {observable,action} from 'mobx';
import {observer} from 'mobx-react';

import Cell from '../Cell';

import GameFieldTag from './styleComponents';

@observer
class GameField extends React.Component{
    
    renderGrid=()=>{
        const {currentLevelGridCells,cellWidth,selectedTheme,onCellClick,level}=this.props;
        return currentLevelGridCells.map((eachCell)=> <Cell key={eachCell.id} selectedTheme={selectedTheme} level={level} onCellClick={onCellClick} cellWidth={cellWidth} eachCell={eachCell}/>);
    }
    render(){
        const {width,selectedTheme} = this.props;
        return(
            <GameFieldTag width={width} selectedTheme={selectedTheme}>
                {this.renderGrid()}
            </GameFieldTag>
            );
    }
}

export default GameField;