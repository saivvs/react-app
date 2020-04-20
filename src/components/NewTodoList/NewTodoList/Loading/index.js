import React from 'react';

import {LoadingTag,LoadingImage} from './styledComponents';
class Loading extends React.Component{
    
    
    render(){
        
        return(
                <LoadingTag>
                    <LoadingImage src="https://www.zilliondesigns.com/blog/wp-content/uploads/loading-the-truck.gif">
                        
                    </LoadingImage>
                </LoadingTag>
            );
    }
}

export default Loading;