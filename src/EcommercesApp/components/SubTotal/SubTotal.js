import React,{Component} from 'react';
import {observer} from 'mobx-react';

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
                {totalCartAmount}
                </Amount>
            </SubTotalTag>
            );
    }
}

export {SubTotal};
