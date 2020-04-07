import React from 'react';
import {Footer,FooterDescrption,FooterHeading} from '../EmojisGameApp/styledComponent.js';
class HowToPlay extends React.Component{
    render(){
        const {selectedTheme}=this.props
        return(
            <Footer selectedTheme={selectedTheme}>
                <FooterHeading>
                    How To Play?
                </FooterHeading>
                <FooterDescrption>
                    Get points by clicking on an image but don't click on any image more than once
                </FooterDescrption>
            </Footer>
            );
    }
}
export default HowToPlay;