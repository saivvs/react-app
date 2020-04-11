import React from 'react';
import {observable,action,reaction} from 'mobx';
import { observer } from "mobx-react";
import {TodoAppTag} from './styledComponent.js';
import todoAppStore from '../../stores/TodoStores/index.js';
import AddTodo from '../AddTodo/index.js';
import TodoList from '../TodoList/index.js';
import {FooterTag,TodosCount,FilterButtons,AllButton,ActiveButton,CompletedButton,ClearCompletedButtonTag,ClearCompletedButton} from './styledComponent.js';

@observer
class Footer extends React.Component{
    renderFilters=(event)=>{
        todoAppStore.onChangeSelectedFilter(event.target.value);
    }
    render(){
        return(
            <FooterTag>
                <TodosCount>
                    {todoAppStore.lengthOfTodos}
                </TodosCount>
                <FilterButtons>
                    <AllButton onClick={this.renderFilters} value='All'>All</AllButton>
                    <ActiveButton onClick={this.renderFilters} value='Active'>Avtive</ActiveButton>
                    <CompletedButton onClick={this.renderFilters} value='Completed'>Completed</CompletedButton>
                </FilterButtons>
                <ClearCompletedButtonTag>
                    <ClearCompletedButton>ClearCompleted</ClearCompletedButton>
                </ClearCompletedButtonTag>
            </FooterTag>
            );
    }
}

export default Footer;