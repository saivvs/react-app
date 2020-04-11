import React from 'react';
import {EmojiCardTag,Image,EmojiName} from './styledComponent.js';
class EmojiCard extends React.Component{
    onEmojiClick=()=>{
        const {emoji,selectedTheme,onEmojiClick}=this.props;
        onEmojiClick(emoji.id);
    }
    render(){
        const {emoji,selectedTheme}=this.props;
        return(
             <EmojiCardTag onClick={this.onEmojiClick} selectedTheme={selectedTheme}>
             <Image><img src={emoji.image}/></Image>
             <EmojiName selectedTheme={selectedTheme}>{emoji.name}</EmojiName>
             </EmojiCardTag>
            );
    }
}
export default EmojiCard;