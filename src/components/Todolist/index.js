import React from 'react';
import './index.css';
let duplicateListOfTodo =[];
let lengthOfTodoList = 0;
class Todo extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            checked : this.props.checked,
            disable: false,
            todoClassName: 'notDisable',
        };
    }
    todoCheckedOrNot = (event) => {
        console.log(this.state.checked);
        if(this.state.checked === false){
            console.log('hi');
        this.setState({
            checked: true,
            disable: true,
            todoClassName: 'disable',
        });
        }
        else{
        this.setState({
            checked: false,
            disable: false,
            todoClassName: 'notDisable',
        });
        }
        console.log(event.target.checked);
        this.props.updatingCheckBox(event.target.checked,this.props.id);
    }
    render(){
        return(
            <div className='todo'>
            <input type='checkbox' className='todo-list-checkbox' onClick={this.todoCheckedOrNot}></input>
            <input type='text' className={this.state.todoClassName} placeholder='enter todo' disabled={this.state.disable} defaultValue={this.props.value}></input>
            <button className='todo-delete'  id={this.props.id} onClick={this.props.onRemove}>❌</button>
            </div>
            );
    }
}
class Footer extends React.Component{
    constructor(props){
        super(props);
        this.state = {
          activeTodos: 0,
        };
    }
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
             <div class="footer" id='footer'>
        <div>
          <div class="task-count" id='todoPresences'>
          {activeItemsLeft} items left
          </div>
        </div>
        <div>
          <button class="footer-buttons" onClick={()=>this.filterButton('All')}>All</button>
          <button class="footer-buttons" onClick={()=>this.filterButton('active')} id='activeTodos'>Active</button>
          <button class="footer-buttons" onClick={()=>this.filterButton('completed')} id='completedTodos'>Completed</button>
        </div>
        <div>
          <button class="footer-buttons clear-completed-todos" onClick={()=>this.filterButton('clearCompleted')}>Clear Completed</button>
        </div>
      </div>
        );
    }
    else{
        return(null); 
    }
    }
}
class TodoList extends React.Component{
    constructor(props){
        super(props);
        this.state = {
           listOfTodos : [],
           footer : false,
        };
    }
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
    this.setState({
        listOfTodos:duplicateListOfTodo,
    });
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
        this.setState({
            duplicateListOfTodo:updateCheckBox,
        })
        console.log(duplicateListOfTodo);
    }

    renderTodoList = () =>{
            let formTodo = this.state.listOfTodos.map(item=><Todo updatingCheckBox={this.checkboxUpdating}key={item.id} id={item.id} value={item.value} checked={item.checked} onRemove={this.removeTodoFromTodoList}/>);
            return formTodo;
    }
    removeTodoFromTodoList = (event) => {
      let remainingTodos = this.state.listOfTodos.filter((items)=>items.id!=parseInt(event.target.id));
      duplicateListOfTodo = remainingTodos;
      this.setState({
            listOfTodos:remainingTodos,
        });
    }
    displayFooter = (type) =>{
        switch(type){
            case "All":
                this.setState({
                    listOfTodos: duplicateListOfTodo
                });
                break;
            case "active":
                let ActiveItems = duplicateListOfTodo.filter(items =>{
                    return items.checked === false;
                });
                this.setState({
                    listOfTodos: ActiveItems
                });
                console.log(this.state.listOfTodos);
                console.log(duplicateListOfTodo);
                break;
            case "completed":
                let CompletedItems = duplicateListOfTodo.filter(items =>{
                    return items.checked === true;
                });
                this.setState({
                    listOfTodos: CompletedItems
                });
                console.log(this.state.listOfTodos);
                console.log(duplicateListOfTodo);
                break;
            case "clearCompleted":
                let clearCompleted = duplicateListOfTodo.filter(items => {
                    return items.checked === false;
                });
                duplicateListOfTodo = clearCompleted;
                this.setState({
                    listOfTodos:clearCompleted,
                });
                break;
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
export{TodoList};