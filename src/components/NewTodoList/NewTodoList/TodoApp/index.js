/*global fetch*/
import React from 'react';
import { observer } from "mobx-react";
import {observable,action} from 'mobx';

import todoAppStore from '../../../../stores/TodoStores/index';

import AddTodo from '../AddTodo/index';
import TodoList from '../TodoList/index';
import Footer from '../TodoFooter/index';
import Loading from '../Loading';

import {TodoAppTag,NoDataFound} from './styledComponent';


@observer
class TodoApp extends React.Component{
   
    
    render(){
        const{filteredTodosFromAllTodos,isResponse,isErrorOccur,onRemoveTodo,lengthOfTodos} = todoAppStore;
        
        return(
            <TodoAppTag>
                
                {isResponse?<AddTodo />:<Loading/>}
                {lengthOfTodos<1?<NoDataFound>
                        NoDataFound
                </NoDataFound>:
                <TodoList todos={filteredTodosFromAllTodos} onRemoveTodo={onRemoveTodo} />}
                {isResponse||isErrorOccur?<Footer />:null}
                {/*{isResponse?<TodoList todos={filteredTodosFromAllTodos} onRemoveTodo={onRemoveTodo} />:<Loading/>}
                {isErrorOccur?<ErrorOccur/>:<Footer />}*/}
            </TodoAppTag>
            );
    }
}

export default TodoApp;