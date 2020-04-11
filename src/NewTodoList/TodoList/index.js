import React from 'react';
import {action} from 'mobx';
import { observer } from "mobx-react";
import Todo from '../Todo/index.js';
import todoAppStore from '../../stores/TodoStores/index.js';
import {TodoListTag} from './styledComponent.js';
@observer
class TodoList extends React.Component{
    render(){
        return(
            <TodoListTag>
            {todoAppStore.fiteredTodosFromAllTodos.map(eachTodo=><Todo   eachToDo={eachTodo}  key={eachTodo.todoId} />)}
            </TodoListTag>
            );
    }
}
export default TodoList;