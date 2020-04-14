import React from 'react';
import {observable} from 'mobx';
import { observer } from "mobx-react";

import './index.css';
let duplicateListOfTodo =[];
let lengthOfTodoList = 0;
@observer
class Todo extends React.Component{
    @observable checked = this.props.checked
    @observable disable = false
    @observable todoClassName = 'notDisable'
     todoCheckedOrNot = (event) => {
        if(this.checked === false){
        this.checked= true,
        this.disable= true,
        this.todoClassName= 'disable';
        }
        else{
        this.checked= false,
        this.disable= false,
        this.todoClassName= 'notDisable';
        }
        this.props.updatingCheckBox(event.target.checked,this.props.id);
    }
    render(){
        return(
            <div className='todo'>
            <input type='checkbox' className='todo-list-checkbox' onClick={this.todoCheckedOrNot}></input>
            <input type='text' className={this.todoClassName} placeholder='enter todo' disabled={this.disable} defaultValue={this.props.value}></input>
            <button className='todo-delete' id={this.props.id} onClick={this.props.onRemove}>X</button>
            </div>
            );
    }
}
@observer
class Footer extends React.Component{
    @observable activeTodos = 0
     filterButton = (filterType) =>{
        {this.props.displayFooterFunction(filterType)}
    }
    render(){
        let activeItemsLeft = 0;
        duplicateListOfTodo.filter(items =>{
            if(items.checked === false){
                activeItemsLeft += 1;
            }
        });
        if(duplicateListOfTodo.length >0){
        return(
             <div className="footer" id='footer'>
        <div>
          <div className="task-count" id='todoPresences'>
          {activeItemsLeft} items left
          </div>
        </div>
        <div>
          <button className="footer-buttons" onClick={()=>this.filterButton('All')}>All</button>
          <button className="footer-buttons" onClick={()=>this.filterButton('active')} id='activeTodos'>Active</button>
          <button className="footer-buttons" onClick={()=>this.filterButton('completed')} id='completedTodos'>Completed</button>
        </div>
        <div>
          <button className="footer-buttons clear-completed-todos" onClick={()=>this.filterButton('clearCompleted')}>Clear Completed</button>
        </div>
      </div>
        );
    }
    else{
        return(null); 
    }
    }
}

@observer
class TodoList extends React.Component{
    @observable listOfTodos = null
    @observable footer = false
     addTodoToTodoList = (event) =>{
        let enterTodo = event.target.value;
        if(event.keyCode === 13){
        if(enterTodo.match("[a-zA-Z0-9]+")!==null){
          let lengthOfDuplicateList = duplicateListOfTodo.length;
           if(lengthOfDuplicateList === 0){
              duplicateListOfTodo.push({
                  id:1,
                  value:enterTodo,
                  checked:false,
                });
         }
         else{
            let lastTodoId = duplicateListOfTodo[lengthOfDuplicateList-1].id;
               duplicateListOfTodo.push({
                 id:lastTodoId+1,
                 value:enterTodo,
                 checked:false,
                });
        }
            this.listOfTodos=duplicateListOfTodo;
            event.target.value = "";
        }
        else{
            alert('Enter Some Text');
            }
            }
    }
     checkboxUpdating = (expression,id) =>{
        let updateCheckBox = duplicateListOfTodo.map(items =>{
            if(items.id === id){
                items.checked = expression;
            }
        });
        this.duplicateListOfTodo=updateCheckBox;
        }
     renderTodoList = () =>{
            let formTodo = this.state.listOfTodos.map(item=><Todo updatingCheckBox={this.checkboxUpdating}key={item.id} id={item.id} value={item.value} checked={item.checked} onRemove={this.removeTodoFromTodoList}/>);
            return formTodo;
    }
     removeTodoFromTodoList = (event) => {
      let remainingTodos = this.listOfTodos.filter((items)=>items.id!=parseInt(event.target.id));
      duplicateListOfTodo = remainingTodos;
      this.listOfTodos=remainingTodos;
    }
     displayFooter = (type) =>{
        switch(type){
            case "All":{
                this.listOfTodos= duplicateListOfTodo;
                break;}
            case "active":{
                let ActiveItems = duplicateListOfTodo.filter(items =>{
                    return items.checked === false;
                });
                this.listOfTodos= ActiveItems;
                console.log(this.state.listOfTodos);
                console.log(duplicateListOfTodo);
                break;}
            case "completed":{
                let CompletedItems = duplicateListOfTodo.filter(items =>{
                    return items.checked === true;
                });
                this.listOfTodos= CompletedItems;
                console.log(this.state.listOfTodos);
                console.log(duplicateListOfTodo);
                break;
            }
            case "clearCompleted":{
                let clearCompleted = duplicateListOfTodo.filter(items => {
                    return items.checked === false;
                });
                duplicateListOfTodo = clearCompleted;
                this.listOfTodos=clearCompleted;
                break;
            }
        }
     }
    render(){
        return(
            <div className='todo-heading'>
            <span>todos</span>
            <input type='text'  onKeyDown={this.addTodoToTodoList} className="create-todo-input-tag" placeholder='What needs to be done?'></input>
            <div> {this.renderTodoList()}</div>
            <div><Footer displayFooterFunction={this.displayFooter} todosCount={lengthOfTodoList}/></div>
            </div>
        );
    }
    
    }
/*@observer
class A extends React.Component{
    
   
    render(){
        return(
            <div>
            <Provider temp='hello'>
                <B/>
                </Provider>
            </div>
            );
    }
}

@inject ('temp')
@observer
class B extends React.Component{
    @observable name
    onChange=(event)=>{
        this.name=event.target.value;
    }
    render(){
        //const {temp} = this.props;
        return(
            <div>
                <input type='text' style={{background: 'green'}} onChange={this.onChange}/>
                <C name={this.name}/>
            </div>
            );
    }
}
@inject ('temp')
class C extends React.Component{
    render(){
        const {temp,name} = this.props;
         console.log("C",temp,name);
        return(
            <div>
                <D/>
            </div>
            );
    }
}
@inject ('temp')
class D extends React.Component{
    render(){
        const {temp} = this.props;
        console.log("D",temp);
        return(
            <div >
                {temp}
            </div>
            );
    }
}

export default A;*/