import React from 'react';
import {NavbarTag,NavbarSubTag,GameName,ScoreTag,TopScoreTag,ThemeChangeButton} from '../EmojisGameApp/styledComponent.js';
class Navbar extends React.Component{
    render(){
        const{score,topScore,onChangeTheme,selectedTheme}=this.props;
        return(
            <NavbarTag selectedTheme={selectedTheme}>
                <GameName>
                    Emoji Game
                </GameName>
                <NavbarSubTag>
                    <ScoreTag>
                        Score:{score}
                    </ScoreTag>
                    <TopScoreTag>
                        TopScore:{topScore}
                    </TopScoreTag>
                    <ThemeChangeButton selectedTheme={selectedTheme}>
                        <button onClick={onChangeTheme} >{selectedTheme.themeButtonText}</button>
                    </ThemeChangeButton>
                </NavbarSubTag>
            </NavbarTag>
            );
    }
}
export default Navbar;