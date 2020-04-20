import {observable,action} from 'mobx';

class MobxTodoModel{
    @observable todoTitle
    @observable todoId
    @observable isChecked
    constructor(userInput){
        this.idd = Math.floor(Math.random()*10000);
        this.title = userInput;
        this.isCompleted = false;
    }
    @action.bound
    onChangeCheckBox(){
        this.isCompleted = !(this.isCompleted);
    }
}

export default MobxTodoModel;