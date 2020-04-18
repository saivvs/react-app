import React from 'react';
import {observable,action} from 'mobx';
import {observer} from 'mobx-react';
import { Animated} from 'react-animated-css';

import {CellTag,DisplayCellTag,ShowCellTag,DisplayErrorCellTag} from './styledComponents.js';


@observer
class Cell extends React.Component{
    @observable shouldShowHiddenCells
    @observable isClickedOnCell
    @observable disable
    
    constructor(props){
        super(props);
        this.shouldShowHiddenCells = this.props.eachCell.isHidden;
        this.isClickedOnCell = false;
        this.disable = 'none';
    }
    @action.bound
    onCellClick(){
        const {eachCell,onCellClick} = this.props;
        const {isHidden} = eachCell;
            if(!this.isClickedOnCell){
                this.isClickedOnCell = !this.isClickedOnCell;
                this.shouldShowHiddenCells = this.isClickedOnCell;
                onCellClick(isHidden);
            }
    }
    @action.bound
    componentDidMount(){
        const{level}=this.props;
        setTimeout(()=>(this.shouldShowHiddenCells=false,this.disable = 'auto'),(3000+(1000*level)));
    }
    render(){
            const {eachCell,cellWidth,selectedTheme}=this.props;
            const {isHidden} = eachCell;
            
            if(isHidden){
                if(this.isClickedOnCell&&this.shouldShowHiddenCells){
                
                    return(
                        <Animated key={Math.random()} animationIn="zoomIn" animationOut="zoomIn" animationInDuration='300'  isVisible={true} >
                        <ShowCellTag cellWidth={cellWidth} selectedTheme={selectedTheme} disable={this.disable}>
                        </ShowCellTag>
                        </Animated>
                        );
                }
                else{
                    return(
                   <Animated key={Math.random()} animationIn="zoomIn" animationInDuration= '300' isVisible={true} >
                    <DisplayCellTag onClick={this.onCellClick} cellWidth={cellWidth} selectedTheme={selectedTheme} disable={this.disable} hide={this.shouldShowHiddenCells}>
                    </DisplayCellTag>
                    </Animated>
                    );    
                }
            }
            else{
                if(!isHidden && this.shouldShowHiddenCells){
                        return(
                            <Animated key={Math.random()} animationIn="shake" animationOut="shake" animationInDuration='5000' animationOutDuration='5000' isVisible={true}>
                            <DisplayErrorCellTag cellWidth={cellWidth} hide={this.shouldShowHiddenCells} selectedTheme={selectedTheme} disable={this.disable}>
                            </DisplayErrorCellTag>
                            </Animated>
                            );
                    }
                    else{
                        return(
                    <CellTag onClick={this.onCellClick} cellWidth={cellWidth} selectedTheme={selectedTheme} disable={this.disable}>
                    </CellTag>
                            );
                    }
                
            }
    }
}

export default Cell;