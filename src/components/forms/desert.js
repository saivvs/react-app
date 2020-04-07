/*global React*/
import React from 'react';
// * Methods
//         - handleUserInput
//         - handleSubmit
//         - displayMessage
//         - renderDessertOptions
//     * State variables
//         - selectedDessert
//         - favoriteDessert
//     * Props
//         - dessertList
class FavouriteDesert extends React.Component{
    constructor(props){
             super(props);
        this.state = {
            selectedDessert:"",
            favoriteDessert:"",
            showMessage: false
        };
    }
    handleUserInput=(event)=>{
        let userInput = event.target.value;
      
        this.setState({
            selectedDessert : userInput,
            showMessage: false
        });
    }
    handleSubmit = (event) =>{
        let interstedDessert = this.state.selectedDessert;
        this.setState({
            favoriteDessert: interstedDessert,
            showMessage: true
        });
        console.log(interstedDessert);
    }

    renderDessertOptions = () =>{
        if(this.state.showMessage === true ){
         return(
             `My Favourite Desert is ${this.state.favoriteDessert}`
             );   
        }
        else
        {
            return(
             null
             );
        }
         
    }
    render(){
        return(
            <div>
            <h4>What is your FavouriteDesert?</h4>
            <form>
            <input type="radio" value="Vanilla" name="Desert" onChange={this.handleUserInput}></input>
            <label for="Vanilla">Vanilla</label><br/>
            <input type="radio" value="Gulab Jamum" name="Desert" onChange={this.handleUserInput}></input>
            <label for="Gulab Jamum">Gulab Jamum</label><br/>
            <input type="radio" value="Yoghurt Pots" name="Desert" onChange={this.handleUserInput}></input>
            <label for="Yoghurt Pots">Yoghurt Pots</label><br/>
            <input type="radio" value="Baked Banana" name="Desert" onChange={this.handleUserInput}></input>
            <label for="Baked Banana">Baked Banana</label><br/>
            <input type="radio" value="Chocolate" name="Desert" onChange={this.handleUserInput}></input>
            <label for="Chocolate">Chocolate</label><br/>
            </form>
            <button onClick = {this.handleSubmit}>Make your choice</button><br/>
            <span>{this.renderDessertOptions()}</span>
            </div>
            );
    }
}

{/*

["Vanilla", "Butterscotch", "Gulab Jamum", "Yoghurt Pots", "Baked Banana", "Chocolate"]
class ParentCounter extends React.Component{
        state = {
            parentCounter: 0,
        };
    onParentCounterIncreament = () =>{
        this.setState({ parentCounter: this.state.parentCounter + 1});
    }
    render(){
        console.log('ParentCounter Render called');
        return(
            <ChildCounter
            onParentCounterIncreament = {this.onParentCounterIncreament}
            parentCounter = {this.state.parentCounter}
            />
            );
    }
}
class ChildCounter extends React.Component{
    state = {
        childCounter1: 0,
        ChildCounter2: 0
    };
    onIncrement = () =>{
        this.props.onParentCounterIncreament();
        this.setState({ childCounter1:this.state.childCounter1 + 1});
    }
}
export{ParentCounter};*/}
export{FavouriteDesert}