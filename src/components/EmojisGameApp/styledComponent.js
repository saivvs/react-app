import tw from 'tailwind.macro';
import styled from '@emotion/styled';

const NavbarTag = styled.div`${tw `flex justify-between border  items-center h-16 shadow-lg p-4`}${props=>({backgroundColor:props.selectedTheme.headerAndFooterBackground,color:props.selectedTheme.color})}`;
const NavbarSubTag = styled.div`${tw `flex items-center p-2`}`;
const GameName = styled.div`${tw `text-3xl p-2 `}`;
const TopScoreTag = styled.div`${tw `m-2 text-lg`}`;
const ScoreTag = styled.div`${tw `text-lg`}`;
const ThemeChangeButton = styled.button`${tw `text-lg p-2  text-black border border-gray-500`}${props=>({color:props.selectedTheme.color})}`;
const EmojisCards = styled.div`${tw `flex flex-wrap justify-center items-center`}${props=>({backgroundColor:props.selectedTheme.backgroundColor})}`;
const EmojiCardTag = styled.div`${tw ` w-64 h-64 border-solid border-black border m-6 flex flex-col items-center justify-center`}${props=>({backgroundColor:props.selectedTheme.emojiBackgroundColor})}`;
const Image = styled.div`${tw `w-4/5`}`;
const EmojiName = styled.div`${tw `text-base text-center`}${props=>({color:props.selectedTheme.color})}`;
const Footer = styled.div`${tw `flex flex-col`}${props=>({backgroundColor:props.selectedTheme.headerAndFooterBackground})}`;
const FooterHeading = styled.div`${tw `text-2xl font-black`}`;
const FooterDescrption= styled.div`${tw `text-lg`}`;
const WinOrLoseTag = styled.div`${tw ``}`;
const Score = styled.div`${tw``}`;
const GameState = styled.div`${tw``}`;
const PlayAgainButton = styled.button`${tw `text-2xl p-2 text text-white rounded`}background-color:#667EEA`;

export {NavbarTag,NavbarSubTag,GameName,ScoreTag,TopScoreTag,ThemeChangeButton,EmojisCards,EmojiCardTag,Image,EmojiName,Footer,FooterHeading,FooterDescrption,WinOrLoseTag,PlayAgainButton,Score,GameState};