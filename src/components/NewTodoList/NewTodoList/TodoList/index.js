import React from 'react';

import { observer } from "mobx-react";
import Todo from '../Todo/index';

import {TodoListTag} from './styledComponent';

@observer
class TodoList extends React.Component{
    render(){
        const {todos,onRemoveTodo}=this.props;
        return(
            <TodoListTag>
            {todos.map(eachTodo=><Todo onRemoveTodo={onRemoveTodo} eachToDo={eachTodo}  key={(eachTodo.id)} />)}
            </TodoListTag>
            );
    }
}
export default TodoList;