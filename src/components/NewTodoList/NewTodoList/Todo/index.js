import React from 'react';
import { observer } from "mobx-react";

import {TodosTag,TodoTag,TodoInput,TodoCheckBox,RemoveButton} from './styledComponent';

@observer
class Todo extends  React.Component{
    
    onCompltedTodo=(completed)=>{
        
    }
    
    onRemoveTodo=(event)=>{
        
    }
    
    onUpdateTodoTitle(){
        
    }
    render(){
        const{eachToDo}=this.props;
        const {title,completed} = eachToDo;
        console.log(completed);
        return(
            <TodosTag>
            <TodoTag>
                <TodoCheckBox  type='checkbox' onClick={this.onCompltedTodo(completed)} defaultchecked={completed}/>
                <TodoInput type='text' defaultValue={title} checked={completed} disabled={completed}/>
                <RemoveButton >❌</RemoveButton>
            </TodoTag>
            </TodosTag>
            );
    }
}
export default Todo;
