import React,{Component} from 'react';

import {InputElementTag} from './styledComponents.js';
class InputElement extends Component{
    render(){
        const {type,placeholder,defaultValue,onChangeHandler} = this.props;
        return (
            <InputElementTag type={type}  placeholder={placeholder} defaultValue={defaultValue} onChange={onChangeHandler} ></InputElementTag>
            );
    }
}


export {InputElement};