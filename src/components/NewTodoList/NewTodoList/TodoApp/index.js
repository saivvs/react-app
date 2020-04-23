import React from 'react';
import { observer,inject } from "mobx-react";

import LoadingWrapperWithFailure from '../../../common/LoadingWrapperWithFailure';


import RenderTodos from '../RenderTodos';




@inject('todoStore')
@observer
class TodoApp extends React.Component{
   
   componentDidMount(){
       this.doNetworkCalls();
   }
   
   doNetworkCalls=()=>{
       this.getTodoStore().getTodosAPI();
   }
   
   getTodoStore=()=>{
       return this.props.todoStore;
   }
   
   renderTodoList=()=>{
       const  todoStore  = this.getTodoStore();
       return(
           <RenderTodos 
           todoStore={todoStore}
           />
           );
   }
    
    render(){
        const {getTodoListAPIStatus,getTodoListAPIError} = this.getTodoStore();
        return(
                <LoadingWrapperWithFailure
                    apiStatus={getTodoListAPIStatus}
                    apiError = {getTodoListAPIError}
                    onRetryClick = {this.doNetworkCalls}
                    renderSuccessUI = {this.renderTodoList}
                />
            );
    }
}

export default TodoApp;