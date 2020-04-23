import React from 'react';

import { observer } from "mobx-react";

import AddTodo from '../AddTodo/index';
import TodoList from '../TodoList/index';
import Footer from '../TodoFooter/index';

import {TodoAppTag,TodoAppSubTag} from './styledComponents';
import NoDataView from '../../../common/NoDataView';

@observer
class RenderTodos extends React.Component{
    
    render(){
        const {todoStore} = this.props;
        const{filteredTodosFromAllTodos,onRemoveTodo,lengthOfTodos,onChangeSelectedFilter,onTodo} = todoStore;
       return(
            <TodoAppTag>
        <AddTodo onTodo={onTodo} />
        {(filteredTodosFromAllTodos.length === 0)?<NoDataView/>:
        <TodoAppSubTag>
        <TodoList todos={filteredTodosFromAllTodos} onRemoveTodo={onRemoveTodo}/>
        <Footer lengthOfTodos={lengthOfTodos} onChangeSelectedFilter={onChangeSelectedFilter}/>
       </TodoAppSubTag>}
       </TodoAppTag>
           
           );
    }
}

export default RenderTodos;