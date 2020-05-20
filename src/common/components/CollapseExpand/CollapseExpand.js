import React,{Component} from 'react';
import {observer} from 'mobx-react';
import {observable} from 'mobx';

import {withToggle} from '../../hocs/withToggle';

import {CollapseExpandBlock,Heading,ShoppingList,CollapseButtonWithList,CollapseButton,List,Items,ExpandButton} from './styledComponents.js'
@observer
class CollapseExpand extends Component{
    @observable isExpand;
    
    
    onHandleCollapseAndExpandButtons=()=>{
        const {onHandleToggleStatus} = this.props;
        onHandleToggleStatus();
        this.changingTheToggleStatus();
    }
    
    changingTheToggleStatus=()=>{
        const {toggleStatus} = this.props;
        this.isExpand = toggleStatus;
    }
    render(){
        
        return(
            <CollapseExpandBlock>
                <Heading>CollapseExpand</Heading>
                <ShoppingList>
                Sample Shopping List:
                {this.isExpand?
                    <CollapseButtonWithList>
                        <CollapseButton onClick={this.onHandleCollapseAndExpandButtons}>Collapse</CollapseButton>
                        <List>
                            <Items>Eggs</Items>
                            <Items>Bread</Items>
                        </List>
                    </CollapseButtonWithList>
                    :<ExpandButton onClick={this.onHandleCollapseAndExpandButtons}>Expand</ExpandButton>
                }   
                </ShoppingList>
            </CollapseExpandBlock>
            ) ;
    }
}

export default withToggle(CollapseExpand);