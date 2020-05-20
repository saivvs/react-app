import React,{Component} from 'react';
import {observer} from 'mobx-react';
import {observable} from 'mobx';
import {withToggle} from '../../hocs/withToggle';
import {ViewEditToggleBlock,Heading,InputTagWithCancelButton,InputTag,CancelButton,StringWithEditButton,StringTag,EditButton} from './styledComponents.js';


@observer
class ViewEditToggle extends Component{
    @observable text='Click on the edit button to start editin';
    
    onClickEditOrCancelButton=()=>{
        const{onHandleToggleStatus} = this.props;
        onHandleToggleStatus();
    }
    
    hadleInputTagValue=(event)=>{
        this.text = event.target.value;
    }
    render(){
        const {toggleStatus} = this.props;
        return(
            <ViewEditToggleBlock>
            <Heading>ViewEditToggle</Heading>
            {toggleStatus?
            <InputTagWithCancelButton>
                <InputTag type="text" onChange={this.hadleInputTagValue} value={this.text}></InputTag>
                <CancelButton onClick={this.onClickEditOrCancelButton}>Cancel</CancelButton>
            </InputTagWithCancelButton>:
            <StringWithEditButton>
                <StringTag>{this.text}</StringTag>
                <EditButton onClick={this.onClickEditOrCancelButton}>Edit</EditButton>
            </StringWithEditButton>
            }
            </ViewEditToggleBlock>
            );
    }
}

//export {ViewEditToggle};
export default withToggle(ViewEditToggle);


