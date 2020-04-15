import React from 'react'
import {observer,action} from 'mobx';
import {observable} from 'mobx-react';

import gameStore from '../../../stores/GameStore'

import GameField from '../GameField';
import Header from '../Header';

import GridMemoryGameTag from './styledComponent.js';

class GridMemoryGame extends React.Component{
    
    constructor(props){
        super(props);
          gameStore.setGridCells();
    }
    render(){
        return(
            <GridMemoryGameTag>
                <Header />
                <GameField />
                
            </GridMemoryGameTag>
            );
    }
    
    
}

export default GridMemoryGame;