import {observable,action,computed} from 'mobx';
import {API_INTIAL,API_FETCHING,API_SUCCESS,API_FAILED} from '@ib/api-constants';
import { bindPromiseWithOnSuccess } from '@ib/mobx-promise';

import MobxTodoModel from '../models/TodoModel/index';



class TodoStores {
    @observable todos
    @observable selectedFilter
    @observable getTodoListAPIStatus
    @observable getTodoListAPIError
    todosAPISerivice
     
    constructor(todoService){
        this.todosAPISerivice = todoService;
        this.intialize();
    }
    
    @action.bound
    intialize(){
        this.getTodoListAPIStatus = API_INTIAL;
        this.getTodoListAPIError = null;
        this.todos = [];
        this.selectedFilter = 'ALL';
    }
    
    @action.bound
    clearStore(){
        this.intialize();
    }
    
    @action.bound
    getTodosAPI(){
        const todoPromise = this.todosAPISerivice.getTodosAPI();
        return bindPromiseWithOnSuccess(todoPromise)
        .to(this.setTodoAPIStatus,this.setTodoAPIResponse)
        .catch(this.setTodoAPIError);
    }
    
    
    @action.bound
    setTodoAPIStatus(apiStatus){
        this.getTodoListAPIStatus = apiStatus;
    }
    
    @action.bound
    setTodoAPIResponse(data){
        //this.todos = data;
    }
    
    @action.bound
    setTodoAPIError(error){
        this.getTodoListAPIError = error;
    }
    @action.bound
    onTodo(userInput){
        this.push(new MobxTodoModel(userInput));
            //this.filteredTodosFromAllTodos();
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
//const todoAppStore = new TodoStores();
//export default todoAppStore ;
export default TodoStores;