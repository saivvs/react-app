import React from 'react';
import {observable,action} from 'mobx';
import { observer } from "mobx-react";
import {AddTodoTag,TodoHeading,TodoEnter} from './styledComponent.js';
import todoAppStore from '../../stores/TodoStores/index.js';

@observer
class AddTodo extends React.Component{
    @observable todoTitle = ''
    
    @action.bound
    onAddTodo(){
        todoAppStore.onTodo(this.todoTitle);
    }
    @action.bound
    onChangeInput(e){
        this.todoTitle = e.target.value;
        if(e.keyCode===13){
            this.onAddTodo();
            e.target.value = '';
        }
    }
    render(){
        return(
            <AddTodoTag>
                <TodoHeading>todos</TodoHeading>
                <TodoEnter type='text' onKeyDown={this.onChangeInput}/>
            </AddTodoTag>
            );
    }
}
export default AddTodo;