import React from 'react';
class Disable extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            checked:'',
        };
    }
    handleCheckboxClick=()=>{
        if(this.state.checked){
            this.setState({
            checked:false,
        });
        }
        else{
        this.setState({
            checked:true,
        });
        }
    }
    displayMessage=()=>{
    if(this.state.checked){
        return(
            <div>I am Disabled</div>
            );
    }
    else if(this.state.checked===false){
        return(
            <div>I am an Anabled</div>
            );
    }
    else{
        return(
            <div></div>
            )
    }
    }
    render(){
        return(
            <div>
            <form >
            <input onChange={this.handleCheckboxClick} type="checkbox" name="Diasble"></input>
            <label for="Diasble">Disable</label>
            </form>
            <button onClick='handleSubmit' disabled={this.state.checked}>Clickme</button>
            <span>{this.displayMessage()}</span>
            </div>
            );
    }
}
export{Disable};