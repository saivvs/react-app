import React from 'react';
import {observable,action} from 'mobx';
import { observer } from "mobx-react";
import Todo from '../Todo/index.js';
import todoAppStore from '../../stores/TodoStores/index.js';
@observer
class TodoList extends React.Component{
    
    @action.bound
    renderTodoList(){
        let todo =todoAppStore.todos.map(eachTodo=><Todo value={eachTodo.value} id={eachTodo.id} checked={eachTodo.checked}/>);
        console.log(todo);
        return todo;
        /*this.state.listOfTodos.map(item=><Todo updatingCheckBox={this.checkboxUpdating}key={item.id} id={item.id} value={item.value} checked={item.checked} onRemove={this.removeTodoFromTodoList}/>);*/
    }
    render(){
        return(
            <div>
            {this.renderTodoList()}
            </div>
            );
    }
}
export default TodoList;