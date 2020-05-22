import React,{Component} from 'react';
import {observer} from 'mobx-react';
import {observable} from 'mobx';
import {withScreenSizeDetectors} from '../../hocs/withScreenSizeDetectors.js';

import {DeviceTypeTextBlock,Heading,DeviceTypeTextDisplay} from './styledComponents.js';
@observer
class DeviceTypeText extends Component{
    //@observable deviceType
    
    
    render(){
        const {deviceType} = this.props;
        return(
            <DeviceTypeTextBlock>
                <Heading>DeviceTypeText</Heading>
                <DeviceTypeTextDisplay>Device Type:{deviceType}</DeviceTypeTextDisplay>
            </DeviceTypeTextBlock>
            );
    }
}

export default withScreenSizeDetectors(DeviceTypeText);