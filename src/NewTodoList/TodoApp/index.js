import React from 'react';
//import {observable,action,reaction} from 'mobx';
import { observer } from "mobx-react";
import {TodoAppTag} from './styledComponent.js';
//import todoAppStore from '../../stores/TodoStores/index.js';
import AddTodo from '../AddTodo/index.js';
import TodoList from '../TodoList/index.js';
import Footer from '../TodoFooter/index.js';
//import Footer from '../Footer/index.js';
@observer
class TodoApp extends React.Component{
    
    
    render(){
        return(
            <TodoAppTag>
                <AddTodo />
                <TodoList />
                <Footer />
            </TodoAppTag>
            );
    }
}

export default TodoApp;