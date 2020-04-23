import {observable,action} from 'mobx';

class MobxTodoModel{
    @observable todoTitle
    @observable todoId
    @observable isChecked
    constructor(userInput){
        this.id = Math.floor(Math.random()*10000);
        this.title = userInput;
        this.completed = false;
    }
    @action.bound
    onChangeCheckBox(){
        this.completed = !(this.completed);
    }
}

export default MobxTodoModel;