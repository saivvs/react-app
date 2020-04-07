// Write your React Code here
/*global React*/
/* global ReactDOM*/
import React from 'react';
const rootElement = document.getElementById('root');
class Car extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            status:'Stopped',
            speed: 0,
            button: 'Start'
        };
    }
    onStartOrStop = () =>{
        if(this.state.status === 'Stopped'){
            this.setState(state => ({status: 'Running',button:'Stopped'}));
        }
        else{
        this.setState(state =>({status: 'Stopped',button:'Start'}));
        }
    }
    onAccelerate = () => {
        if(this.state.status !== 'Stopped'){
        let carSpeed = this.state.speed + 10;
        this.displayStatusText(carSpeed);
        }
    }
    onApplyBrake = () => {
            let carSpeed = this.state.speed - 10;
            this.displayStatusText(carSpeed);
    }
    displayStatusText = (presentCarSpeed) => {
        if(presentCarSpeed <= 0){
            this.setState({
                speed:0,
                status:'Running',
            });
        }
        else if(presentCarSpeed > 0){
           this.setState({
               speed: presentCarSpeed,
               status: `Running with speed ${presentCarSpeed} Kmph`
           });  
        }
    }
    render(){
        return(
            <div className='car'>
            <div className='header'>
            <p>Car Id: {this.props.id}</p>
            <button className='car-remove-button'  id={this.props.id} onClick={this.props.removeCar}>❌</button>
            </div>
            <div className = 'car-body'>
            <div className='start-stop'>
            <button className={this.state.button} onClick={this.onStartOrStop} >{this.state.button}</button>
            </div>
            <div className='status'>
            <p>Status: {this.state.status}</p>
            </div>
            <div className='speed-buttons'>
            <button className='car-accelerate-button' onClick={this.onAccelerate} >Accelerate</button>
            <button className='car-break-button' onClick={this.onApplyBrake}>Apply Brake</button>
            </div>
            </div>
            </div>
            );
    }
}
class CarsList extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            listOfCars : [1],
    };
    }
    addCarToCarsList = () =>{
        let newListOfCars = this.state.listOfCars.slice(0);
        let length = newListOfCars.length;
        let lastCarId = newListOfCars[length-1];
        let newCarId =lastCarId+1;
        newListOfCars.push(newCarId);
        this.setState({
            listOfCars: newListOfCars,
        });
        if(isNaN(newListOfCars[0])){
            newListOfCars[0]=parseInt(1);
        }
    }
    renderCarList = () => {
        return this.state.listOfCars.map(eachCarId =>{
            return(
            <Car 
            id = {eachCarId}
            removeCar = {this.removeCarFromCarsList}
            />);
        });
    }
    removeCarFromCarsList = (event) => {
        let remainingCars = this.state.listOfCars.filter((items)=>items!=parseInt(event.target.id))
        this.setState({
            listOfCars:remainingCars,
        });
    }
    render(){
        return(
            <div>
            <button className = 'add-car-button' onClick = {this.addCarToCarsList}>Add Car</button>
            <div>{this.renderCarList()}</div>
            </div>
            );
    }
    
}
export {CarsList};
