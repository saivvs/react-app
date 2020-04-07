import React from 'react';
import {withRouter} from 'react-router-dom';
class CountryCard extends React.Component{
    onClickChangePage=(event)=>{
        this.props.history.push(`/CountryDetails/${this.props.country.alpha3Code}`);
    }
    render(){
        return(
            <div key={this.props.country.alpha3Code} className='country-card' onClick = {this.onClickChangePage}>
            <div className='image'>
            <img  className='country-flag'src={this.props.country.flag} alt='CountryFlag'/></div>
            <div className='country-card-details'>
            <span><strong>{this.props.country.name}</strong></span><br/>
            <span><strong>Population</strong>: {this.props.country.population}</span><br/>
            <span><strong>Region</strong>: {this.props.country.region}</span><br/>
            <span><strong>Capital</strong>: {this.props.country.capital}</span><br/>
            </div>
            </div>
            );
    }
}
export default withRouter(CountryCard);