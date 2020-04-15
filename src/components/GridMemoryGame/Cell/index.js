import React from 'react';
import {observable,action} from 'mobx';
import {observer} from 'mobx-react';

import gameStore from '../../../stores/GameStore';

import CellTag from './styledComponent.js';


@observer
class Cell extends React.Component{
    @observable shouldShowHiddenCells
    @observable isClickedOnCell
    
    cosntructor(){
        
        this.shouldShowHiddenCells = true;
        this.isClickedOnCell = '';
    }
    
    @action.bound
    renderCells(){
        //gameStore.setGridCells();
    }
    
    @action.bound
    onCellClick(){
        
    }
    
    @action.bound
    componentDidMount(){
        
    }
    
    render(){
        return(
            <CellTag>
                {this.renderCells()}
            </CellTag>
            )
    }
}

export default Cell;