//listed cities component
//checkwith label component
import React from 'react';
class CheckboxWithLabel extends React.Component{
    render(){
        const {id,label, handleCheckboxClick} = this.props;
        return(
            <form>
            <input type='checkbox' id={id} onChange={handleCheckboxClick} value={label}></input>
            <label for={label}>{label}</label>
            </form>
            );
    }
}

export{CheckboxWithLabel};