import React from 'react';
import {SearchText} from './SearchText';
import {SelectRegion} from './SelectRegion';
class Filter extends React.Component{
    render(){
        return(
        <div className="filters" style={this.props.selectedTheme.style}>
        <SearchText selectedTheme={this.props.selectedTheme} onChangeSearchCountry={this.props.onChangeSearchCountry}/>
        <SelectRegion selectRegion={this.props.regions} onChangeSelectedRegion={this.props.onChangeSelectedRegion}/>
        </div>
        );
    }
}
export{Filter};