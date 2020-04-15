import {observable,action,reaction,computed} from 'mobx';
import CellModel from '../models/CellModel';

class GameStore{
    @observable level
    @observable toplevel
    @observable currentLevelGridCells
    @observable selectedCellsCount
    @observable isGameCompleted
    
    constructor(){
        this.level = 0;
        this.toplevel = 0;
        this.currentLevelGridCells = [];
        this.selectedCellsCount = 0;
        this.isGameCompleted = false;
    }
    
    @action.bound
    onCellClick(){
        
    }
    
    @action.bound
    setGridCells(){
        let numberofCells = 3+this.level;
        for(let i=0;i<(numberofCells*numberofCells) ;i++){
            this.currentLevelGridCells.push(new CellModel());
        }
        console.log(this.currentLevelGridCells);
    }
    
    @action.bound
    goToNextLevelAndUpdateCells(){
        
    }
    
    @action.bound
    goToInitialLevelAndUpdateCells(){
        
    }
    
    @action.bound
    resetSelectedCellsCount(){
        
    }
    
    
    @action.bound
    incrementSelectedCellsCount(){
        
    }
    
    @action.bound
    onPlayAgainClick(){
        
    }
    
    @action.bound
    resetGame(){
        
    }
    
    @action.bound
    setTopLevel(){
        
    }
    
}

const gameStore = new GameStore;
export default gameStore;