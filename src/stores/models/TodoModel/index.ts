import {observable,action} from 'mobx';

class MobxTodoModel{
    @observable todoTitle
    @observable todoId
    @observable isChecked
    constructor(userInput){
        this.todoId = Math.floor(Math.random()*10000);
        this.todoTitle = userInput;
        this.isChecked = false;
    }
    @action.bound
    onChangeCheckBox(){
        this.isChecked = !(this.isChecked);
    }
}

export default MobxTodoModel;