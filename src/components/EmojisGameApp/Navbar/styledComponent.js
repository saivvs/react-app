import tw from 'tailwind.macro';
import styled from '@emotion/styled';


const NavbarTag = styled.div`${tw `px-5 py-3 w-full`}${props=>({backgroundColor:props.selectedTheme.headerAndFooterBackground,color:props.selectedTheme.color})}`;
//const NavbarTag = styled.div`${tw `flex justify-between border  items-center h-16 shadow-lg p-4 `}${props=>({backgroundColor:props.selectedTheme.headerAndFooterBackground,color:props.selectedTheme.color})}`;
const NavbarSubTag = styled.div`${tw `flex items-center p-2`}`;
const GameName = styled.div`${tw `text-3xl p-2 `}`;
const TopScoreTag = styled.div`${tw `m-2 text-lg`}`;
const ScoreTag = styled.div`${tw `text-lg`}`;
const ThemeChangeButton = styled.button`${tw `text-lg p-2  text-black border border-gray-500`}${props=>({color:props.selectedTheme.color})}`;
const ScoreCardDivSm= styled.div`${tw `flex flex-row justify-between items-center`}`;
const ScoreCardDiv=styled.div`${tw `sm:hidden flex flex-col items-center justify-center mt-3`}`;
const ScoresTag= styled.div`${tw `hidden sm:flex items-center`}`;


export {NavbarTag,NavbarSubTag,GameName,TopScoreTag,ScoreTag,ScoreCardDivSm,ScoreCardDiv,ScoresTag,ThemeChangeButton};