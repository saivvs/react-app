/*global React*/
import React from 'react';
import {CheckboxWithLabel} from '../../common/components/check-box-with-label.js';
class VisitedCities extends React.Component{
    constructor(props){
        super(props);
            this.state = {
                visitedCities:[],
                selectedCities:[],
                cityOptions:'',
        };
    }
    handleCheckboxClick = (event)=>{
        console.log(event.target.id);
    }
    handleSubmit = () =>{
        
    }
    displayVisitedCitiesMessage=()=>{
        
    }
    renderCityOptions = () =>{
        const {cityList} = this.props;
        let cityListEls =  cityList.map((eachCity,index)=><CheckboxWithLabel id={index} label = {eachCity} handleCheckboxClick={this.handleCheckboxClick}/>);
        console.log(cityListEls);
        return cityListEls;
    }
    render(){
        
        return(
        <div>
        <h4>Which of the following cities you visited?</h4>
        {this.renderCityOptions()}
        <button onClick={this.handleSubmit}>Make Your Choice</button>
        </div>
        );
    }
}
export{VisitedCities};