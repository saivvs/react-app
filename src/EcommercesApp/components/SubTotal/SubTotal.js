import React,{Component} from 'react';
import {observer} from 'mobx-react';
import   { FaRupeeSign }  from 'react-icons/fa';

import {SubTotalTag,Amount,SubTotalSubTag} from './styledComponents.js';
@observer
class SubTotal extends Component{
    
    render(){
        const{totalCartAmount}=this.props;
        return(
            <SubTotalTag>
                <SubTotalSubTag>
                SubTotal
                </SubTotalSubTag>
                <Amount>
                <FaRupeeSign/> {totalCartAmount}
                </Amount>
            </SubTotalTag>
            );
    }
}

export {SubTotal};
