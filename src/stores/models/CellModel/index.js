import {observable} from 'mobx';

class CellModel{
    @observable id
    @observable isHidden
    
    
    constructor(){
        this.id = Math.floor(Math.random()*10000);
        this.isHidden = false;
    }
}

export default CellModel;