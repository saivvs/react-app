import React from 'react';
import { observer } from "mobx-react";

import AddTodo from '../AddTodo/index';
import TodoList from '../TodoList/index';
import Footer from '../TodoFooter/index';

import {TodoAppTag} from './styledComponent';


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