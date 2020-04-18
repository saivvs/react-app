import {observable,action} from 'mobx';
import CellModel from '../models/CellModel';

import data from '../../components/GridMemoryGame/jsonFolder/index.json';


const maxLevel = 7;
class GameStore{
    @observable level
    @observable toplevel
    @observable currentLevelGridCells
    @observable selectedCellsCount
    @observable isGameCompleted
    @observable timeId
    
    constructor(){
        this.level = 0;
        this.topLevel = 0;
        this.currentLevelGridCells = [];
        this.selectedCellsCount = 0;
        this.isGameCompleted = false;
        this.timerId='';
        
    }
    
    @action.bound
    onCellClick(click){
        if(click){
            this.incrementSelectedCellsCount();
        }
        else{
            setTimeout(()=>{this.resetGame();this.resetSelectedCellsCount();clearTimeout(this.timerId);},50);
        }
    }
    
    @action.bound
    incrementSelectedCellsCount(){
        const {hiddenCellCount} = data[this.level];
     this.selectedCellsCount++;
     if(this.selectedCellsCount === hiddenCellCount){
         clearTimeout(this.timerId);
         setTimeout(()=>{this.goToNextLevelAndUpdateCells();},(100));
     }
    }
    
    @action.bound
    goToNextLevelAndUpdateCells(){
        this.selectedCellsCount = 0;
        if(this.level < maxLevel){
            this.level++;
            console.log('level=',this.level);
            this.setGridCells();     
        }
        else{
            this.isGameCompleted = true;
            this.resetGame();
            this.currentLevelGridCells=[];
        }
    }
    
    @action.bound
    setGridCells(){
        const {hiddenCellCount} = data[this.level];
        clearTimeout(this.timerId);
        this.currentLevelGridCells=[];
        for(let i=0;i<(hiddenCellCount*hiddenCellCount) ;i++){
            this.currentLevelGridCells.push(new CellModel());
        }
        let shuffle= [... this.currentLevelGridCells];
        shuffle.sort(()=> Math.random() - 0.5).slice(0,hiddenCellCount).map(cell=>cell.isHidden=true);
        this.timerId=setTimeout(()=>this.resetGame(),(9000+(3000*this.level)));
    }
    
    
    @action.bound
    goToInitialLevelAndUpdateCells(){
        this.setTopLevel();
        this.setGridCells();
    }
    
    @action.bound
    resetSelectedCellsCount(){
        this.selectedCellsCount = 0;          
        this.goToInitialLevelAndUpdateCells();
    }
    
    
    @action.bound
    onPlayAgainClick(){
        this.isGameCompleted = false;
        this.resetSelectedCellsCount();
    }
    
    @action.bound
    resetGame(){
        this.setTopLevel();
        this.resetSelectedCellsCount();
    }
    
    @action.bound
    setTopLevel(){
        if(this.level > this.topLevel){
            this.topLevel = this.level;
        }
        this.level = 0;
    }
    
}

const gameStore = new GameStore;
export default gameStore;