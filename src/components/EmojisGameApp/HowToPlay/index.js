import React from 'react';
import {Footer,FooterDescrption,FooterHeading} from './styledComponent.js';
class HowToPlay extends React.Component{
    render(){
        const {selectedTheme}=this.props
        return(
            <Footer selectedTheme={selectedTheme}>
                <FooterHeading selectedTheme={selectedTheme}>
                    How To Play?
                </FooterHeading>
                <FooterDescrption selectedTheme={selectedTheme}>
                    Get points by clicking on an image but don't click on any image more than once
                </FooterDescrption>
            </Footer>
            );
    }
}
export default HowToPlay;