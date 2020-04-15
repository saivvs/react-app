import React from 'react';
import {NavbarTag,NavbarSubTag,GameName,ScoreCardDivSm,ScoreCardDiv,ScoresTag,ScoreTag,TopScoreTag,ThemeChangeButton} from './styledComponent.js';
class Navbar extends React.Component{
    render(){
        console.log(this.props);
        const{score,topScore,onChangeTheme,selectedTheme}=this.props;
        return(
            <NavbarTag selectedTheme={selectedTheme}>
            <ScoreCardDivSm>
                <GameName>
                    Emoji Game
                </GameName>
                <NavbarSubTag>
                    <ScoresTag>
                    <ScoreTag>
                        Score:{score}
                    </ScoreTag>
                    <TopScoreTag>
                        TopScore:{topScore}
                    </TopScoreTag>
                    </ScoresTag>
                    <ThemeChangeButton selectedTheme={selectedTheme}>
                        <button onClick={onChangeTheme} >{selectedTheme.themeButtonText}</button>
                    </ThemeChangeButton>
                    </NavbarSubTag>
                    </ScoreCardDivSm>
                    <ScoreCardDiv>
                        <ScoreTag>
                        TopScore:{topScore}
                    </ScoreTag>
                    <TopScoreTag>
                        Score:{score}
                    </TopScoreTag>
                    </ScoreCardDiv>
            </NavbarTag>
            );
    }
}
export default Navbar;