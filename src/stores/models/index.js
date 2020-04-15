import React from 'react';
import {observable} from 'mobx';
import { observer } from "mobx-react";
import TodoStores from '../TodoStores/index';
@observer
class Todo extends React.Component{
    @observable id = TodoStores.todos.length+1
    @observable title = 'title'
    @observable isCompleted = false;
    
    
    constructor(){
            this.id = 1;
        this.title = 'title'; 
    }
    
    onCompletedTodo(){
        
    }
    
    onUpdateTodoTitle(){
        
    }
}
export default Todo;