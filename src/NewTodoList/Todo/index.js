import React from 'react';
import {action} from 'mobx';
import { observer } from "mobx-react";
import {TodoTag,TodoInput,TodoCheckBox,RemoveButton} from './styledComponent.js';
import todoAppStore from '../../stores/TodoStores/index.js';
import MobxTodoModel from '../../stores/models/TodoModel/index.js';
@observer
class Todo extends  React.Component{
    
    onCompltedTodo=()=>{
        const {eachToDo}=this.props;
       eachToDo.onChangeCheckBox(); 
    }
    
    onRemoveTodo=(event)=>{
        //console.log(event.target.id);
     todoAppStore.onRemoveTodo(event.target.id);
    }
    
    onUpdateTodoTitle(){
        
    }
    render(){
        const{eachToDo}=this.props;
        //console.log(eachToDo.todoId);
        return(
            <TodoTag>
                <TodoCheckBox  type='checkbox' onChange={this.onCompltedTodo} checked={eachToDo.isChecked}/>
                <TodoInput type='text' defaultValue={eachToDo.todoTitle} />
                <RemoveButton onClick={this.onRemoveTodo} id={eachToDo.todoId}>❌</RemoveButton>
            </TodoTag>
            );
    }
}
export default Todo;
