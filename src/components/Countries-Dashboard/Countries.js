import React from 'react';
import CountryCard from './CountryCard';
type DifferentProps={
    countriesList:any,
    searchText:string,
    regions:string,
    selectedTheme:any,
    onClickChangePage:any
}
class Countries extends React.Component<DifferentProps>{
    showFilteredCountries=()=>{
        const {countriesList,searchText,regions,selectedTheme,onClickChangePage} = this.props;
        const filteredCountryList=countriesList.filter(eachCountryObj=>{
            if(regions==="All" &&(eachCountryObj.name.toLowerCase().includes(searchText.toLowerCase()))){
                return true;
            }
            else if(regions===eachCountryObj.region &&(eachCountryObj.name.toLowerCase().includes(searchText.toLowerCase()))){
                return true;
            }
            else return false;
        }
        );
        
        let countriesEl =filteredCountryList.map(country=>{
                return(<CountryCard key={country.name} country={country} selectedTheme={selectedTheme} onClickChangePage={onClickChangePage}/>);
            });
        if(countriesEl.length===0){
            return(
                <div className='country-not-found'>Country Not Found</div>
                );
        }
        return countriesEl;
    }
    render(){
        const { selectedTheme } = this.props;
        
        console.log("Countries SelectedTheme:", selectedTheme);
        
        return(
            <div className='countries-list' style={selectedTheme.style}>
            {this.showFilteredCountries()}
            </div>
            );
    }
}
export{Countries};