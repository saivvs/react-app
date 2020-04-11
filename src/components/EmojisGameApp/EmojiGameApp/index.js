import React from 'react';
import Navbar from '../Navbar/index.js';
import EmojiCard from '../EmojiCard/index.js';
import HowToPlay from '../HowToPlay/index.js';
import {EmojisCards,EmojiGameAppTag} from './styledComponent.js';
import WinOrLose from '../WinOrLose/index.js';
class EmojiGameApp extends React.Component{
    state={
        score:0,
        topScore:0,
        gameState:'playing',
        selectedTheme:EmojiGameApp.themeMode.light,
        emojis:[
            {
                id:0,
                image:'https://tap.ibhubs.in/react/assignments/assignment-5/preview/images/memoji-1.png',
                name:'Exploding Head',
                isClicked:false,
            },
            {
                id:1,
                image:'https://tap.ibhubs.in/react/assignments/assignment-5/preview/images/memoji-2.png',
                name:'Grinning Face with Sweat',
                isClicked:false,
            },
            {
                id:2,
                image:'https://tap.ibhubs.in/react/assignments/assignment-5/preview/images/memoji-3.png',
                name:'Smiling Face with Heart-Eyes',
                isClicked:false,
            },
            {
                id:3,
                image:'https://tap.ibhubs.in/react/assignments/assignment-5/preview/images/memoji-4.png',
                name:'Smirking Face',
                isClicked:false,
            },
            {
                id:4,
                image:'https://tap.ibhubs.in/react/assignments/assignment-5/preview/images/memoji-5.png',
                name:'Thinking Face',
                isClicked:false,
            },
            {
                id:5,
                image:'https://tap.ibhubs.in/react/assignments/assignment-5/preview/images/memoji-6.png',
                name:'Winking Face',
                isClicked:false,
            },
            {
                id:6,
                image:'https://tap.ibhubs.in/react/assignments/assignment-5/preview/images/memoji-7.png',
                name:'Grinning Face',
                isClicked:false,
            },
            {
                id:7,
                image:'https://tap.ibhubs.in/react/assignments/assignment-5/preview/images/memoji-8.png',
                name:'Crying Face',
                isClicked:false,
            },
            {
                id:8,
                image:'https://tap.ibhubs.in/react/assignments/assignment-5/preview/images/memoji-9.png',
                name:'Astonished Face',
                isClicked:false,
            },
            {
                id:9,
                image:'https://tap.ibhubs.in/react/assignments/assignment-5/preview/images/memoji-10.png',
                name:'Face with Tears of Joy',
                isClicked:false,
            },
            {
                id:10,
                image:'https://tap.ibhubs.in/react/assignments/assignment-5/preview/images/memoji-11.png',
                name:'Star-Struck',
                isClicked:false,
            },
            {
                id:11,
                image:'https://tap.ibhubs.in/react/assignments/assignment-5/preview/images/memoji-12.png',
                name:'Winking Face with Tongue',
                isClicked:false,
            },
            ]
    }
    static themeMode={
      light: {
            id: '0',
            themeButtonText: 'Dark Theme',
            headerAndFooterBackground: '#fff',
            backgroundColor: '#ebf4ff',
            emojiBackgroundColor: '#fff',
            scoreColor: '#2a4365',
            color: 'black',
        },
        dark: {
            id: '1',
            themeButtonText: 'Light Theme',
            headerAndFooterBackground: '#2d3748',
            backgroundColor: '#1a202c',
            emojiBackgroundColor: '#2c5282',
            scoreColor: '#fff',
            color: 'white',
        }
    }
    onEmojiClick=(emojiId)=>{
        let x=this.state.emojis.map((emoji)=>
        {
            if(emojiId===emoji.id){
                let Clicked = emoji.isClicked;
                if(!Clicked){
                    emoji.isClicked=true;
                    this.increamentScore();
                }
                else{
                    this.resetGame();
                }
            }
            return emoji;
        }
        );
        this.setState({
            emojis:x
        });
        this.shuffleEmojis();
    }
    shuffleEmojis=()=>{
        let allEmoji=this.state.emojis;
        for (let intialIndex = allEmoji.length - 1; intialIndex > 0; intialIndex--) {
            let randomIndex = Math.floor(Math.random() * (intialIndex + 1));
            [allEmoji[intialIndex], allEmoji[randomIndex]] = [allEmoji[randomIndex], allEmoji[intialIndex]];
        }
        this.setState({
            emojis:allEmoji
        });
    }
    increamentScore=()=>{
        this.setState({
            score:this.state.score + 1
        });
    }
    onPlayAgainClick=()=>{
        this.state.emojis.map((emoji)=>{emoji.isClicked=false});
        this.setState({
            gameState:'playing',
            score:0,
        });
        this.setTopScore();
    }
    resetGame=()=>{
        if(this.state.score===12){
            this.setState({
                gameState:'YOU WIN!'
            });
        }
        else{
            this.setState({gameState:'YOU LOSE!'});
        }
        
    }
    setTopScore=()=>{
        if(this.state.score===12){
            this.setState({
                topScore:this.state.score,
            });
        }
        else if(this.state.score > this.state.topScore){
            this.setState({
                topScore:this.state.score,
            });
        }
        else{
            this.setState({topScore:this.state.topScore});
        }
    }
    onChangeTheme=()=>{
        this.setState({
            selectedTheme:this.state.selectedTheme===EmojiGameApp.themeMode.light?EmojiGameApp.themeMode.dark:EmojiGameApp.themeMode.light,
        });
    }
    renderEmojis=()=>{
        return this.state.emojis.map(emoji=> <EmojiCard key={emoji.name} emoji={emoji} onEmojiClick={this.onEmojiClick} selectedTheme={this.state.selectedTheme}/>);
    }
    render(){
        if(this.state.gameState==='playing'&& this.state.score<12){
                return(
            <EmojiGameAppTag>
            <Navbar onChangeTheme={this.onChangeTheme} selectedTheme={this.state.selectedTheme} score={this.state.score} topScore={this.state.topScore}/>
            <EmojisCards selectedTheme={this.state.selectedTheme}>{this.renderEmojis()}</EmojisCards>
            <HowToPlay selectedTheme={this.state.selectedTheme}/>
            </EmojiGameAppTag>
            );
        }
        else{
            return(
                <div>
                <Navbar onChangeTheme={this.onChangeTheme} selectedTheme={this.state.selectedTheme} score={this.state.score} topScore={this.state.topScore}/>
                <WinOrLose selectedTheme={this.state.selectedTheme} score={this.state.score} gameState={this.state.gameState} onPlayAgainClick={this.onPlayAgainClick}/>
                <HowToPlay selectedTheme={this.state.selectedTheme}/>
                </div>
                );
        }
        
    }
}
export default EmojiGameApp;