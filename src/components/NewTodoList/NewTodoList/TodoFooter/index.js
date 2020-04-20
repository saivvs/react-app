import React from 'react';

import { observer } from "mobx-react";

import todoAppStore from '../../../../stores/TodoStores/index';

import {FooterItems,FooterTag,TodosCount,FilterButtons,AllButton,ActiveButton,CompletedButton,ClearCompletedButtonTag,ClearCompletedButton} from './styledComponent';

@observer
class Footer extends React.Component{
    renderFilters=(event)=>{
        todoAppStore.onChangeSelectedFilter(event.target.value);
    }
    render(){
        return(
            <FooterItems>
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
            </FooterItems>
            );
    }
}

export default Footer;