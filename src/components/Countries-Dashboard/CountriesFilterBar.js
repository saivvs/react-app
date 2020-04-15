import React from 'react';
import {SearchCountry} from './SearchCountry';
import {SelectRegion} from './SelectRegion';

class CountriesFilterBar extends React.Component{
    render(){
        return(
        <div className="filters" style={this.props.selectedTheme.style}>
        <SearchCountry selectedTheme={this.props.selectedTheme} onChangeSearchCountry={this.props.onChangeSearchCountry}/>
        <SelectRegion selectRegion={this.props.regions} onChangeSelectedRegion={this.props.onChangeSelectedRegion}/>
        </div>
        );
    }
}
export{CountriesFilterBar};