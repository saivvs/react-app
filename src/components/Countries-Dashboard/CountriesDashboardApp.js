/*global fetch*/
import React from 'react';
import './Dashboard.css';
import {Header} from './Header.js';
import {CountriesFilterBar} from './CountriesFilterBar.js';
import {Countries} from './Countries.js';
import {withRouter} from 'react-router-dom';
const region=[];

class CountryDashboardApp extends React.Component{
    state={
        countries:[],
        showCountries:[],
        regions:'All',
        searchText:'',
    }
    componentDidMount(){
        this.getCountries();
    }
    getCountries=()=>{
        fetch('https://restcountries.eu/rest/v2/all')
        .then(response=>response.json())
        .then(data =>{
        this.getRegions(data);    
            this.setState({
                countries:data,
                showCountries:data
            });
        });
    }
    getRegions=(data)=>{
        data.forEach(country=>{
            if((region.indexOf(country.region))===-1){
                region.push(country.region);
            }
        });
    }
    onChangeSelectedRegion=(event)=>{
        this.setState({
            regions:event.target.value
        });
    }
    onChangeSearchCountry=(event)=>{
        this.setState({
            searchText:event.target.value
        });
    }
    
    render(){
        const {selectedTheme,onChangeTheme} = this.props;
        if(this.state.showCountries.length>0){
        return(
            <div>
            <Header selectedTheme={selectedTheme} onChangeTheme={onChangeTheme}/>
            <CountriesFilterBar selectedTheme={selectedTheme} regions={region} onChangeSearchCountry={this.onChangeSearchCountry} onChangeSelectedRegion={this.onChangeSelectedRegion}/>
            
            <Countries  selectedTheme={selectedTheme} searchText={this.state.searchText} regions={this.state.regions} countriesList={this.state.countries}/>
            </div>
            );
        }
        else{
            return(<div className='loading'>Loading...</div>);
        }
    }
}


export default withRouter(CountryDashboardApp);