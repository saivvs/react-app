import React from 'react';


class SelectRegion extends React.Component{
    render(){
        const {selectRegion} = this.props;
        return(
            <div >
            <select className='selection-bar' onChange={this.props.onChangeSelectedRegion}>
            <option value='All'>All</option>
            {selectRegion.map(region=>{
                return(<option key={region} value={region}>{region}</option>);
            })}
            </select>
            </div>
            );
    }
}
export{SelectRegion};