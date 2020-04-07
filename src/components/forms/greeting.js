/*global React*/
import React from 'react';
class Greetings extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            userInputText:"",
            displayName:"",
        };
    }
    handleUserInput = (event) =>{
        this.setState({
            userInputText: event.target.value,
        });
    }
    handleSubmit = (event) => {
        let userText = this.state.userInputText;
        this.setState({
            displayName: userText,
            userInputText:'',
        });
        event.preventDefault();
    }
    displayMessage = () =>{
        if(this.state.displayName !== ""){
        let message = `Hello ${this.state.displayName}`;
        return message;
        }
        
    }
    render(){
        return(
            <div>
            <form onSubmit = {this.handleSubmit}>
            <input placeholder='Enter name' value={this.state.userInputText}onChange={this.handleUserInput}className="fromInputTag"></input>
            <button className="formButton" type="submit">Greet</button>
            </form>
            <span>{this.displayMessage()}</span>
            </div>
            );
    }
}

export {Greetings};
// handleUserInput
//         - handleSubmit
//         - displayMessage
//     * State variables
//         - userInputText
//         - displayName