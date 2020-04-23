import React from 'react';
import {observable,action} from 'mobx';
import { observer } from "mobx-react";

//import todoAppStore from '../../../../stores/TodoStores/index';

import {AddTodoTag,TodoHeading,TodoEnter} from './styledComponent';


@observer
class AddTodo extends React.Component{
    @observable todoTitle = ''
    
    @action.bound
    onAddTodo(){
        const{onTodo}=this.props;
        onTodo(this.todoTitle);
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