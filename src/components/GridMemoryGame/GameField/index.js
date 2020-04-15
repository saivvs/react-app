import React from 'react'
import {observable,action} from 'mobx';
import {observer} from 'mobx-react';


import GameStore from '../../../stores/GameStore';
import Cell from '../Cell';

import GameFieldTag from './styleComponent';

//@observer
class GameField extends React.Component{
    
    renderGrid=()=>{
        return GameStore.currentLevelGridCells.map((eachCell)=> <Cell key={eachCell.id}/>);
    }
    render(){
        return(
            <GameFieldTag>
                {this.renderGrid()}
            </GameFieldTag>
            );
    }
}

export default GameField;