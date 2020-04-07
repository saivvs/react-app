/*global fetch*/
import React from 'react';
import {withRouter} from 'react-router-dom';
import {Header} from './Header.js';
import {IoIosArrowRoundBack} from 'react-icons/io';
class CountryDetails extends React.Component{
    state={
        filteredCountryDetails:[],
        countryDetails:[]
    }
    goBack=()=>{
        this.props.history.goBack();
               this.getCountries();
        //this.props.history.push('/CountryDashboardApp');
    }
    getCountryDetails=(e)=>{
        this.props.history.push(`/CountryDetails/${e.target.id}`);
       this.getCountries();
       
    }
    componentDidMount(){
        this.getCountries();
    }
    getCountries=()=>{
        fetch('https://restcountries.eu/rest/v2/all')
        .then(response=>response.json())
        .then(data =>{
        let filteredCountries=data.filter(items=>{
                return items.alpha3Code === this.props.match.params.countryId;
            });
        this.setState({
            countryDetails:data,
            filteredCountryDetails:filteredCountries
          });
        });
    }
    render(){
        if(this.state.filteredCountryDetails.length>0){
            const {selectedTheme,onChangeTheme} = this.props;
        return(
         <div className='country-details-page' style={selectedTheme.style}> 
            <Header selectedTheme={selectedTheme} onChangeTheme={onChangeTheme}/>
            <div>
            <button onClick={this.goBack} style={selectedTheme.style} className='newpage-back-button'><strong><IoIosArrowRoundBack/></strong>Back</button>
            </div>
            <div className='new-page' >
                <div className='country-image'>
                <img className='country-logo' src={this.state.filteredCountryDetails[0].flag}/>
                </div>
                <div className='country-details'>
                    <div className='country-name'>
                     {this.state.filteredCountryDetails[0].name}
                    </div>
                    <div className='country-stactices'>
                    <div className='country-stactices-1'>
                       <div> <strong>Native Name</strong> : {this.state.filteredCountryDetails[0].nativeName}<br/></div>
                       <div> <strong>Population</strong> : {this.state.filteredCountryDetails[0].population}<br/></div>
                        <div> <strong>Region</strong> : {this.state.filteredCountryDetails[0].region}<br/></div>
                        <div> <strong>SubRegion</strong> : {this.state.filteredCountryDetails[0].subregion}<br/></div>
                        <div> <strong>Capital</strong> : {this.state.filteredCountryDetails[0].capital}<br/></div>
                    </div>
                    <div className='country-stactices-2'>
                        <div> <strong>Top Level Domain</strong> : {this.state.filteredCountryDetails[0].topLevelDomain[0]}<br/></div>
                        <div> <strong>Currencies</strong> : {this.state.filteredCountryDetails[0].currencies[0].name}<br/></div>
                        <div> <strong>Languages</strong> : {this.state.filteredCountryDetails[0].languages.map(language=>{
                            return(language.name);
                        })}
                        </div>
                    </div>
                    </div>
                    <div>
                        <strong>Border Countries</strong> : {
                        this.state.filteredCountryDetails[0].borders.map(countryAlphaCode=>{
                        const countryObj = this.state.countryDetails.filter(countryname=>countryname.alpha3Code===countryAlphaCode);
                            console.log(countryObj,'obj');
                            return (<button className='newpage-button' style={selectedTheme.style} onClick={this.getCountryDetails} id={countryAlphaCode} key={countryAlphaCode}>{countryObj[0].name}</button>);
                        })}
                    </div>
                </div>
                
            </div>
        </div>
        );
        }
        else{
            return null;
        }
    }
}
export default withRouter(CountryDetails);