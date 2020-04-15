import React from 'react';
import {observable,action} from 'mobx';
import {observer} from 'mobx-react';
import {HeaderTag,ToplevelTag,LevelAndButton,LevelTag,ThemeButton} from './styledComponent.js';

@observer
class Header extends React.Component{
    
    @action.bound
    onChangeSelectedTheme(){
        
    }
    
    
    render(){
        return(
            <HeaderTag>
                <ToplevelTag>
                    TopLevel:
                </ToplevelTag>
                <LevelAndButton>
                    <LevelTag>
                        Level:
                    </LevelTag>
                    <ThemeButton>
                        Mode:
                    </ThemeButton>
                </LevelAndButton>
            </HeaderTag>
            );
    }
}

export default Header;