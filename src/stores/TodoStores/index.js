import {observable,action,reaction,computed} from 'mobx';

import MobxTodoModel from '../models/TodoModel/index.js';

class TodoStores {
    @observable todos=[];
    @observable selectedFilter = 'ALL';
    
    
    @action.bound
    onTodo(userInput){
        this.todos.push(new MobxTodoModel(userInput));
    }
    @action.bound
    onRemoveTodo(todo){
        console.log('remove',todo);
        console.log(this.todos);
        let remainingTodos=this.todos.filter((eachtodo)=>eachtodo.todoId !== todo);
        console.log('remaining',remainingTodos);
        this.todos=remainingTodos;
    }
    @action.bound
    onChangeSelectedFilter(type){
        this.selectedFilter = type;
    }
    @computed
    get fiteredTodosFromAllTodos(){
        let filterTodos = [];
        switch(this.selectedFilter){
            case "All":{
                 filterTodos = this.todos.filter(items=>{return items});
                 break;
            }
            case "Active":{
                 filterTodos = this.todos.filter(items =>{
                    return items.isChecked === false;
                });
                break;
            }
            case "Completed":{
                 filterTodos = this.todos.filter(items =>{
                    return items.isChecked === true;
                });
                break;
            }
            default:{
                 filterTodos = this.todos.filter(items=>{return items});
                 break;
              }
        }
        //console.log(filterTodos);
        return filterTodos;
    }
    @action.bound
    onClearCompleted(type){
        
    }
    @computed
    get lengthOfTodos(){
        let countOfTodos = this.todos.length;
        //console.log(countOfTodos);
        return countOfTodos;
    }
}
const todoAppStore = new TodoStores();
export default todoAppStore ;