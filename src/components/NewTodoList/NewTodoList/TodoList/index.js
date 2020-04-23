import React from 'react';

import { observer } from "mobx-react";
import Todo from '../Todo/index';

import {TodoListTag} from './styledComponent';

@observer
class TodoList extends React.Component{
    render(){
        const {todos,onRemoveTodo,onTodo}=this.props;
        //console.log('todolist',todos);
        return(
            <TodoListTag>
            {todos.map(eachTodo=><Todo onTodo={onTodo} onRemoveTodo={onRemoveTodo} eachToDo={eachTodo}  key={(eachTodo.id)} />)}
            </TodoListTag>
            );
    }
}
export default TodoList;