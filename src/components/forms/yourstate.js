/**/
import React from 'react';
class YourState extends React.Component{
    constructor(props){
        super(props);
        this.state={
            selectedState:'',
            submittedState:''
        };
    }
    handleChangeState = (e) =>{
        let state = e.target.value;
        this.setState({
            selectedState:state
        });
        console.log(e.target.value);
    }
    handleSubmit = (e) =>{
        let submittedState = this.state.selectedState;
        this.setState({
            submittedState: ` I am from ${submittedState}`
        });
    }
    displayMessage = () =>{
       return (
           <div>{this.state.submittedState}</div>
           );
    }
    render(){
        return(
            <div>
            <select onChange={this.handleChangeState}>
            <option value='Your State'>Your State</option>
            <option value='Andhra Pradesh'>Andhra Pradesh</option>
            <option value='Telegana'>Telegana</option>
            <option value='Kolakata'>Kolakata</option>
            <option value='Kerala'>Kerala</option>
            <option value='Tamil Naidu'>Tamil Naidu</option>
            </select>
            <button onClick={this.handleSubmit}>Submit</button>
            <span>{this.displayMessage()}</span>
            </div>
            );
    }
}
export{YourState};