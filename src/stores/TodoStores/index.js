/*global fetch*/

import {observable,action,computed} from 'mobx';

import MobxTodoModel from '../models/TodoModel/index';

class TodoStores {
    @observable todos=[];
    @observable selectedFilter = 'ALL';
    @observable isResponse
    @observable timerId 
    @observable todosFromServer 
    @observable isErrorOccur
    
    constructor(){
        this.intialize(),
        this.todosFromServer = [],
        this.timerId = '';
        this.isResponse = false;
        this.isErrorOccur = false;
    }
    
    getTodosData=()=>{
        fetch('https://jsonplaceholder.typicode.com/todos')
        .then(response=>{
            if(response.ok){
                return response.json();
            }
            else{
                return Promise.reject;
            }
        })
        .then(data=>{this.makeTodoListFromServer(data)})
        .catch(error=>{this.errorOccur});
    }
    
    @action.bound
    makeTodoListFromServer(data){
        this.todosFromServer = data;
        this.todos = data;
        this.isResponse = true;
    }
    
    @action.bound
    errorOccur(){
        this.isErrorOccur = true;
    }
    componentDidMount=()=>{
     clearTimeout(this.timerId);   
    }
    
    intialize=()=>{
        this.timerId=setTimeout(this.getTodosData,15000);
    }
    @action.bound
    onTodo(userInput){
        this.todos.push(new MobxTodoModel(userInput));
    }
    
    
    
    @action.bound
    onRemoveTodo(todo){
        
    }
    
    
    
    
    @action.bound
    onChangeSelectedFilter(type){
        this.selectedFilter = type;
    }
    
    @computed
    get filteredTodosFromAllTodos(){
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