import React from 'react';
import {action} from 'mobx';
import { observer } from "mobx-react";
import Todo from '../Todo/index';
import todoAppStore from '../../../../stores/TodoStores/index';
import {TodoListTag} from './styledComponent';
type todoProps={
    todoId:any
}
@observer
class TodoList extends React.Component<todoProps>{
    render(){
        return(
            <TodoListTag>
            {todoAppStore.fiteredTodosFromAllTodos.map(eachTodo=><Todo   eachToDo={eachTodo}  key={(eachTodo.todoId)} />)}
            </TodoListTag>
            );
    }
}
export default TodoList;