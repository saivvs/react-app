import React from 'react';
import {action} from 'mobx';
import {observer} from 'mobx-react';

import themeStore from '../../../stores/ThemeStore';

import {HeaderTag,ToplevelTag,LevelAndButton,LevelTag,ThemeButton} from './styledComponents.js';

@observer
class Header extends React.Component{
    @action.bound
    onChangeSelectedTheme(){
        themeStore.onChangeSelectedTheme(themeStore.selectedTheme.themeButtonText);
    }
    render(){
        const {level,topLevel,width}=this.props;
        return(
            <HeaderTag selectedTheme={themeStore.selectedTheme} width={width}>
                <ToplevelTag>
                    TopLevel:{topLevel}
                </ToplevelTag>
                <LevelAndButton>
                    <LevelTag>
                        Level:{level}
                    </LevelTag>
                    <ThemeButton onClick={this.onChangeSelectedTheme} selectedTheme={themeStore.selectedTheme}>
                        Mode:{themeStore.selectedTheme.themeButtonText}
                    </ThemeButton>
                </LevelAndButton>
            </HeaderTag>
            );
    }
}

export default Header;